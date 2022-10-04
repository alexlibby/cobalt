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
Below is a summary of future changes that I'm looking to implement in the library - I will also include individual roadmaps for each component in separate files.

Key features:

- Finish the Radiobutton component
- Consider conversion to TypeScript
- Refactor SideBar to work better in Storybook, and deprecate/remove external demo
- Improve tests
- Add test coverage
- Add more demos for frameworks other than Svelte
- Expose more of the existing properties

Full details available on [the roadmap page](https://github.com/alexlibby/cobalt/blob/main/roadmap.md).

Roadmaps for each component:

- Checkbox: [Roadmap](https://github.com/alexlibby/cobalt/blob/main/src/lib/Checkbox/roadmap.md)
- Accordion: TBA
- Alert: TBA
- Breadcrumbs: TBA
- Dialog: TBA
- ImageGrid: TBA
- Input: TBA
- SelectBox: TBA
- Slider: TBA
- Spinner: TBA
- Tabs: TBA
- Tooltip: TBA

- SideBar: this will be added once the component is moved into Storybook

