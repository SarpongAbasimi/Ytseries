from django.urls import path
from user.views import (UserLogin, UserLogOut)

urlpatterns = [
  path('login/', UserLogin.as_view(), name='login'),
  path('logout/', UserLogOut.as_view(), name='logout')
]