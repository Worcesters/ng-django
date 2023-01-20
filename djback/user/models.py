from django.contrib.auth.models import AbstractBaseUser
from django.db import models
from rest_framework.authtoken.models import Token
from django.conf import settings
from django.db.models.signals import post_save
from django.dispatch import receiver

class Visitor( AbstractBaseUser ):
    email = models.EmailField( unique=True, blank=True )
    username = models.CharField( max_length=40, unique=True )
    first_name = models.CharField( max_length=40, blank=True )
    last_name = models.CharField( max_length=40, blank=True )

    USERNAME_FIELD = 'username'

    def get_by_natural_key( self, email ):
        return self.get( email=email )

    def __str__( self ):
        return self.email
        
@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def create_auth_token(sender, instance=None, created=False, **kwargs):
    if created:
        Token.objects.create(user=instance)