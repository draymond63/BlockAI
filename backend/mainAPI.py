import time
from flask import Flask, request
from flask_pymongo import PyMongo

from training import restructure, shapeModel, train

app = Flask(__name__)

@app.route('/test')
def get_current_time():
    return {'time': time.time()}

@app.route('/train', methods=['POST'])
def compile():
    json = request.json
    print(request.json)

    layer_data, training_data = restructure(json)
    model = shapeModel(layer_data)

    test_acc = train(model, training_data)

    return {'accuracy': test_acc}
