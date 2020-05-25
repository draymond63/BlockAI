import os
os.environ['TF_CPP_MIN_LOG_LEVEL'] = '3'
import tensorflow as tf
os.environ['TF_CPP_MIN_LOG_LEVEL'] = '1'

def restructure(json):
    print(json)
    return json['struct'], json['settings']

def shapeModel(data):
    model = tf.keras.models.Sequential([])
    model.add(tf.keras.layers.Flatten())

    for layer in data[1:]:
        activation = layer['activation'] if layer['activation'] != 'none' else None

        model.add(tf.keras.layers.Dense(
            layer['nodes'], 
            activation=activation
        ))
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
        verbose = 0
    )
    model.summary()

    _, test_acc = model.evaluate(x_test, y_test)
    return test_acc