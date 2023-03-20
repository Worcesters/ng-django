from django.urls import path
from iaHelper import views

urlpatterns = [
    path('chatbot/', views.chatbot, name='chatbot'),
]
