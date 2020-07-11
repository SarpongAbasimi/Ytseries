from django.shortcuts import render
from user.forms import CustomUserForm
from django.views.generic import CreateView, TemplateView
from django.contrib.auth.views import LoginView, LogoutView
# Create your views here.

class HomeView(TemplateView):
  template_name = 'home.html'

class SignUpView(CreateView):
  form_class = CustomUserForm
  template_name = 'signup.html'

class UserLoginView(LoginView):
  template_name = 'registration/login.html'