from django.db import models

# Create your models here.

class Todo(models.Model):
  todo = models.CharField(null=False, max_length=100)

  def __repr__(self):
    return f'{self.todo}'
  
  def __str__(self):
    return f'{self.todo}'