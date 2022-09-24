[![Netlify Status](https://api.netlify.com/api/v1/badges/41f9bfdc-29e0-42f3-bc1b-48793beaacde/deploy-status)](https://app.netlify.com/sites/majestic-kleicha-a9f73d/deploys)

# Cobalt Library for Svelte

This is a library created to work with my upcoming book, "Creating Web Components with Svelte", to be poublished by Apress.

It contains the following components:

- Accordion
- Alert
- Breadcrumbs
- Checkbox
- Dialog
- ImageGrid
- Input
- SelectBox
- SideBar (see below)
- Slider
- Spinner
- Tabs
- Tooltip

Notes:
All components have tests - these are written in Jest, using the Svelte Testing Library.
All components (except SideBar) are available via Storybook, hosted on Netlify - see the link at the top of this page.

## Installation
To install this library, do the following:

- In a Node.js terminal session, run this command to clone the library:
`git clone https://github.com/alexlibby/cobalt.git`
- At the prompt, enter `npm install` to install all dependencies for the library.

## Roadmap / To Do:
- Add a Radiobutton component
- Refactor SideBar to work better in Storybook, and deprecate/remove external demo
- Improve tests
- Add test coverage
- Add more demos for frameworks other than Svelte