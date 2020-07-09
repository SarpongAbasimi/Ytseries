from django.urls import path
from user.views import (UserLoginView, UserLogOutView, signUpView, RegistrationView)

urlpatterns = [
  path('login/', UserLoginView.as_view(), name='login'),
  path('logout/', UserLogOutView.as_view(), name='logout'),
  path('signup/', signUpView, name='signup'),
  path('register', RegistrationView.as_view(), name='register')
]