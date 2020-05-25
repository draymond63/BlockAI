import os
os.environ['TF_CPP_MIN_LOG_LEVEL'] = '3'
import tensorflow as tf
os.environ['TF_CPP_MIN_LOG_LEVEL'] = '1'

def restructure(json):
    for i in range(len(json)):
        if json[i]['flatten']:
            json.insert(i + 1, {
                'type': 'Flatten', 
                'flatten': 0,
                'activation': 'none'
            })

    return json[1:], json[0]

def shapeModel(data):
    model = tf.keras.models.Sequential([])
    model.add(tf.keras.layers.Flatten())

    for layer in data:
        activation = layer['activation'] if layer['activation'] != 'none' else None

        if layer['type'] == 'Dense':
            model.add(tf.keras.layers.Dense(
                layer['nodes'], 
                activation=activation
            ))
        elif layer['type'] == 'Conv':
            model.add(tf.keras.layers.Conv2D(
                layer['filters'],
                layer['width'],
                strides=[layer['stride']]*2
            ))
        if layer['type'] == 'Flatten':
            model.add(tf.keras.layers.Flatten())
    
    return model

def train(model, settings):
    # Training data
    mnist = tf.keras.datasets.mnist
    (x_train, y_train), (x_test, y_test) = mnist.load_data()
    x_train = x_train / 127.5 - 1
    x_test = x_test / 127.5 - 1

    model.compile(
        optimizer = settings['optimizer'],
        loss = settings['loss'],
        metrics = settings['metrics']
    )

    model.fit(x_train, y_train, 
        batch_size = settings['batch'], 
        epochs = settings['epochs'],
        verbose = 0
    )
    model.summary()

    _, test_acc = model.evaluate(x_test, y_test)
    return test_acc