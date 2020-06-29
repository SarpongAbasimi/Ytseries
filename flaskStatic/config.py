from typing import Dict, Type

class Config(object):
  DEBUG: bool = False
  TESTING: bool = False

class Development(Config):
  DEBUG: bool = True


config: Dict[str, Type[Config]] = {
  'development': Development
}
