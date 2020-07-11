from django.contrib import admin
from user.models import CustomUser
from .forms import (CustomUserChangeForm, CustomUserForm)
from django.contrib.auth.admin import UserAdmin

# Register your models here.

class CustomUserAdmin(UserAdmin):
  add_form = CustomUserForm
  form = CustomUserChangeForm
  model = CustomUser

admin.site.register(CustomUser, CustomUserAdmin)