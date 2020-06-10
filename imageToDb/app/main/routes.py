import os
from flask import Blueprint, render_template
from app import db

main = Blueprint('main', __name__)

@main.route('/', methods=['GET'])
def index():
  images = load_image()
  return render_template('index.html', images=images)

def load_image():
  home = os.environ.get('HOME')
  image_dir = os.path.join(home, 'Desktop', 'img')

  return (os.listdir(image_dir))