# Changelog

Toutes les évolutions notables de Evilbram Lighting Toolkit sont documentées dans ce fichier.

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
