from todo.models import Todo
from todo.form import TodoForm
from django.shortcuts import render
from django.http import HttpResponseRedirect
from django.views.decorators.http import require_http_methods
from django.views.generic import (TemplateView, ListView, DetailView)


# Create your views here.
class Indexview(ListView):
  model = Todo
  context_object_name = 'todo_list'
  template_name = 'index.html'

class ShowView(DetailView):
  model = Todo
  template_name = 'show.html'

def new(request):
  form = TodoForm
  context = { 'form': form}
  return render(request, 'new.html', context)

@require_http_methods(['POST'])
def create(request):
  if request.method == 'POST':
    form = TodoForm(request.POST)
    if form.is_valid():
      todo = Todo(todo=form.cleaned_data['todo'])
      todo.save()
      return HttpResponseRedirect('/')