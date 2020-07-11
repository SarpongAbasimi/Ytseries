from user.models import CustomUser
from django.contrib.auth.forms import UserCreationForm, UserChangeForm

class CustomUserForm(UserCreationForm):
  class Meta(UserCreationForm.Meta):
    model = CustomUser
    fields = ('username', 'email', 'age',)

class CustomUserChangeForm(UserChangeForm):
  class Meta:
    model = CustomUser
    fields = ('username', 'email', 'age',)