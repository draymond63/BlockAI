import React from 'react'

export default function EditColumn({struct, setStruct, pageIndex}) {
    const train = () => {
        console.log(struct)
        fetch('/api/train', {
            method: 'POST',
            body: JSON.stringify(struct), 
            headers: new Headers({'content-type': 'application/json'}),
        })
        .then((response) => { response.json()
        .then((body) => console.log(body));
        });
    }

    const edit = (e, attr) => {
        let temp = [...struct]
        temp[pageIndex][attr] = e.target.value
        setStruct(temp)
    }

    return (
        <div className='EditColumn'>
            <div className='EditSection'>
                <h1>Layer Parameters</h1>
                {struct[pageIndex].type === 'Input' &&
                <div>
                    <h2>Optimizer</h2>
                    <select value={struct[pageIndex].optimizer} onChange={e => edit(e, 'optimizer')}>
                        <option value="SGD">SGD</option>
                        <option value="adam">Adam</option>
                    </select>
                    <h2>Epochs</h2>
                    <input type='text' value={struct[pageIndex].epochs} onChange={e => edit(e, 'epochs')}/>
                    <h2>Batch Size</h2>
                    <input type='text' value={struct[pageIndex].batch} onChange={e => edit(e, 'batch')}/>
                </div>}

                {struct[pageIndex].type === 'Dense' &&
                <div>
                    <h2># of Nodes</h2>
                    <input type='text' value={struct[pageIndex].nodes} onChange={e => edit(e, 'nodes')}/>
                    <h2>Activation</h2>
                    <select value={struct[pageIndex].activation} onChange={e => edit(e, 'activation')}>
                        <option value="none">None</option>
                        <option value="sigmoid">Sigmoid</option>
                        <option value="tanh">Tanh</option>
                        <option value="relu">Relu</option>
                        <option value="softmax">Softmax</option>
                    </select>
                </div>}

                {struct[pageIndex].type === 'Conv' &&
                <div>
                    <h2>Kernel Width & Length</h2>
                    <input type='text' value={struct[pageIndex].width} onChange={e => edit(e, 'width')}/>
                    <h2>Stride</h2>
                    <input type='text' value={struct[pageIndex].stride} onChange={e => edit(e, 'stride')}/>
                    <h2>Activation</h2>
                    <select value={struct[pageIndex].activation} onChange={e => edit(e, 'activation')}>
                        <option value="none">None</option>
                        <option value="sigmoid">Sigmoid</option>
                        <option value="tanh">Tanh</option>
                        <option value="relu">Relu</option>
                        <option value="softmax">Softmax</option>
                    </select>
                </div>}
                <h2>Flatten Output</h2>
                    <select value={struct[pageIndex].flatten} onChange={e => edit(e, 'flatten')}>
                        <option value={1}>Yes</option>
                        <option value={0}>No</option>
                </select>
            </div>
            <div className='TrainSection'>
                <button className='TaTbtn' onClick={train}>Train & Test</button>
            </div>
        </div>
    )
}
