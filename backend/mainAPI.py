import time
from flask import Flask

app = Flask(__name__)

@app.route('/times')
def get_current_time():
    return {'time': time.time()}

@app.route('/login/<string:username>/<string:password>', methods=['GET'])
def get_account(username, password):
    real_u = 'Daniel'
    real_p = 'H'
    is_verified = username == real_u and password == real_p

    return {'verified': is_verified}
