# Spécifier l'image de base pour le backend
FROM python:3.6-alpine

# Définir le répertoire de travail pour le backend
WORKDIR /djback

# Copier les fichiers du projet vers le répertoire de travail
COPY . .

# Installer les dépendances du projet
RUN pip install --no-cache-dir -r requirements.txt
RUN pip install gunicorn

# Exposer le port pour le backend
EXPOSE 8000

# Définir la commande pour lancer le backend
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
# Définir le point d'entrée pour notre conteneur
#ENTRYPOINT ["gunicorn", "djback.wsgi:application", "--bind", "0.0.0.0:8000"]