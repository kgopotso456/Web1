# Woodwork Website

## Project Information

- Student Name: KGOPOTSO
- Student ID: ST10527357
- Course/Group: DIS1 Group 2
- Project Title: Woodwork Website
- Project Type: Responsive business website for a custom carpentry and woodworking company

## Project Overview

Woodwork is a responsive multi-page website created for a custom carpentry and woodworking business. The website presents the company’s services, communicates its craftsmanship values, shows estimated pricing information, and provides visitors with clear pathways to request a quote or contact the business.

The aim of the project is to create an engaging and professional online presence that reflects the quality and reliability of the business. The design uses a consistent visual style, shared navigation, accessible form controls, responsive layouts, and image-based branding to deliver a polished user experience across desktop, tablet, and mobile devices.

## Project Visions

### Vision 0.0.1 - Initial concept

- Added the basic website structure using HTML
- Created the main pages for the project
- Included key business information and content sections

### Vision 0.0.2 - Improved website version

- Added CSS styling to improve the visual design
- Created a more professional and modern layout
- Improved spacing, colours, typography, and page consistency
- Added responsive behavior for different screen sizes
- Improved navigation and page usability

### Fixed / Updated(v.0.0.2)

- Fixed layout consistency across all pages
- Updated the navigation to be cleaner and easier to use
- Improved mobile responsiveness
- Improved accessibility with visible focus states and labelled form fields
- Fixed design issues to make the website look more polished
- Added a better user experience through updated spacing and section formatting

### What’s New(v.0.0.2)

- Added styling and professional presentation
- Added responsive layout improvements
- Added mobile-friendly navigation
- Added improved content formatting and page structure
- Added final refinements for a more complete website appearance

## Website Goals and Objectives

The main goals of the website are to:

1. Promote the Woodwork brand and its craftsmanship.
2. Present the company’s services in a clear and professional layout.
3. Build trust with potential clients through case-study-style content and project information.
4. Provide an easy way for customers to submit an enquiry or request a quote.
5. Ensure the website is responsive, accessible, and easy to navigate on all screen sizes.
6. Support the user journey from awareness to enquiry and contact.

## Key Features and Functionality

- Responsive website layout for desktop, tablet, and mobile screens
- Shared navigation across all pages for consistency
- Sticky header with translucent background and blur effect
- CSS-only mobile navigation menu that works without JavaScript
- Homepage hero section with clear call-to-action button
- Service cards for cabinetry, furniture, and commercial fit-outs
- Service cards loaded dynamically from `services.json`, with the HTML cards available as a fallback
- Searchable and sortable service cards
- Independent show/hide controls for each service and team card
- Accessible image lightbox gallery and expandable service FAQs
- Pricing table showing estimated project ranges
- Enquiry form with required fields for client and project details
- Contact page with business information, map embed, and message form
- Google Maps directions links for both listed locations
- WhatsApp contact link and social media profile links for X, TikTok, WhatsApp, and YouTube
- Icon-only social buttons with a green hover-fill animation, keyboard-focus styling, and reduced-motion support
- Page-specific search and social-sharing metadata, robots.txt, and XML sitemap
- Lazy-loaded supporting images, reduced-motion support, and embed restrictions
- Accessible design using skip links, visible focus indicators, and labelled form controls
- Consistent visual identity and professional layout throughout the project

## Timeline and Milestones

| Phase | Milestone | Description |
| --- | --- | --- |
| Phase 1 | Planning and research | Defined the project purpose, target audience, and structure |
| Phase 2 | Content and layout planning | Created page outline, navigation, and content structure |
| Phase 3 | Homepage and core pages | Developed the main layout and sections for all key pages |
| Phase 4 | Styling and responsiveness | Added CSS styling, mobile layout, and interactive menu behaviour |
| Phase 5 | Accessibility and refinement | Improved focus states, labels, and usability across devices |
| Phase 6 | Final review and documentation | Completed README updates and project summary |

## Project Functionality

The website includes the following pages:

- Home
- About Us
- Services
- Enquiry
- Contact

The enquiry and contact forms validate in the browser and submit asynchronously to FormSubmit using its AJAX endpoint, addressed to `mahlokwanekgopotso05@gmail.com`. The first real submission must be used to verify/activate this recipient with FormSubmit before delivery is enabled. Form data is shared with this third-party service; review its current privacy and retention terms before launch. The site does not store submissions itself. The enquiry form displays the selected service's indicative starting price range after successful submission; it is not a custom quote. Run the website on an HTTP/HTTPS web server; opening the HTML files directly with `file://` does not support FormSubmit.

