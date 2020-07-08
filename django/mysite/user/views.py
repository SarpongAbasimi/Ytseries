from django.shortcuts import render
from django.contrib.auth.views import (LoginView, LogoutView)

# Create your views here.

class UserLogin(LoginView):
   template_name = 'registration/login.html'

class UserLogOut(LogoutView):
  template_name = 'registration/logged_out.html'
