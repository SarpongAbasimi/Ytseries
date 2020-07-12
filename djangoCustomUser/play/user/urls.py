from django.urls import path
from user.views import (SignUpView, HomeView, LoginView, UserLogOut,  UserPasswordChangeView)

urlpatterns = [
  path('signup/', SignUpView.as_view(), name='signup'),
  path('login/', LoginView.as_view(), name='login'),
  path('home/', HomeView.as_view(), name='home'),
  path('logout/', UserLogOut.as_view(), name='logout'),
  path('change_password/', UserPasswordChangeView.as_view(), name='change_password')
]