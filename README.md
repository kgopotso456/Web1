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
- Searchable and sortable service cards
- Independent show/hide controls for each service and team card
- Accessible image lightbox gallery and expandable service FAQs
- Pricing table showing estimated project ranges
- Enquiry form with required fields for client and project details
- Contact page with business information, map embed, and message form
- Google Maps directions links for both listed locations
- WhatsApp contact link and social media profile links for X and TikTok
- Icon-only social buttons with a green hover-fill animation; X, TikTok, and WhatsApp link to the supplied profiles, and YouTube is shown as an unlinked placeholder
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

The enquiry and contact forms currently validate in the browser only. Connect them to a secure form service or server before expecting messages to be delivered.

## Social Media Links and Icon Animation

Each page footer includes a consistent social media navigation area. The X, TikTok, and WhatsApp icons link to the profiles supplied for this assignment and open in a new tab. The YouTube icon is an unlinked placeholder because a profile URL has not been provided; it is labelled as unavailable and is not presented as a working link.

The icons use inline SVG artwork and are styled in `css/styles.css`. On hover, a green background sweeps up behind each icon and the icon color changes. Keyboard users get the same animation and color change when a link receives focus. The animation transitions are disabled when the visitor's device requests reduced motion.

Implementation references:

- Shared footer markup: `index.html`, `about.html`, `services.html`, `enquiry.html`, and `contact.html`
- Social icon layout, hover/focus animation, colors, and reduced-motion behavior: `css/styles.css` (`.social-links`, `.social-icon-link`, `.social-icon-placeholder`, and the `prefers-reduced-motion` media query)

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
│   ├── logo-placeholder.png
│   ├── workshop-placeholder.jpg
│   ├── service images
│   └── team images
└── js/
```

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
- Explained that YouTube is a placeholder until a profile link is provided
- Added implementation references for the green hover/focus animation and reduced-motion behavior

## References

The references below follow the Harvard referencing style commonly used in academic and institutional work.

- MDN Web Docs, 2024. HTML: HyperText Markup Language. Available at: https://developer.mozilla.org/en-US/docs/Web/HTML [Accessed 14 October 2026].
- MDN Web Docs, 2024. CSS: Cascading Style Sheets. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS [Accessed 14 October 2026].
- MDN Web Docs, 2024. CSS transitions. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_transitions [Accessed 1 November 2026].
- MDN Web Docs, 2024. `prefers-reduced-motion`. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion [Accessed 1 November 2026].
- World Wide Web Consortium (W3C), 2024. Web Content Accessibility Guidelines (WCAG) 2.2. Available at: https://www.w3.org/TR/WCAG22/ [Accessed 14 October 2026].
- World Wide Web Consortium (W3C), 2024. HTML5. Available at: https://html.spec.whatwg.org/multipage/ [Accessed 14 October 2026].

## How to Run the Website

No build tools or installation are required. To view the website:

1. Open the project folder in a code editor or file browser.
2. Open index.html in a web browser.
3. Use the navigation menu to move between the pages.

## Assignment and Publishing Notes

- The project uses `woodwork.co.za` and the provided X, TikTok, and WhatsApp contact details for the assignment demonstration.
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