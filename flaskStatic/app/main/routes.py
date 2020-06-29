from flask import Blueprint, render_template
from typing import Type, Text
from app.products.products import product


main: Type[Blueprint] = Blueprint('main', __name__)

@main.route('/', methods = ['GET'])
def index() -> Text:
  return render_template('index.html', products=product['all_products'])

@main.route('/show/<int:product_id>', methods =['GET'])
def show(product_id: int) -> Text:
  find_prouct_by_id = lambda x: x['product_id'] == product_id
  products = product['all_products']
  item = list(filter(find_prouct_by_id, products))
  return render_template('show.html', item=item)