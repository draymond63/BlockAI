import time
from flask import Flask
from flask_pymongo import PyMongo

app = Flask(__name__)
app.config["MONGO_URI"] = "mongodb+srv://TheRauser:Jagwar63@blockai-qst0z.mongodb.net/test?retryWrites=true&w=majority"
mongo = PyMongo(app)
db = mongo.db.BlockAI

@app.route('/times')
def get_current_time():
    return {'time': time.time()}

@app.route('/login/<string:username>/<string:password>', methods=['GET'])
def get_account(username, password):
    real_u = 'Daniel'
    real_p = 'H'
    is_verified = username == real_u and password == real_p

    return {'verified': is_verified}

@app.route('/mongo')
def ping_mongo():
    db.insert({'name': 'Danny'})
    return {'hi': "yup"}
