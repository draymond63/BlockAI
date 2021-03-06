from flask import Flask, request
import sys
from training import restructure, shapeModel, train

app = Flask(__name__)

@app.route('/api/test')
def get_current_time():
    return {'hey': 'hey'}

@app.route('/api/train', methods=['POST'])
def compile():
    json = request.json

    layer_data, training_data = restructure(json)
    model = shapeModel(layer_data)

    test_acc = train(model, training_data)

    return {'accuracy': test_acc}

@app.route('/epoch')
def status():
    return {'status': False}