## Part 3: Functionality and SEO Checklist

### Implemented in the website

- JavaScript interactions include the responsive navigation, reveal-on-scroll animation, service search and sorting, show/hide card details, image lightbox, and expandable service FAQs.
- Both forms have labelled fields, browser-required attributes, JavaScript client-side validation, HTML `POST` actions, and asynchronous submission through FormSubmit. Contact includes a message-type selection; enquiry collects the project town or suburb and displays an indicative price response based on the published guide.
- Contact and enquiry forms use a responsive two-column desktop layout with full-width message fields and a single-column mobile layout.
- The enquiry form validates phone format and project detail length; both forms set input length limits, show field-level invalid states, and display distinct pending, success, and error messages for asynchronous submission.
- The contact page embeds Google Maps for the example locations and provides directions links.
- On-page SEO includes page-specific titles and descriptions, heading structure, image alternative text, internal navigation, canonical URLs, and social-sharing metadata.
- `robots.txt` and `sitemap.xml` are included.
- Responsive layouts, lazy-loaded supporting images, visible keyboard focus, and reduced-motion support are included.
- Manual responsive checks of all five pages at 320, 375, 768, 1024, and 1440 CSS pixels found and fixed narrow-screen overflow in the card grid and About page image.
- Browser checks confirmed page titles and descriptions, image alternative text, and labels for form controls. Service search, card detail toggles, image lightbox, mobile menu, and form validation were exercised. Both forms were tested with intercepted mock AJAX success, provider-error, and network-error responses; invalid submissions were blocked and failed submissions retained their fields. No test data was sent to FormSubmit.
- Reduced the displayed logo from 359,144 bytes to 33,836 bytes and the homepage fit-out image from 668,395 bytes to 119,346 bytes, saving about 874 KB combined. Original source images remain in the images folder.
- Lighthouse 13.6.0 was run on the homepage at a local HTTP URL in mobile and desktop modes. Scores and limitations are documented in the Lighthouse section below.

### Still to complete

- **Form activation and live delivery test:** FormSubmit must verify the recipient address on its first live submission. Mocked browser tests passed, but no real send has been made. Confirm the activation email arrives and test both forms after the site is hosted.
- **Confirm business content:** Replace placeholder logo and images and verify the business name, addresses, contact details, hours, service descriptions, and pricing before presenting this as a real business website.
- **Confirm domain and social accounts:** The project currently uses `woodwork.co.za` in canonical URLs, metadata, `robots.txt`, and the sitemap. Replace it if that is not the final domain, and verify all profile URLs.
- **Production security and privacy:** Configure the Content Security Policy as a host response header. Review FormSubmit's privacy terms and ensure users are informed that submissions go to the provider; configure any available provider anti-spam protections.
- **Live PageSpeed Insights:** The Lighthouse results below are from a local preview, not the live hosting. Deploy the site and run PageSpeed Insights on the real public URL for production network, server, and caching results.
- **Remaining testing and publishing:** Run a full HTML validator and manual keyboard/screen-reader review. Then push the final changes to the remote repository, submit the repository link, and deploy the site.
- **Off-page SEO:** Build backlinks, publish social media posts, and create or verify a Google Business Profile using the real business accounts. These actions happen outside this static website.

The services page dynamically loads its service listing from the local `services.json` file and provides client-side search and sorting. The HTML service cards remain available if JavaScript or the JSON request is unavailable. This is a local content feed, not a server-backed blog or product catalogue.

The forms' configured FormSubmit endpoint is a third-party service, not a backend owned by this project. The browser prevents false success messages for failed requests, but final email delivery and recipient activation depend on the provider.

## Lighthouse Audit Results

Lighthouse 13.6.0 audited the homepage (`index.html`) on 1 November 2026 from a local HTTP preview at `http://127.0.0.1:4173/`. The audit covered Performance, Accessibility, Best Practices, and SEO. The detailed mobile and desktop HTML report files have been removed from the project; the scores and key metrics are retained here:

