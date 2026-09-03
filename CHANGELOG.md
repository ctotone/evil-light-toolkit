# Changelog

Toutes les évolutions notables de Evilbram Lighting Toolkit sont documentées dans ce fichier.

## 1.1.0

Deuxième version publique pour Foundry VTT V14.

### Configuration de scène

- Les profils Extérieur, Intérieur et Obscurité appliquent désormais également une couleur de fond noire (`#000000`) à la scène.
- Ajout d’un réglage direct de l’échelle de distance de la grille depuis le toolkit :
  - Distance par case ;
  - Unités ;
  - bouton Appliquer.
- Le réglage de distance et d’unités ne modifie pas la taille de grille en pixels.

### Presets de lumière

- Ajout du preset Lumière neutre.
- Recalibrage global des rayons Bright et Dim des presets intégrés avec une réduction de 50 % de leur taille.
- Conservation des autres paramètres visuels et mécaniques des presets.

### Interface

- Réduction de l’encombrement général de la fenêtre :
  - largeur réduite ;
  - typographie légèrement plus petite ;
  - boutons et blocs plus compacts ;
  - espacements ajustés.
- Ajout de la réduction et de la restauration de la fenêtre par double-clic sur son bandeau supérieur.
- Conservation de l’interface redimensionnable et du bouton de fermeture.

## 1.0.0

Première version publique pour Foundry VTT V14.

### Éclairage des scènes

- Ajout des profils de scène Extérieur, Intérieur et Obscurité.
- Ajout de la liaison SmallTime pour piloter l’obscurité des scènes Extérieur et Intérieur.
- Ajout des réglages manuels Jour, Crépuscule, Nuit et Restaurer.
- Ajout d’un profil Obscurité dédié aux scènes qui doivent rester totalement noires.

### Presets de lumière

- Ajout des presets calibrés :
  - Bougie
  - Lampe à pétrole
  - Lanterne extérieure
  - Feu de camp
  - Fenêtre éclairée
- Ajout du Halo de transition pour prolonger très légèrement la visibilité au-delà d’une source principale.
- Ajout de la Zone de vision pour fournir une zone de visibilité contrainte par les murs.

### Utilisation

- Ajout du placement des presets par glisser-déposer directement sur la scène.
- Ajout du chargement des presets dans la palette native des lumières de Foundry VTT V14 par simple clic.
- Ajout de l’export d’une lumière sélectionnée sous forme de preset JSON réutilisable.

### Interface

- Ajout d’un contrôle dédié dans les outils d’éclairage, réservé au MJ.
- Ajout d’une interface DialogV2 regroupant :
  - configuration de scène ;
  - ambiance ;
  - sources de lumière ;
  - outils de visibilité.
- Ajout de l’affichage de l’état de SmallTime dans la fenêtre du toolkit.
