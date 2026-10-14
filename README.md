## ☕ Support the Developer / Soutenir le développeur

### 🇬🇧 English
This Foundry VTT module is developed and shared for free.
If you enjoy using it and would like to support my work on Foundry VTT systems and modules, you can buy me a coffee!
Your support is entirely optional, but always appreciated. Thank you!

### 🇫🇷 Français
Ce module Foundry VTT est développé et partagé gratuitement.
Si vous appréciez son utilisation et souhaitez soutenir mon travail sur mes différents systèmes et modules Foundry VTT, vous pouvez m'offrir un café !
Votre soutien est entièrement facultatif, mais toujours très apprécié. Merci !

<p align="center">
  <a href="https://ko-fi.com/evilbram">
    <img src="https://storage.ko-fi.com/cdn/kofi5.png" alt="Support Evilbram on Ko-fi" height="45">
  </a>
</p>

# Evilbram Lighting Toolkit

Module Foundry VTT V14 destiné à préparer rapidement l’éclairage des scènes, gérer des presets de lumières réutilisables et intégrer le pilotage de l’obscurité avec SmallTime lorsqu’il est disponible.

## Fonctionnalités

### Configuration de scène

- Profils de scène :
  - Extérieur
  - Intérieur
  - Obscurité
- Les trois profils appliquent également une couleur de fond noire (`#000000`) à la scène.
- Liaison automatique à SmallTime pour les profils Extérieur et Intérieur lorsque SmallTime est actif.
- Réglages manuels :
  - Jour
  - Crépuscule
  - Nuit
  - Restaurer
- Réglage direct de l’échelle de distance de la grille :
  - Distance par case
  - Unités
  - bouton Appliquer

Le réglage de distance et d’unités agit sur l’échelle de mesure de la scène. Il ne modifie pas la taille de la grille en pixels.

### Presets de lumière

Presets intégrés :

- Bougie
- Lampe à pétrole
- Lanterne extérieure
- Feu de camp
- Fenêtre éclairée
- Lumière neutre

Outils de visibilité :

- Halo de transition
- Zone de vision

Les presets peuvent être :

- placés directement sur la scène par glisser-déposer ;
- chargés dans la palette native des lumières de Foundry VTT V14 par simple clic.

Une lumière sélectionnée peut également être exportée sous forme de preset JSON réutilisable.

### Interface

Le toolkit utilise une interface compacte regroupant :

- configuration de scène ;
- ambiance ;
- sources de lumière ;
- outils de visibilité ;
- export.

La fenêtre est redimensionnable et peut être réduite ou restaurée par double-clic sur son bandeau supérieur.

L’état de SmallTime est affiché directement dans le toolkit.

## Prérequis

- Foundry VTT V14.
- SmallTime est optionnel. Lorsqu’il est actif, les profils de scène compatibles peuvent s’y lier automatiquement.

## Utilisation

Ouvrez les contrôles d’éclairage de Foundry puis cliquez sur le bouton Evilbram Lighting Toolkit.

Choisissez un profil de scène, ajustez si nécessaire la distance et les unités de la grille, puis utilisez les réglages d’ambiance ou placez un preset de lumière sur la scène.

Un clic simple sur un preset le charge dans la palette native des lumières de Foundry. Un glisser-déposer place directement la lumière sur la scène.

## Package

- Identifiant du module : `evil-light-toolkit`
- Nom : `Evilbram Lighting Toolkit`
- Compatibilité Foundry : V14

## Changelog

Consultez [`CHANGELOG.md`](CHANGELOG.md) pour le détail des versions.
