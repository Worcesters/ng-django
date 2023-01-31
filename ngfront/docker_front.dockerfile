# Utiliser une image NodeJS comme base
FROM node:14

# Définir un répertoire de travail
WORKDIR /ngfront

# Copier les fichiers nécessaires pour le frontend dans le répertoire de travail
COPY package.json .
COPY package-lock.json .

# Installer les dépendances nécessaires
RUN npm install

# Copier le reste des fichiers pour le frontend dans le répertoire de travail
COPY . .

# Exécuter l'application Angular
CMD ["npm", "start"]
