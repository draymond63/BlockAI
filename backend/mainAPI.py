import time
from flask import Flask
from flask_pymongo import PyMongo

app = Flask(__name__)
<<<<<<< HEAD
app.config["MONGO_URI"] = "mongodb+srv://TheRauser:Jagwar63@blockai-qst0z.mongodb.net/test?retryWrites=true&w=majority"
=======
app.config["MONGO_URI"] = "mongodb+srv://TheRauser:<_____________________PASSPORD___________________>@blockai-qst0z.mongodb.net/test?retryWrites=true&w=majority"
>>>>>>> 598f3e1b7bab5b1f39b013bde9d5bfc2dfc9fee5
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 598f3e1b7bab5b1f39b013bde9d5bfc2dfc9fee5

@app.route('/mongo')
def ping_mongo():
    db.insert({'name': 'Danny'})
    return {'hi': "yup"}
<<<<<<< HEAD
>>>>>>> Added initial mongo implementation
=======
>>>>>>> 598f3e1b7bab5b1f39b013bde9d5bfc2dfc9fee5
