# Evilbram Lighting Toolkit

A Foundry VTT V14 module for preparing scene lighting, managing reusable Ambient Light presets,
and integrating scene darkness with SmallTime when available.

## Features

- Scene profiles: Exterior, Interior, and Darkness.
- SmallTime-aware darkness linking for Exterior and Interior scenes.
- Manual Day, Dusk, Night, and Restore controls.
- Built-in light presets:
  - Candle
  - Oil Lamp
  - Exterior Lantern
  - Campfire
  - Lit Window
- Visibility tools:
  - Transition Halo
  - Vision Zone
- Drag-and-drop placement on the Scene.
- Click-to-load integration with Foundry V14's Ambient Light Palette.
- Export of a selected Ambient Light as a portable JSON preset.

## Requirements

- Foundry VTT V14.
- SmallTime is optional. When active, compatible scene profiles automatically link to it.

## Usage

Open the Lighting controls and click the Evilbram Lighting Toolkit button.

Choose a scene profile, adjust the atmosphere if needed, then drag a light preset onto the Scene.
A normal click on a preset loads it into Foundry's native Ambient Light Palette.

## Package

- Module id: `evil-light-toolkit`
- Title: `Evilbram Lighting Toolkit`
- Foundry compatibility: V14
