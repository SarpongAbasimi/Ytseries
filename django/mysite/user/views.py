from django.shortcuts import render
from django.urls import reverse_lazy
from user.form import UserRegisterForm
from django.views.generic import CreateView
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.views import (LoginView, LogoutView)

# Create your views here.

class UserLoginView(LoginView):
   template_name = 'registration/login.html'

class UserLogOutView(LogoutView):
  template_name = 'registration/logged_out.html'

class RegistrationView(CreateView):
   form = UserCreationForm
   success_url = reverse_lazy('login')
   template_name = 'registration/register.html'


def signUpView(request):
   print('-------------------')
   print(request.method)
   print('-------------------')
   form = UserRegisterForm
   context = { 'form': form}
   return render(request, 'registration/signup.html', context=context)

