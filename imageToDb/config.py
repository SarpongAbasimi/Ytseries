import os
from dotenv import load_dotenv

base_dir = os.path.abspath(os.path.dirname(__file__))
load_dotenv(os.path.join(base_dir, '.env'))

class Config:
  DEBUG=False
  TESTING=False

class Development(Config):
  DEBUG=True
  SQLALCHEMY_DATABASE_URI = os.getenv('DB_URI')

class Testing(Config):
  DEBUG=True
  TESTING=False

config = {
  'development': Development,
  'testing': Testing
}