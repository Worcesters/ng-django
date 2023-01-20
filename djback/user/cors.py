from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt

def cors_exempt(view_func):
    @method_decorator(csrf_exempt)
    def wrapper(*args, **kwargs):
        response = view_func(*args, **kwargs)
        response["Access-Control-Allow-Origin"] = "*"
        response["Access-Control-Allow-Methods"] = "GET, POST, PUT, DELETE, OPTIONS"
        response["Access-Control-Allow-Headers"] = "Content-Type, Authorization"
        return response
    return wrapper
