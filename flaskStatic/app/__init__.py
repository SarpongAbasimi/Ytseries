from typing import Type
from flask import Flask
from config import config

def create_app(app_config: str = 'development') -> Type[Flask]:
  app: Type[Flask] = Flask(__name__) 
  app.config.from_object(config[app_config])

  from app.main.routes import main

  app.register_blueprint(main)
  
  return app
