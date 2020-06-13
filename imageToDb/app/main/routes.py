import os
import json
from flask import Blueprint, render_template
from app.data.api import data
from app import db

main = Blueprint('main', __name__)

@main.route('/', methods=['GET'])
def index():
  json_data = (json.dumps(data, indent=4))
  return(json_data)