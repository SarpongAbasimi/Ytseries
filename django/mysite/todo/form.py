from django import forms

class TodoForm(forms.Form):
  todo = forms.CharField(required=True, max_length=240, widget=forms.Textarea)