# ng-django
Projet Front : Angular, Back : Python / Django
Le dossier principal est "NG-DJANGO".

Dans ce dossier, vous avez le dossier "djback", qui contient le backend Django.

"manage.py" est le script de gestion de Django.
"pdfPreview" est une application Django que vous avez créée.
"init.py" est un fichier d'initialisation pour l'application.
"admin.py" est le fichier où vous pouvez enregistrer vos modèles pour l'administration Django.
"api.py" contient des vues basées sur Django REST Framework pour l'API de l'application "pdfPreview".
"apps.py" est le fichier de configuration de l'application "pdfPreview".
"models.py" définit les modèles de données pour l'application "pdfPreview".
"urls.py" contient les URL de l'API de l'application "pdfPreview".
"views.py" contient les fonctions de vue pour l'application "pdfPreview".
"iaHelper" est une autre application Django.
Il suit une structure similaire à "pdfPreview" avec des fichiers tels que "admin.py", "api.py", etc.
"user" est une troisième application Django.
Il suit également une structure similaire à "pdfPreview" et "iaHelper".
Le dossier "djback" contient les fichiers de configuration Django tels que "settings.py", "urls.py", etc.
Le dossier "ngfront" contient le frontend Angular.

Le dossier "angular" contient les fichiers spécifiques à Angular.
Le dossier "cache" contient les fichiers de cache spécifiques à Angular.
Le dossier "dist" contient les fichiers de distribution générés par Angular après la compilation.
Le dossier "src" contient le code source de votre application Angular.
Le dossier "app" contient le code spécifique à l'application.
Le dossier "components" contient les composants Angular pour différentes pages de votre application, tels que "crashtest", "experience", "home", etc.
Chaque composant a sa propre structure de dossiers avec des fichiers tels que des fichiers HTML, des fichiers CSS, etc.
Le dossier "interceptor" peut contenir des intercepteurs Angular pour la gestion des requêtes HTTP.
Le dossier "models" contient les modèles de données TypeScript pour votre application, par exemple "login.model.ts".
Le dossier "page-not-found" peut contenir des fichiers spécifiques à la page d'erreur 404.
Le dossier "services" peut contenir des services Angular pour la logique métier.
Les fichiers "app-routing.module.ts", "app-component.ts" et "app-module.ts" sont des fichiers de configuration Angular.
Le fichier "auth.guard.ts" peut contenir un garde de routage pour protéger certaines routes.
Le dossier "assets" contient des ressources statiques telles que des fichiers PDF dans le dossier "curriculum", des images dans le dossier "img", etc.

-------------------------------------------------------------------------------------------------

NG-DJANGO/
??? djback/
?   ??? manage.py  
?   ??? iaHelper/
?   ?   ??? __init__.py
?   ?   ??? admin.py
?   ?   ??? api.py
?   ?   ??? apps.py
?   ?   ??? models.py
?   ?   ??? urls.py
?   ?   ??? views.py
?   ?
?   ??? user/
?   ?   ??? __init__.py
?   ?   ??? admin.py
?   ?   ??? api.py
?   ?   ??? apps.py
?   ?   ??? models.py
?   ?   ??? urls.py
?   ?   ??? views.py
?   ?
?   ??? djback/
?       ??? __init__.py
?       ??? asgi.py
?       ??? settings.py
?       ??? urls.py
?       ??? wsgi.py
?
??? ngfront/
    ??? angular/
    ?   ??? cache/
    ?       ??? 15.2.1
    ?
    ??? dist/
    ??? src/
    ?   ??? app/
    ?   ?   ??? components/
    ?   ?   ?   ??? crashtest/
    ?   ?   ?   ??? experience/
    ?   ?   ?   ??? home/
    ?   ?   ?   ??? login/
    ?   ?   ?   ??? struc/
    ?   ?   ?       ??? header/
    ?   ?   ?       ??? footer/
    ?   ?   ?
    ?   ?   ??? interceptor/
    ?   ?   ?
    ?   ?   ?
    ?   ?   ??? models/
    ?   ?   ?   ??? login.model.ts
    ?   ?   ?
    ?   ?   ??? page-not-found/
    ?   ?   ??? services/
    ?   ?
    ?   ??? app-routing.module.ts
    ?   ??? app-component.ts
    ?   ??? app-module.ts
    ?   ??? auth.guard.ts
    ?   ??? assets/
    ?       ??? curriculum/
    ?       ??? img/
    ?       ??? styleAssets/
    ?
    ??? angular.json
    ??? package-lock.json
    ??? package.json
    ??? proxy.conf.json
    ??? requirements.txt
    ??? node_modules/
