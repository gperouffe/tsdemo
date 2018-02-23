
TYPESCRIPT
----------

Javascript, but stronger.


Avant de commencer!
-------------------------------

Si vous souhaitez suivre la démo avec nous...

::

        git clone https://github.com/gperouffe/tsdemo-partial.git

::

        npm install

::

        https://codeshare.io/5OOw8x


Javascript
-----------------------

- Langage créé en 10 jours en 1995
- Initialement destiné aux débutants
- Asynchrone par nature
- Inspiré de nombreux langages, dont Java
- Reste encore aujourd'hui connu pour son caractère brouillon.

Typescript
-----------------------

- Dévoilé en 2012 après 2 ans de développement @Microsoft
- OpenSource
- Langage au typage fort permettant de produire un code robuste et maintenable
- Permet l'utilisation de concepts de POO avancés
- De plus en plus utilisé (Angular, VSCode, ...)

De TS à JS : la transpilation
-------------------------------

- Typescript est un langage à part entière
- Ne dépend d'aucune bibliothèque JS
- Le code TS est intégralement traduit en JS pur
- Tout code écrit TS bénéficie des avancées en matière de JS

Notre application démo
-------------------------------

- Mini client de messagerie
- Typescript de bout en bout
- Backend Express : une API qui fournira les données en JSON
- Frontend Angular5

::

        https://persil.ovh1.ec-m.fr


Un premier coup d'oeil: structure de l'API
------------------------------------------

Données:

- Utilisateurs (username) : Liste, Création, Recherche par username
- Fils de discussions (titre, parent) : Liste, Création, Recherche par parent
- Commentaires (texte, fil, user) : Liste, Création, Recherche par fil

C'est déjà fini
-------------------------------

Le code complet (avec le front-end) est disponible ici.

::

        git clone https://github.com/gperouffe/tsdemo.git

Conclusion
----------------------

En résumé, nous avons vu :

- Comment déclarer des classes
- Les exports/imports
- Comment transpiler son code Typescript en Javascript
- Les codes TS et JS sont grandement semblables
- L'utilisation de fonctionnalités spécifiques au TS (annotations, généricité)

Conclusion
----------------------

Ce qui n'a pas pu être abordé durant cette courte présentation :

- Gestion du temps réel par WebSockets

==========================
Merci pour votre attention
==========================

.. header::
        Web & Systèmes
