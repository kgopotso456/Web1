# Woodwork Website

Woodwork is a responsive website for a custom carpentry and woodworking business. The site presents the company's services, explains its approach to craftsmanship, provides estimated pricing information, and gives potential clients ways to request a quote or find the workshop.

The website is designed to give visitors a clear path from learning about the business to contacting the team about a project. It uses a consistent visual style, shared navigation, responsive layouts, image-based content, and accessible form controls across all pages.

## Main Features

- Responsive layout for desktop, tablet, and mobile screen sizes
- Shared navigation menu across all pages
- Sticky navigation bar that remains available while scrolling
- Translucent navigation background with a blur effect when page content moves behind it
- CSS-only mobile menu that expands and collapses without JavaScript
- Active-page navigation states to show the visitor's current location
- Homepage call-to-action linking visitors to the enquiry form
- Service cards for cabinetry, furniture, and commercial fit-outs
- Estimated pricing table for common service categories
- Project enquiry form with required client and project fields
- Contact page with workshop details, contact information, and embedded maps
- Skip link and visible keyboard focus states to support keyboard navigation
- Responsive table container that allows pricing information to scroll horizontally on small screens

## Website Content

### Homepage

The homepage introduces the Woodwork brand with a workshop hero area, a description of the business, and featured examples of custom furniture and carpentry work. The main call-to-action directs visitors to the project enquiry page.

### About Us

This page explains the history of Woodwork and presents the company's mission and vision. It also introduces the craftspeople involved in design, joinery, structural assembly, and finishing.

### Services

The services page describes three main service areas: custom cabinetry and shelving, bespoke hardwood furniture, and office or commercial fit-outs. It also includes a pricing guide with example scopes and estimated base rates.

### Enquiry

The enquiry page contains a project quote form. Visitors can provide their name, email address, phone number, preferred service, and project specifications. The form is structured with labels and required fields to make the request clear.

### Contact Us

The contact page provides workshop and showroom information, including addresses, telephone details, email contact, opening hours, and map embeds. It also includes a direct contact form for visitors who want to send a message.

## Pages

- `index.html` - Homepage and featured craftsmanship
- `about.html` - Company history, mission, vision, and team
- `services.html` - Carpentry services and estimated pricing
- `enquiry.html` - Project enquiry form
- `contact.html` - Workshop locations and contact form

## Technologies Used

- HTML5 for page structure and forms
- CSS3 for layout, responsive design, sticky navigation, transitions, and visual styling
- Local image assets in `images/`, including the logo, workshop images, service images, and team images

The navigation menu uses CSS only. The current website does not require JavaScript for its navigation or core page interactions.

## Project Structure

```text
Web1/
├── index.html
├── about.html
├── services.html
├── enquiry.html
├── contact.html
├── css/
│   └── styles.css
├── images/
│   ├── logo-placeholder.png
│   ├── workshop-placeholder.jpg
│   ├── service images
│   └── team images
└── js/
```

All pages share `css/styles.css`, which contains the global reset, colors, typography, navigation, cards, forms, tables, footer, and responsive breakpoints. The `js/` folder is currently empty because the site functionality is implemented with HTML and CSS.

## Responsive Navigation

On larger screens, the navigation links appear in a horizontal row beside the Woodwork logo. On screens below the mobile breakpoint, the links are hidden behind a Menu control. The control uses a checkbox and label so it can work without a script. When opened, the navigation expands inside the sticky header and pushes the page content down instead of covering it.

The sticky header uses a semi-transparent white background, a subtle shadow, and a backdrop blur. This allows the page content to remain slightly visible while keeping the navigation text readable.

## Accessibility Considerations

- Each page defines a viewport for responsive scaling.
- Images include alternative text describing their content.
- Navigation is labelled as the main navigation area.
- The current page is identified with an active link and `aria-current`.
- Form fields use visible labels and required validation where appropriate.
- A skip link allows keyboard users to move directly to the main content.
- Focus indicators are provided for links, controls, and form fields.

## Running the Website

No build tools or package installation are required. To view the site:

1. Open the project folder in a code editor or file browser.
2. Open `index.html` in a web browser.
3. Use the navigation menu to visit the other pages.

For the most reliable local preview, the files can also be opened through a simple local web server. This is useful for testing relative links, embedded maps, and browser behavior consistently.

## How to Run

Open `index.html` in a web browser. The other pages can be opened directly from the navigation menu.

## Author

- Name: KGOPOTSO
- Student ID: ST10527357
- DIS1 GROUP 2
