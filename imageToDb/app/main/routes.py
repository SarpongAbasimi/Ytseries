import os
from flask import Blueprint, render_template
from app import db

main = Blueprint('main', __name__)

@main.route('/', methods=['GET'])
def index():
  api_data = os.path.join(__file__, '../data/api')

  print(api_data)
  
  return render_template('index.html')