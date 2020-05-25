from flask import Flask, request
import sys
from training import restructure, shapeModel, train

app = Flask(__name__)

@app.route('/test')
def get_current_time():
    return {'hey': 'hey'}

@app.route('/train', methods=['POST'])
def compile():
    try:
        json = request.json

        layer_data, training_data = restructure(json)
        model = shapeModel(layer_data)

        test_acc = train(model, training_data)

        return {'accuracy': test_acc}
    except:
        return sys.exc_info()[0]

@app.route('/epoch')
def status():
    return {'status': False}