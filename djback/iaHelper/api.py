import requests

def get_response_chatgpt(text):
    url = "https://api.openai.com/v1/engine/ada/complete"
    headers = {
        "Authorization": "Bearer YOUR_API_KEY",
        "Content-Type": "application/json"
    }
    data = {
        "prompt": text,
        "max_tokens": 60,
        "n": 1,
        "stop": "\n"
    }

    response = requests.post(url, headers=headers, json=data)

    return response.json()["choices"][0]["text"]

def get_response_did():
    url = "https://api.d-id.com/talks"
    payload = {
        "script": {
            "type": "text",
            "provider": {
                "type": "microsoft",
                "voice_id": "Jenny"
            },
            "ssml": "false"
        },
        "config": {
            "fluent": "false",
            "pad_audio": "0.0"
        },
        "source_url": "/../ia.jpeg"
    }
    headers = {
        "accept": "application/json",
        "content-type": "application/json",
        "authorization": "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik53ek53TmV1R3ptcFZTQjNVZ0J4ZyJ9.eyJodHRwczovL2QtaWQuY29tL2ZlYXR1cmVzIjoiIiwiaXNzIjoiaHR0cHM6Ly9hdXRoLmQtaWQuY29tLyIsInN1YiI6Imdvb2dsZS1vYXV0aDJ8MTA2NzYyNDI0ODE2MTQyOTQ5NDgzIiwiYXVkIjpbImh0dHBzOi8vZC1pZC51cy5hdXRoMC5jb20vYXBpL3YyLyIsImh0dHBzOi8vZC1pZC51cy5hdXRoMC5jb20vdXNlcmluZm8iXSwiaWF0IjoxNjc5MzA4MjgwLCJleHAiOjE2NzkzOTQ2ODAsImF6cCI6Ikd6ck5JMU9yZTlGTTNFZURSZjNtM3ozVFN3MEpsUllxIiwic2NvcGUiOiJvcGVuaWQgcHJvZmlsZSBlbWFpbCByZWFkOmN1cnJlbnRfdXNlciB1cGRhdGU6Y3VycmVudF91c2VyX21ldGFkYXRhIG9mZmxpbmVfYWNjZXNzIn0.LeNeQOfHYD_JLCg2P0jWsNHr0jJJ0IChYNdr9ZsVW3aDGnYhJSZXVULzDXUnuurNrDyjbT6Rp1q2xy7pFWGtlZq1tlY5Aw2t8GHtv4sfkZNUzGpgljqQsoAg5CVX5rv7u9uord3bWnsBnzXmzLfHgg6-xBgf7vewz9nE36NIL8Fknv9Wpv56xdZj9Kh7HnztQblfvmzBEWGzqN237VDS19ooAuQANes1osXtmKXOrVl4P1M1htcwXb76-k4nsbMh3BNqnEtFSPirUSwsfroi_RYav3Ba2hWTzC8aY1dAywRnQznPLKtdy7RJfJNQnviHOiZM9dw0W2MTMT1ni0dEBA"
    }

    response = requests.post(url, json=payload, headers=headers)
    
    return response.json()["choices"][0]["text"]