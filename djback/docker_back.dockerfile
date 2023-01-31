# Utiliser une image Python comme base
FROM python:3.9

# Définir un répertoire de travail
WORKDIR /djback/user

# Copier les fichiers nécessaires pour le backend dans le répertoire de travail
COPY requirements.txt .

# Installer les dépendances nécessaires
RUN pip install -r requirements.txt

# Copier le reste des fichiers pour le backend dans le répertoire de travail
COPY . .

# Définir des variables d'environnement pour le serveur Django
ENV DJANGO_SETTINGS_MODULE=myproject.settings

# Exécuter le serveur Django
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
