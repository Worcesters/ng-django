import json
import requests
import openai
from django.conf import settings
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt


openai.api_key = settings.OPENAI_API_KEY
model_engine = "text-davinci-002"
#gpt-3.5-turbo

@csrf_exempt
def chatbot(request):
    if request.method == 'POST':
        message = json.loads(request.body)['message']
        prompt = f'Conversation with user: {message}\nAI Response:'
        completions = openai.Completion.create(
            engine=model_engine,
            prompt=prompt,
            max_tokens=1000,
            temperature=0.7
        )
    response_text = completions.choices[0].text.strip()
    iaAvatar(response_text)

    return JsonResponse({'message': response_text})

def iaAvatar(gpt_response):
    
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
