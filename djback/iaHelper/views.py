import json
import requests
import openai
from openai.error import RateLimitError
from django.conf import settings
from django.http import HttpResponse, HttpResponseBadRequest, HttpResponseServerError
from django.views.decorators.csrf import csrf_exempt


openai.api_key = settings.OPENAI_API_KEY
openai.organization = ""
openai.Model.list()
model_engine = "gpt-3.5-turbo"
aResults = []
temperature = 0.7

@csrf_exempt
def chatbot(request):
    if request.method != 'POST':
        return HttpResponseBadRequest('Invalid method')

    

    try:
        prompt = json.loads(request.body.decode('utf-8'))['question']

        default_prompt = ""
        default_prompt += " Voici qui est didier jeremy actuellement en 2023 il à 26 ans developpeur depuis plus de 3ans maintenant." 
        default_prompt += " Il possède un interet pour les nouvelles technologies & le developpement en tout genre, les languages qu'il maitrises sont nombreux, notamment : css, html, javascript, python, django, php, angular, sql."
        default_prompt += " Ces languages préferé sont le Html, Css, javascript coté front & Python Django pour le back en effet il à une préférence pour le front car ce coté visuel et intéractif lui plait"
        default_prompt += " Malgré tout, cela reste un plaisir pour lui de pouvoir intervenir entant que fullstack et ne pas être restrein pas ces propre limite comme la majorité des intégrateurs ou developpeur front."
        default_prompt += " Ces Formations: Issue de formation diplomante au sein de la 3W ACADEMY il a commencé par obtenir sont diplome de developpeur en réalisation d'application web"
        default_prompt += " Il a pu apprendre les languages 'basiques' tel que HTML, CSS, JAVASCRIPT, PHP, AJAX, BOOSTRAP, JQUERY, SQL cette premiere formation lui a permis d'obtenir un équivalent BAC + 2"
        default_prompt += " Deuxieme formation des suites du covid il a décidé de laisser passer le temps et d'en profiter pour découvrir de nouveau languages en se relancant une formation et d'obtenir le titre de Developpeur en intelligence artificielle"
        default_prompt += " Dans cette formation il a pu apprendre notamment le Python et Tensorflow. et obtenir un équivalent bac + 3 sont meilleur diplome actuellement"
        default_prompt += " Ces Expériences: Après avoir obtenu le titre de develeppeur en realisation d'application web il a effectuer un stage au sein de DigiFactory une entreprise d'evenementiel au seins de cette entreprise"
        default_prompt += " Il a obtenu enormement d'experience etant un pilier de cette startup qui lui a très vite donner de grande responsabilité parmis ces missions il était notamment Chef de projet, developpeur front, gestion helpdesk, creation d'emailing et de gabarit d'emailing"
        default_prompt += " Raison de sont départ de DigiFactory, une envie de progression etant au debut de ca carriere il a prefere ne pas rester figer sur les languages de base et en apprendres d'avantages avant de ce décider sur ces favoris"
        default_prompt += " Ca deuxieme expérience fut dans une entreprise nommé IWI-EVENT toujours dans l'evenementiel cette fois entant que simple developpeur FrontEnd ces missions developper les differentes web app ou site webs d'inscription, et creation des emailings liée a celui ci"
        default_prompt += " Ces languages pratiquer chez IWI-EVENT , HTML, CSS, JAVASCRIPT, ANGULARJS, PHP, SQL"
        default_prompt += " Malgré le faite qu'il allait obtenir ca propre equipe et passer chef de projet le covid a frapper & malheureusement lors du covid plus d'evenement causant ainsi la chute de la progression de cette startup"

        journal_message = [
            {"role": "assistant", "content": default_prompt}, 
            {"role": "user", "content": prompt}, 
            {"role": "assistant", "content": prompt}
        ]
        
        if (len(aResults) > 0) :

            for i in aResults:
                journal_result = i['result']
                journal_prompt = i['prompt']

                journal_message.append({"role": "user", "content": journal_prompt})
                journal_message.append({"role": "assistant", "content": journal_result})

            journal_message.append({"role": "user", "content": prompt})
            
            completion = openai.ChatCompletion.create(
                model = model_engine, 
                messages = journal_message
            )
        else :
            completion = openai.ChatCompletion.create(
                model = model_engine, 
                messages = journal_message
            )

        result = completion['choices'][0]['message']['content']
        aResults.append({'prompt': prompt, 'result': result})
        response = HttpResponse(json.dumps({'message': result}), content_type="application/json; charset=utf-8")

        return response
    except RateLimitError as e :
        return HttpResponseServerError("openai.error.RateLimitError: " + str(e))

def iaAvatar( gpt_response ):
    
    url = "https://api.d-id.com/talks"

    payload = {
        "script": {
            "type": "text",
            "provider": {
                "type": "microsoft",
                "voice_id": "Jenny"
            },
            "ssml": "false",
            "input": gpt_response
        },
        "config": {
            "fluent": "false",
            "pad_audio": "0.0"
        },
        "source_url": "https://cdn.pixabay.com/photo/2021/02/22/16/34/portrait-6040876_1280.jpg"
    }
    headers = {
        "accept": "application/json",
        "content-type": "application/json",
        "authorization": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik53ek53TmV1R3ptcFZTQjNVZ0J4ZyJ9.eyJodHRwczovL2QtaWQuY29tL2ZlYXR1cmVzIjoiIiwiaXNzIjoiaHR0cHM6Ly9hdXRoLmQtaWQuY29tLyIsInN1YiI6Imdvb2dsZS1vYXV0aDJ8MTA2NzYyNDI0ODE2MTQyOTQ5NDgzIiwiYXVkIjpbImh0dHBzOi8vZC1pZC51cy5hdXRoMC5jb20vYXBpL3YyLyIsImh0dHBzOi8vZC1pZC51cy5hdXRoMC5jb20vdXNlcmluZm8iXSwiaWF0IjoxNjc5MzA4MjgwLCJleHAiOjE2NzkzOTQ2ODAsImF6cCI6Ikd6ck5JMU9yZTlGTTNFZURSZjNtM3ozVFN3MEpsUllxIiwic2NvcGUiOiJvcGVuaWQgcHJvZmlsZSBlbWFpbCByZWFkOmN1cnJlbnRfdXNlciB1cGRhdGU6Y3VycmVudF91c2VyX21ldGFkYXRhIG9mZmxpbmVfYWNjZXNzIn0.LeNeQOfHYD_JLCg2P0jWsNHr0jJJ0IChYNdr9ZsVW3aDGnYhJSZXVULzDXUnuurNrDyjbT6Rp1q2xy7pFWGtlZq1tlY5Aw2t8GHtv4sfkZNUzGpgljqQsoAg5CVX5rv7u9uord3bWnsBnzXmzLfHgg6-xBgf7vewz9nE36NIL8Fknv9Wpv56xdZj9Kh7HnztQblfvmzBEWGzqN237VDS19ooAuQANes1osXtmKXOrVl4P1M1htcwXb76-k4nsbMh3BNqnEtFSPirUSwsfroi_RYav3Ba2hWTzC8aY1dAywRnQznPLKtdy7RJfJNQnviHOiZM9dw0W2MTMT1ni0dEBA"
    }
    response = requests.post(url, json=payload, headers=headers)
    print(response.text)
