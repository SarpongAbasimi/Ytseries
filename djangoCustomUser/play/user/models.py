from django.db import models
from django.contrib.auth.models import AbstractUser
# Create your models here.

class CustomUser(AbstractUser):
  email = models.EmailField(unique=True, help_text= 'Please enter your email.')
  age = models.PositiveIntegerField(blank=True, null=True)