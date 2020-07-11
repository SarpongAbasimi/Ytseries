from user.models import CustomUser
from django.contrib.auth.forms import UserCreationForm, UserChangeForm

class CustomUserForm(UserCreationForm):

  class Meta:
    model = CustomUser
    fields = UserCreationForm.Meta.fields + ('email', 'age',)

class CustomUserChangeForm(UserChangeForm):

  class Meta:
    model = CustomUser
    fields = UserChangeForm.Meta.fields
  