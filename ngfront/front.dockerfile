# Spécifier l'image de base pour le frontend
FROM node:14-alpine

# Définir le répertoire de travail pour le frontend
WORKDIR /ngfront

# Copier les fichiers du projet vers le répertoire de travail
COPY . .

# Installer les dépendances du projet
RUN npm install

# Compiler le projet Angular
RUN npm run build

# Exposer le port pour le frontend
EXPOSE 4200

# Définir la commande pour lancer le frontend
CMD ["npm", "start"]
