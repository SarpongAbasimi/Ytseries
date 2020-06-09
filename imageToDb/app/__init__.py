from flask import Flask
from config import config
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

def create_app(config_name: str = 'development'):
  app = Flask(__name__)

  from app.main.routes import main
  app.config.from_object(config[config_name])

  db.init_app(app)
  
  from app.main.routes import main

  app.register_blueprint(main)
  return app
