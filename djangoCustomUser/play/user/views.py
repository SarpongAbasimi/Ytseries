from django.shortcuts import render
from user.forms import CustomUserForm
from django.urls import reverse_lazy
from django.views.generic import CreateView, TemplateView
from django.contrib.auth.mixins import LoginRequiredMixin
from django.contrib.auth.views import (LoginView, LogoutView, PasswordChangeView, PasswordChangeDoneView)
# Create your views here.

class HomeView(LoginRequiredMixin,TemplateView):
  template_name = 'home.html'
  login_url = 'login'

class SignUpView(CreateView):
  form_class = CustomUserForm
  success_url = reverse_lazy('login')
  template_name = 'signup.html'

class UserLoginView(LoginView):
  template_name = 'registration/login.html'

class UserLogOut(LogoutView):
  template_name = 'registration/logged_out.html'

class UserPasswordChangeView(PasswordChangeView):
  template_name = 'registration/change-password.html'

class UserPasswordChangeDone(PasswordChangeDoneView):
  template_name = 'registration/password_change_done.html'