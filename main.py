from flask import Flask, request, redirect, render_template, session, flash
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

#from sqlalchemy import Column, Integer, String, Boolean
#from sqlalchemy.ext.declarative import declarative_base

app = Flask(__name__)
app.config['DEBUG'] = True
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://build-a-blog:sleepy@localhost:8889/build-a-blog'
app.config['SQLALCHEMY_ECHO'] = True
db = SQLAlchemy(app)
app.secret_key = 'yfdn3656ymcjz&vzAIP'

# Set the home page route. In this application it's the blog page
@app.route('/',methods=['POST','GET'])
def index():
    return render_template('pyramid.html', title='Pyramid Slide')


# If app is called from main run
if __name__ == '__main__':
    app.run()