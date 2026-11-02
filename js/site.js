document.addEventListener('DOMContentLoaded', () => {
  const yearTargets = document.querySelectorAll('[data-current-year]');
  yearTargets.forEach((target) => {
    target.textContent = new Date().getFullYear();
  });

  const contentToggleButtons = document.querySelectorAll('.toggle-content-btn');
  contentToggleButtons.forEach((button) => {
    bindContentToggle(button);
  });

  const serviceGrid = document.querySelector('.services-list .card-grid');
  if (serviceGrid) {
    const searchInput = document.querySelector('#serviceSearch');
    const sortSelect = document.querySelector('#serviceSort');
    const results = document.querySelector('#serviceResults');
    const loadStatus = document.querySelector('#serviceLoadStatus');
    let serviceCards = [...serviceGrid.querySelectorAll('.feature-card')];
    let originalOrder = new Map(serviceCards.map((card, index) => [card, index]));

    const updateServices = () => {
      const query = searchInput.value.trim().toLocaleLowerCase();
      const sortOrder = sortSelect.value;
      const sortedCards = [...serviceCards];

      if (sortOrder === 'az' || sortOrder === 'za') {
        sortedCards.sort((first, second) => {
          const firstName = first.querySelector('h3').textContent.replace(/^\d+\.\s*/, '');
          const secondName = second.querySelector('h3').textContent.replace(/^\d+\.\s*/, '');
          const comparison = firstName.localeCompare(secondName);
          return sortOrder === 'az' ? comparison : -comparison;
        });
      } else {
        sortedCards.sort((first, second) => originalOrder.get(first) - originalOrder.get(second));
      }

      sortedCards.forEach((card) => {
        const matches = card.textContent.toLocaleLowerCase().includes(query);
        card.hidden = !matches;
        serviceGrid.append(card);
      });

      const visibleCount = sortedCards.filter((card) => !card.hidden).length;
      results.textContent = `${visibleCount} ${visibleCount === 1 ? 'service' : 'services'} found.`;
    };

    const renderService = (service, index) => {
      const card = document.createElement('article');
      const image = document.createElement('img');
      const toggle = document.createElement('button');
      const details = document.createElement('div');
      const heading = document.createElement('h3');
      const description = document.createElement('p');
      const detailsId = `service-card-detail-${service.id}`;

      card.className = 'feature-card';
      image.className = 'card-img';
      image.src = service.image;
      image.alt = service.imageAlt;
      image.loading = 'lazy';
      image.decoding = 'async';
      image.dataset.lightbox = '';
      image.tabIndex = 0;
      image.setAttribute('role', 'button');
      image.setAttribute('aria-haspopup', 'dialog');
      image.setAttribute('aria-label', `View larger image: ${service.imageAlt}`);

      toggle.type = 'button';
      toggle.className = 'toggle-content-btn';
      toggle.setAttribute('aria-controls', detailsId);
      toggle.setAttribute('aria-expanded', 'true');
      toggle.textContent = 'Hide details';

      details.className = 'card-details';
      details.id = detailsId;
      heading.textContent = `${index + 1}. ${service.name}`;
      description.textContent = service.description;
      details.append(heading, description);
      card.append(image, toggle, details);
      bindContentToggle(toggle);

      return card;
    };

    const loadServices = async () => {
      loadStatus.textContent = 'Loading services...';

      try {
        const response = await fetch('services.json');
        if (!response.ok) {
          throw new Error(`Service data request failed with status ${response.status}.`);
        }

        const services = await response.json();
        if (!Array.isArray(services) || !services.every(isServiceRecord)) {
          throw new Error('The service data file has an invalid format.');
        }

        const cards = services.map(renderService);
        serviceGrid.replaceChildren(...cards);
        serviceCards = cards;
        originalOrder = new Map(serviceCards.map((card, index) => [card, index]));
        loadStatus.textContent = '';
        updateServices();
      } catch (error) {
        console.error('Unable to load services.json; keeping the HTML service list.', error);
        loadStatus.textContent = 'The service list could not be refreshed. The included service list is still available.';
      }
    };

    searchInput.addEventListener('input', updateServices);
    sortSelect.addEventListener('change', updateServices);
    updateServices();
    loadServices();
  }

  const lightboxImages = document.querySelectorAll('img[data-lightbox]');
  if (lightboxImages.length && typeof HTMLDialogElement !== 'undefined') {
    const lightbox = document.createElement('dialog');
    const closeButton = document.createElement('button');
    const preview = document.createElement('img');
    const caption = document.createElement('p');

    lightbox.className = 'image-lightbox';
    lightbox.setAttribute('aria-label', 'Image preview');
    closeButton.type = 'button';
    closeButton.className = 'image-lightbox-close';
    closeButton.textContent = 'Close image';
    preview.alt = '';
    caption.className = 'image-lightbox-caption';
    lightbox.append(closeButton, preview, caption);
    document.body.append(lightbox);

    const closeLightbox = () => lightbox.close();
    closeButton.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (event) => {
      if (event.target === lightbox) {
        closeLightbox();
      }
    });

    lightboxImages.forEach(setupLightboxImage);

    const openLightbox = (image) => {
      preview.src = image.currentSrc || image.src;
      preview.alt = image.alt;
      caption.textContent = image.alt;
      lightbox.showModal();
      closeButton.focus();
    };

    document.addEventListener('click', (event) => {
      if (event.target instanceof Element) {
        const image = event.target.closest('img[data-lightbox]');
        if (image) {
          openLightbox(image);
        }
      }
    });
    document.addEventListener('keydown', (event) => {
      if ((event.key === 'Enter' || event.key === ' ') && event.target instanceof Element) {
        const image = event.target.closest('img[data-lightbox]');
        if (image) {
          event.preventDefault();
          openLightbox(image);
        }
      }
    });
  }

  const forms = document.querySelectorAll('form[data-form]');
  forms.forEach((form) => {
    form.addEventListener('input', clearFieldValidation);
    form.addEventListener('change', clearFieldValidation);
    form.addEventListener('submit', async (event) => {
      event.preventDefault();

      const status = form.querySelector('.form-status');
      const validationResult = validateForm(form);

      if (!validationResult.isValid) {
        showStatus(status, validationResult.message, 'error');
        return;
      }

      const nameField = form.elements.namedItem(form.dataset.form === 'enquiry' ? 'fullName' : 'contactName');
      const emailSubject = form.elements.namedItem('_subject');
      const submitButton = form.querySelector('button[type="submit"]');
      emailSubject.value = form.dataset.form === 'enquiry'
        ? `Project enquiry from ${nameField.value.trim()}`
        : `${form.elements.namedItem('subject').value.trim()} - ${nameField.value.trim()}`;

      const estimate = form.dataset.form === 'enquiry'
        ? form.querySelector('#enquiryEstimate')
        : null;
      if (estimate) {
        estimate.hidden = true;
      }

      if (form.dataset.form === 'enquiry') {
        const serviceType = form.elements.namedItem('serviceType').value;
        const estimates = {
          cabinetry: 'Estimated guide: R 2,500-R 4,500 per linear metre.',
          furniture: 'Estimated guide: R 3,000-R 12,000 per custom piece.',
          fitout: 'Estimated guide: R 5,000+ per project.',
          other: 'A custom estimate is needed for this type of project.'
        };
        estimate.textContent = `${estimates[serviceType]} This is an indicative starting range from the website price guide, not a quotation. Final pricing depends on project specifications and materials.`;
      }

      submitButton.disabled = true;
      showStatus(status, 'Sending your message...', 'pending');

      try {
        let response;
        try {
          const ajaxAction = form.action.replace('https://formsubmit.co/', 'https://formsubmit.co/ajax/');
          response = await fetch(ajaxAction, {
            method: 'POST',
            body: new FormData(form),
            headers: { Accept: 'application/json' }
          });
        } catch (error) {
          console.error('Unable to reach the form submission service.', error);
          showStatus(status, 'We could not reach the email service. Check your connection and try again.', 'error');
          return;
        }

        let result;
        try {
          result = await response.json();
        } catch (error) {
          console.error('The form submission service returned an unreadable response.', error);
          showStatus(status, 'The email service returned an unexpected response. Please try again later.', 'error');
          return;
        }

        if (!result || typeof result !== 'object') {
          console.error('The form submission service returned an invalid response.');
          showStatus(status, 'The email service returned an unexpected response. Please try again later.', 'error');
          return;
        }

        if (!response.ok || result.success !== 'true' && result.success !== true) {
          const errorMessage = typeof result.message === 'string' && result.message.trim()
            ? result.message
            : 'The message could not be sent. Please try again later.';
          showStatus(status, errorMessage, 'error');
          return;
        }

        if (estimate) {
          estimate.hidden = false;
        }
        showStatus(status, 'Your message was sent successfully. Thank you for contacting Woodwork.', 'success');
        form.reset();
        form.querySelectorAll('[aria-invalid]').forEach((field) => {
          field.removeAttribute('aria-invalid');
        });
      } finally {
        submitButton.disabled = false;
      }
    });
  });

  const revealItems = document.querySelectorAll('.reveal-on-scroll');
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    revealItems.forEach((item) => revealObserver.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add('is-visible'));
  }
});

