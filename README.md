# C4 Project

## Introduction

C4 est une application web conçue pour [décrire ici la fonction principale de l'application]. Ce projet comprend un frontend développé en React et un backend basé sur Node.js, avec Express comme framework pour gérer les routes. Avec Framework Bootstrap.

## Structure du projet

Le projet est organisé en deux parties principales :
- **frontend** : Contient l'interface utilisateur construite avec React.
- **backend** : Contient l'API et la logique serveur, construite avec Node.js et Express.

### Détails des répertoires

- **backend/** : Gère les routes de l'API, la gestion des produits, et toute autre logique serveur.
  - `server.js` : Point d'entrée principal du backend.
  - `router.js` : Gère les routes de l'application.
  - `products.json` : Fichier JSON contenant les informations sur les produits.

- **frontend/** : Gère l'interface utilisateur.
  - `src/` : Contient tous les composants React, les pages, les actions et les réducteurs pour la gestion de l'état.
  - `public/` : Contient les fichiers publics comme `index.html`, les images, et autres assets statiques.

## Installation

Pour configurer ce projet localement, suivez ces étapes :

1. **Cloner le dépôt** :
   ```bash
   git clone https://github.com/geonard/C4.git
   cd C4

2. **install Backend** :
cd backend
npm install

3. **install Frontend** :
cd frontend
npm install

4. **Démarrage Backend port 5000** :
cd backend
npm start 

5. **Démarrage Frontend port 3000 ou plus** :
cd frontend
npm start 

## Utilisation
### Backend :
L'API est accessible à l'adresse http://localhost:5000 (par défaut).
Les routes gèrent les opérations CRUD sur les produits et d'autres entités.

Frontend :
L'application est accessible à l'adresse http://localhost:3000 (par défaut).
Naviguez à travers l'interface utilisateur pour utiliser les fonctionnalités de l'application.

## Technologies utilisées
### Frontend :
React
Redux
CSS
### Backend :
Node.js
Express

## Documentation
![Draw.io diagramm de séquence](./C4drawio.png)

