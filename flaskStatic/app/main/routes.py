from flask import Blueprint, render_template
from typing import Type, Text
from app.products.products import product


main: Type[Blueprint] = Blueprint('main', __name__)

@main.route('/', methods = ['GET', 'POST'])
def index() -> Text:
  return render_template('index.html', products=product['all_products'])