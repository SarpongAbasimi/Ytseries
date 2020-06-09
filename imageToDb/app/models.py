from app import db

class Image(db.Model):
  id = db.Column(db.Integer, primary_key=True)
  image_file = db.Column(db.String(20), nullable=True)

  def __repr__(self):
    return f'Image Id is {id} -> {image_file}'