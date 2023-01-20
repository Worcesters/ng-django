from rest_framework import serializers
from django.contrib.auth import get_user_model

class LoginSerializer(serializers.Serializer):
    email = serializers.CharField(max_length=255, required=False)
    username = serializers.CharField(max_length=255, required=False)
    password = serializers.CharField(max_length=128, write_only=True)

    def validate(self, data):
        user = None
        if not data.get('email') and not data.get('username'):
            raise serializers.ValidationError("A username or email is required to login.")
        if data.get('email'):
            user = get_user_model().objects.filter(username=data.get('email')).first()
        elif data.get('username'):
            user = get_user_model().objects.filter(username=data.get('username')).first()
        if user and not user.check_password(data.get('password')):
            raise serializers.ValidationError("Incorrect credentials. Please try again.")
        return data