| Mode | Performance | Accessibility | Best Practices | SEO | First Contentful Paint | Largest Contentful Paint | Speed Index | Total Blocking Time | Cumulative Layout Shift |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Mobile | 99 | 100 | 100 | 100 | 0.9 s | 2.1 s | 2.4 s | 60 ms | 0 |
| Desktop | 100 | 100 | 100 | 100 | 0.3 s | 0.6 s | 0.5 s | 0 ms | 0 |

The test server was local and did not model production caching or hosting. Lighthouse identified image-delivery and cache-lifetime opportunities; cache-related estimates may change when real hosting headers are configured. These results are not a PageSpeed Insights report for a deployed site and cover the homepage only. Run production tests for the final public domain after deployment.

## Social Media Links and Icon Animation

Each page footer includes a consistent social media navigation area. The X, TikTok, WhatsApp, and YouTube icons link to the profiles supplied for this assignment and open in a new tab. The YouTube profile is [@KgopotsoNgwato](https://www.youtube.com/@KgopotsoNgwato).

The icons use inline SVG artwork and are styled in `css/styles.css`. On hover, a green background sweeps up behind each icon and the icon color changes. Keyboard users get the same animation and color change when a link receives focus. The animation transitions are disabled when the visitor's device requests reduced motion.

Implementation references:

- Shared footer markup: `index.html`, `about.html`, `services.html`, `enquiry.html`, and `contact.html`
- Social icon layout, hover/focus animation, colors, and reduced-motion behavior: `css/styles.css` (`.social-links`, `.social-icon-link`, and the `prefers-reduced-motion` media query)

## Sitemap

```text
Woodwork Website
├── Home
│   └── index.html
├── About Us
│   └── about.html
├── Services
│   └── services.html
├── Enquiry
│   └── enquiry.html
├── Contact
│   └── contact.html
├── robots.txt
├── sitemap.xml
└── Shared assets
    ├── css/styles.css
    ├── images/
    └── js/
```

## Project Structure

```text
Web1/
├── index.html
├── about.html
├── services.html
├── enquiry.html
├── contact.html
├── robots.txt
├── sitemap.xml
├── css/
│   └── styles.css
├── images/
│   ├── logo-optimized.png (used in page headers)
│   ├── fitout-optimized.jpg (used on homepage)
│   ├── logo-placeholder.png (original)
│   ├── workshop-placeholder.jpg
│   ├── service images
│   └── team images
└── js/
```

The site uses `images/logo-optimized.png` and `images/fitout-optimized.jpg` for the displayed logo and homepage fit-out image. The original source images are retained.

## Changelog

### v1.0 - Initial website build
- Created the homepage and supporting pages
- Added the shared navigation and sticky header
- Implemented the responsive layout and mobile menu
- Added service information, pricing guide, enquiry form, and contact details
- Included basic accessibility features and focus styling

### v1.1 - README update
- Added complete project overview and objectives
- Included goals, features, milestones, and sitemap
- Added changelog section for version tracking
- Added references using Harvard-style citation format
- Updated documentation for clarity and assessment readiness

### v1.2 - Interactive features and SEO
- Added image lightboxes, expandable FAQs, and independent card toggles
- Added service search and alphabetical sorting
- Added robots.txt, sitemap.xml, and page-specific search metadata
- Improved image loading behavior, reduced-motion support, and map embed restrictions

### v1.3 - Social media links and animation documentation
- Documented the footer social links and the destinations supplied for the assignment
- Added implementation references for the green hover/focus animation and reduced-motion behavior

### v1.4 - YouTube profile link
- Added the supplied YouTube profile link to the social footer on every page
- Updated the README to document the YouTube handle and active social links

### v1.5 - Part 3 assessment checklist
- Documented existing JavaScript functionality, SEO features, and form validation
- Documented that forms were originally validation-only and did not deliver submissions or use AJAX
- Listed remaining business-content, production, testing, publishing, and off-page SEO tasks
- Corrected the documented social links to include WhatsApp and YouTube

### v1.6 - Responsive and performance checks
- Fixed narrow-screen overflow in card grids and the About page image
- Optimized the displayed logo and homepage fit-out image, saving about 874 KB combined
- Tested key interactions, metadata, form labels, alt text, and five viewport widths

### v1.7 - Email draft form submission
- Temporarily updated enquiry and contact form submissions to prepare email drafts before the AJAX integration

### v1.8 - Lighthouse audit
- Generated mobile and desktop Lighthouse reports for the homepage
- Improved CTA contrast and added the site logo as a favicon after reviewing the initial audit
- Recorded Lighthouse scores and local-audit limitations in this README

### v1.9 - Form validation and AJAX submission
- Added a contact-message type selector and an indicative service-price response to project enquiries
- Added FormSubmit POST actions and AJAX submission with explicit success and failure status messages
- Documented recipient verification and third-party data handling requirements

### v1.10 - Form submission handler fix
- Fixed the asynchronous form handler so the shared JavaScript loads and intercepts form submissions
- Clarified that the site must be served over HTTP/HTTPS and that live FormSubmit delivery still requires recipient activation
- Verified both forms with mocked valid, provider-error, and network-error responses without sending test data to FormSubmit

### v1.11 - Dynamic service listing
- Added a local JSON data source for the service cards and dynamically render the listing on the services page
- Kept the HTML listing as a fallback and preserved search, sorting, card toggles, and the lightbox for loaded cards

### v1.12 - Form validation refinements
- Added HTML length and phone-format constraints, autocomplete hints, and matching client-side validation
- Improved field-level invalid feedback and clarified form-submission network, provider, and malformed-response errors

### v1.13 - Lighthouse report cleanup
- Removed the detailed Lighthouse HTML report files while retaining their scores and key metrics in this README
- Updated the audit documentation to clarify that the detailed reports are no longer included

### v1.14 - Responsive form styling
- Restyled the contact and project enquiry forms with a clean, spacious layout inspired by the supplied reference
- Added a two-column desktop layout, full-width message fields, and a single-column mobile layout without changing form behavior

### v1.15 - Enquiry location field
- Added a required town or suburb field to the project enquiry form
- Updated its placeholder to “Enter your town or suburb”

## References

The references below follow the Harvard referencing style commonly used in academic and institutional work.

- MDN Web Docs, 2024. HTML: HyperText Markup Language. Available at: https://developer.mozilla.org/en-US/docs/Web/HTML [Accessed 14 October 2026].
- MDN Web Docs, 2024. CSS: Cascading Style Sheets. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS [Accessed 14 October 2026].
- MDN Web Docs, 2024. CSS transitions. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_transitions [Accessed 1 November 2026].
- MDN Web Docs, 2024. `prefers-reduced-motion`. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion [Accessed 1 November 2026].
- MDN Web Docs, 2024. Client-side form validation. Available at: https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation [Accessed 1 November 2026].
- FormSubmit, n.d. AJAX forms and form configuration. Available at: https://formsubmit.co/documentation [Accessed 1 November 2026].
- Google, n.d. Maps Embed API. Available at: https://developers.google.com/maps/documentation/embed [Accessed 1 November 2026].
- World Wide Web Consortium (W3C), 2024. Web Content Accessibility Guidelines (WCAG) 2.2. Available at: https://www.w3.org/TR/WCAG22/ [Accessed 14 October 2026].
- World Wide Web Consortium (W3C), 2024. HTML5. Available at: https://html.spec.whatwg.org/multipage/ [Accessed 14 October 2026].

## How to Run the Website

No build tools or installation are required. To view the website:

1. Open the project folder in a code editor.
2. Start an HTTP server for the project folder (for example, use the VS Code Live Server extension).
3. Open the server's `http://localhost` address in a browser. Do not open `index.html` directly as a `file://` URL; form delivery requires a web origin.
4. Use the navigation menu to move between the pages.

## Assignment and Publishing Notes

- The project uses `woodwork.co.za` and the provided X, TikTok, WhatsApp, and YouTube profile details for the assignment demonstration; verify these before production use.
- Workshop addresses, secondary contact information, and business hours are example content, not verified business details.
- Off-page promotion such as earning backlinks, publishing social posts, and setting up a Google Business Profile must be done through the real external accounts; the website only links to the supplied social profiles.
- Configure the Content Security Policy as an HTTP response header on the production host; response headers provide stronger protection than a meta policy.
- Configure production forms with server-side validation, abuse protection, and secure handling of personal information.
- Backlinks and social promotion require real social profiles and third-party websites; they cannot be created by files in this static project.

## Author Information

- Name: KGOPOTSO
- Student ID: ST10527357
- Group: DIS1 GROUP 2

## Final Note

This README reflects the current project features and publishing requirements.