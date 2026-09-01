# Changelog

All notable changes to Evilbram Lighting Toolkit are documented in this file.

## 1.0.0

Initial public release for Foundry VTT V14.

### Scene lighting

- Added Exterior, Interior, and Darkness scene profiles.
- Added SmallTime-aware darkness linking for Exterior and Interior scenes.
- Added manual Day, Dusk, Night, and Restore darkness controls.
- Added a dedicated Darkness profile for scenes that must remain fully dark.

### Light presets

- Added calibrated Ambient Light presets:
  - Candle
  - Oil Lamp
  - Exterior Lantern
  - Campfire
  - Lit Window
- Added Transition Halo for extending low-light visibility beyond a primary light source.
- Added Vision Zone for wall-constrained visibility support.

### Workflow

- Added drag-and-drop placement of presets directly onto the Scene.
- Added click-to-load integration with Foundry VTT V14's native Ambient Light Palette.
- Added export of a selected Ambient Light as a reusable JSON preset.

### Interface

- Added a dedicated GM-only Lighting control.
- Added a grouped DialogV2 interface for scene configuration, atmosphere, light sources, and visibility tools.
- Added SmallTime status display in the toolkit window.
