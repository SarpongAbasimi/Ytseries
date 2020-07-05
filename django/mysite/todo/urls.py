from django.urls import path
from .views import (Indexview, ShowView, new, create)

urlpatterns = [
  path('', Indexview.as_view(), name='index_page'),
  path('<int:pk>', ShowView.as_view(), name='show_page'),
  path('new/', new, name='new'),
  path('create', create, name='create')
]