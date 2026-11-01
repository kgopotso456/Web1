document.addEventListener('DOMContentLoaded', () => {
  const yearTargets = document.querySelectorAll('[data-current-year]');
  yearTargets.forEach((target) => {
    target.textContent = new Date().getFullYear();
  });

  const contentToggleButtons = document.querySelectorAll('.toggle-content-btn');
  contentToggleButtons.forEach((button) => {
    const details = button.closest('.feature-card').querySelector('.card-details');
    button.hidden = false;

    button.addEventListener('click', () => {
      const shouldHide = button.getAttribute('aria-expanded') === 'true';
      details.hidden = shouldHide;
      button.setAttribute('aria-expanded', String(!shouldHide));
      button.textContent = shouldHide ? 'Show details' : 'Hide details';
    });
  });

  const serviceGrid = document.querySelector('.services-list .card-grid');
  if (serviceGrid) {
    const searchInput = document.querySelector('#serviceSearch');
    const sortSelect = document.querySelector('#serviceSort');
    const results = document.querySelector('#serviceResults');
    const serviceCards = [...serviceGrid.querySelectorAll('.feature-card')];
    const originalOrder = new Map(serviceCards.map((card, index) => [card, index]));

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

    searchInput.addEventListener('input', updateServices);
    sortSelect.addEventListener('change', updateServices);
    updateServices();
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

    lightboxImages.forEach((image) => {
      const openLightbox = () => {
        preview.src = image.currentSrc || image.src;
        preview.alt = image.alt;
        caption.textContent = image.alt;
        lightbox.showModal();
        closeButton.focus();
      };

      image.tabIndex = 0;
      image.setAttribute('role', 'button');
      image.setAttribute('aria-haspopup', 'dialog');
      image.setAttribute('aria-label', `View larger image: ${image.alt}`);
      image.addEventListener('click', openLightbox);
      image.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          openLightbox();
        }
      });
    });
  }

  const forms = document.querySelectorAll('form[data-form]');
  forms.forEach((form) => {
    form.addEventListener('submit', (event) => {
      event.preventDefault();

      const status = form.querySelector('.form-status');
      const validationResult = validateForm(form);

      if (!validationResult.isValid) {
        showStatus(status, validationResult.message, 'error');
        return;
      }

      showStatus(status, validationResult.message, 'success');
      form.reset();
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

function validateForm(form) {
  const formType = form.dataset.form;
  const fields = {
    fullName: {
      label: 'Full name',
      validator: (value) => value.trim().length >= 2,
      message: 'Please enter your full name.'
    },
    email: {
      label: 'Email address',
      validator: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim()),
      message: 'Please enter a valid email address.'
    },
    phone: {
      label: 'Phone number',
      validator: (value) => /^\+?[0-9\s()-]{7,}$/.test(value.trim()),
      message: 'Please enter a valid phone number.'
    },
    serviceType: {
      label: 'Service type',
      validator: (value) => value.trim().length > 0,
      message: 'Please select a service category.'
    },
    details: {
      label: 'Project details',
      validator: (value) => value.trim().length >= 20,
      message: 'Please add at least 20 characters describing your project.'
    },
    contactName: {
      label: 'Name',
      validator: (value) => value.trim().length >= 2,
      message: 'Please enter your name.'
    },
    subject: {
      label: 'Subject',
      validator: (value) => value.trim().length >= 3,
      message: 'Please add a brief subject.'
    },
    contactEmail: {
      label: 'Email address',
      validator: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim()),
      message: 'Please enter a valid email address.'
    },
    contactMessage: {
      label: 'Message',
      validator: (value) => value.trim().length >= 15,
      message: 'Please include a message of at least 15 characters.'
    }
  };

  for (const [fieldName, config] of Object.entries(fields)) {
    const input = form.elements.namedItem(fieldName);
    if (!input) {
      continue;
    }

    const value = input.value;
    if (config.validator(value)) {
      input.setAttribute('aria-invalid', 'false');
      continue;
    }

    input.setAttribute('aria-invalid', 'true');
    input.focus();
    return {
      isValid: false,
      message: config.message
    };
  }

  const successMessages = {
    enquiry: 'Thank you! Your enquiry has been prepared and will be reviewed by the Woodwork team.',
    contact: 'Thank you! Your message has been sent and we will respond as soon as possible.'
  };

  return {
    isValid: true,
    message: successMessages[formType] || 'Thank you for contacting Woodwork.'
  };
}

function showStatus(element, message, statusType) {
  if (!element) {
    return;
  }

  element.textContent = message;
  element.classList.remove('success', 'error');
  element.classList.add(statusType);
  element.setAttribute('aria-live', 'polite');
}