function bindContentToggle(button) {
  const details = button.closest('.feature-card').querySelector('.card-details');
  button.hidden = false;

  button.addEventListener('click', () => {
    const shouldHide = button.getAttribute('aria-expanded') === 'true';
    details.hidden = shouldHide;
    button.setAttribute('aria-expanded', String(!shouldHide));
    button.textContent = shouldHide ? 'Show details' : 'Hide details';
  });
}

function setupLightboxImage(image) {
  image.tabIndex = 0;
  image.setAttribute('role', 'button');
  image.setAttribute('aria-haspopup', 'dialog');
  image.setAttribute('aria-label', `View larger image: ${image.alt}`);
}

function isServiceRecord(service) {
  return service
    && typeof service.id === 'string'
    && /^[a-z0-9-]+$/.test(service.id)
    && typeof service.name === 'string'
    && typeof service.image === 'string'
    && typeof service.imageAlt === 'string'
    && typeof service.description === 'string';
}

function validateForm(form) {
  const fields = {
    fullName: {
      label: 'Full name',
      validator: (value) => value.trim().length >= 2 && value.length <= 100,
      message: 'Please enter a name between 2 and 100 characters.'
    },
    email: {
      label: 'Email address',
      validator: (value) => value.length <= 254 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim()),
      message: 'Please enter a valid email address.'
    },
    phone: {
      label: 'Phone number',
      validator: (value) => value.trim().length <= 25
        && /^\+?[0-9\s()-]{7,24}$/.test(value.trim())
        && (value.match(/[0-9]/g) || []).length >= 7,
      message: 'Please enter a valid phone number.'
    },
    serviceType: {
      label: 'Service type',
      validator: (value) => value.trim().length > 0,
      message: 'Please select a service category.'
    },
    messageType: {
      label: 'Message type',
      validator: (value) => value.trim().length > 0,
      message: 'Please select a message type.'
    },
    details: {
      label: 'Project details',
      validator: (value) => value.trim().length >= 20 && value.length <= 2000,
      message: 'Please enter project details between 20 and 2,000 characters.'
    },
    contactName: {
      label: 'Name',
      validator: (value) => value.trim().length >= 2 && value.length <= 100,
      message: 'Please enter a name between 2 and 100 characters.'
    },
    subject: {
      label: 'Subject',
      validator: (value) => value.trim().length >= 3 && value.length <= 120,
      message: 'Please enter a subject between 3 and 120 characters.'
    },
    contactMessage: {
      label: 'Message',
      validator: (value) => value.trim().length >= 15 && value.length <= 3000,
      message: 'Please enter a message between 15 and 3,000 characters.'
    }
  };

  for (const [fieldName, config] of Object.entries(fields)) {
    const input = form.elements.namedItem(fieldName);
    if (!input) {
      continue;
    }

    const value = input.value;
    if (config.validator(value)) {
      input.removeAttribute('aria-invalid');
      continue;
    }

    input.setAttribute('aria-invalid', 'true');
    input.focus();
    return {
      isValid: false,
      message: config.message
    };
  }

  return {
    isValid: true,
    message: 'Your information passed validation.'
  };
}

function showStatus(element, message, statusType) {
  if (!element) {
    return;
  }

  element.textContent = message;
  element.classList.remove('success', 'error', 'pending');
  element.classList.add(statusType);
  element.setAttribute('aria-live', 'polite');
}

function clearFieldValidation(event) {
  if (event.target instanceof HTMLElement && event.target.form?.matches('form[data-form]')) {
    event.target.removeAttribute('aria-invalid');
  }
}
