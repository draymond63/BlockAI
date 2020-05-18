import os
os.environ['TF_CPP_MIN_LOG_LEVEL'] = '3'
import tensorflow as tf
os.environ['TF_CPP_MIN_LOG_LEVEL'] = '1'

def restructure(json):
    return {
        '1': {
            'nodes': 512
        },
        '2': {
            'nodes': 10
        }
    }, {
        'optimizer': 'SGD',
        'loss': 'sparse_categorical_crossentropy',
        'metrics': 'accuracy',
        'epochs': 1,
        'batch': 64
    }

def shapeModel(data):
    keys = sorted(data)
    model = tf.keras.models.Sequential([])
    model.add(tf.keras.layers.Flatten())

    for key in keys[:-1]:
        nodes = data[key]['nodes']
        model.add(tf.keras.layers.Dense(nodes))

    # Last layer needs softmax
    nodes = data[keys[-1]]['nodes']
    model.add(tf.keras.layers.Dense(nodes, activation='softmax'))

    return model

def train(model, attr):
    # Training data
    mnist = tf.keras.datasets.mnist
    (x_train, y_train), (x_test, y_test) = mnist.load_data()
    x_train = x_train / 127.5 - 1
    x_test = x_test / 127.5 - 1

    model.compile(
        optimizer = attr['optimizer'],
        loss = attr['loss'],
        metrics = attr['metrics']
    )

    model.fit(x_train, y_train, 
        batch_size = attr['batch'], 
        epochs = attr['epochs'],
    )

    _, test_acc = model.evaluate(x_test, y_test)
    return test_acc