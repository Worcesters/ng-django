from .cors import cors_exempt
from rest_framework import permissions,status
from rest_framework.response import Response
from rest_framework.views import APIView
from django.contrib.auth import authenticate
from .serializers import LoginSerializer
from rest_framework.authtoken.models import Token

class LoginView( APIView ):
    permission_classes = ( permissions.AllowAny, )

    @cors_exempt
    def post( self, request, *args, **kwargs ):
        serializer = LoginSerializer( data=request.data )
        serializer.is_valid( raise_exception=True )

        user = authenticate(
            request,
            username=serializer.validated_data["username"],
            password=serializer.validated_data["password"]
        )
        if user:
            token, _ = Token.objects.get_or_create(user=user)
            return Response( {'token': token.key, 'status': 200} )
        else:
            return Response( status=status.HTTP_401_UNAUTHORIZED )

class TokenValidationView(APIView):
    permission_classes = (permissions.AllowAny,)

    def get(self, request, *args, **kwargs):
        token = request.GET.get('token')
        try:
            # Vérifier la validité du jeton en utilisant la méthode get()
            Token.objects.get(key=token)
            return Response({"valid": True, "status": 200})
        except Token.DoesNotExist:
            # Le jeton n'est pas valide
            return Response({"valid": False, "status": 401})
