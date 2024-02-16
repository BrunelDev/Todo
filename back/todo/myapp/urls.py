from django.contrib import admin
from django.urls import path, include
from . import views

urlpatterns = [
    path('api/todo', views.Todo.as_view()),
    
]
    