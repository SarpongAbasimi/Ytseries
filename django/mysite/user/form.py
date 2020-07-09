from django.forms import EmailField
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm

class UserRegisterForm(UserCreationForm):
  email = EmailField(required=True)

  class Meta:
    model = User
    fields = ['email', 'username', 'password1', 'password2']