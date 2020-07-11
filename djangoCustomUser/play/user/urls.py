from django.urls import path
from user.views import (SignUpView, HomeView, LoginView)
from django.contrib.auth.views import LogoutView

urlpatterns = [
  path('signup/', SignUpView.as_view(), name='signup'),
  path('login/', LoginView.as_view(), name='login'),
  path('home/', HomeView.as_view(), name='home'),
  path('logout/', LogoutView.as_view(), name='logout')
]