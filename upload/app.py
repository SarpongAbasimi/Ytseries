import os 
from flask import Flask, render_template, request, redirect, flash, url_for, send_file
from werkzeug.utils import secure_filename
from flask_sqlalchemy import SQLAlchemy
from io import BytesIO

app = Flask(__name__)
app.secret_key = b'secret'
db = SQLAlchemy(app)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///example.sqlite"

BASE_PATH = os.path.abspath(os.environ.get('HOME'))
ALLOWED_EXTENSION = {'txt', 'pdf', 'jpg', 'jpeg', 'gif', 'png'}

class Item(db.Model):
  id = db.Column(db.Integer, primary_key=True)
  name = db.Column(db.String, unique=True, nullable=False)
  data = db.Column(db.LargeBinary)

def allowed_files(filename: str) -> bool:
  return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSION

@app.route('/', methods=['GET', 'POST'])
def index():
  if request.method == 'POST':
    if 'file' not in request.files:
      flash('No file part')
      return redirect(request.url)

    file = request.files.get('file')

    if file.filename  == '' :
      flash('No file was selected')
      return redirect(request.url)

    if file and allowed_files(file.filename):
      # filename = secure_filename(file.filename)
      # file.save(os.path.join(BASE_PATH, 'DESKTOP/whereToUploadTo', filename))

      new_file = Item(name=file.filename, data=file.read())
      db.session.add(new_file)
      db.session.commit()

      flash('File uploaded successfully')
      return redirect(url_for('index'))
  return render_template('index.html')

@app.route('/files', methods=['GET'])
def files():
  items = Item().query.all()
  return render_template('files.html', items=items)

@app.route('/download/<int:id>', methods=['GET'])
def download(id):
  item = Item().query.filter_by(id=id).first()
  return send_file(BytesIO(item.data), mimetype='image/png', as_attachment=True, attachment_filename=item.name)

if __name__ == '__main__':
  app.run(debug=True)