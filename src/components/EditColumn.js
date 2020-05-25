import React from 'react'

export default function EditColumn({struct, setStruct, settings, changeSettings, pageIndex}) {
    const train = () => {
        console.log(struct)
        fetch('/train', {
            method: 'POST',
            body: JSON.stringify({struct, settings}), 
            headers: new Headers({'content-type': 'application/json'}),
        })
        .then((response) => { response.json()
        .then((body) => console.log(body));
        });
    }

    const editStruct = (e, attr) => {
        let temp = [...struct]
        temp[pageIndex][attr] = e.target.value
        setStruct(temp)
    }
    
    const editSettings = (e, attr) => {
        let temp = [...settings]
        temp[attr] = e.target.value
        changeSettings(temp)
    }

    return (
        <div className='EditColumn'>
            <div className='EditSection'>
                <h1>Layer Parameters</h1>
                {struct[pageIndex].type === 'Input' &&
                <div>
                    <select value={settings.compiler} onChange={e => editSettings(e, 'compiler')}>
                        <option value="none">None</option>
                        <option value="sigmoid">Sigmoid</option>
                        <option value="tanh">Tanh</option>
                        <option value="relu">Relu</option>
                        <option value="softmax">Softmax</option>
                    </select>
                </div>}

                {struct[pageIndex].type === 'Dense' &&
                <div>
                    <h2># of Nodes</h2>
                    <input type='text' value={struct[pageIndex].nodes} onChange={e => editStruct(e, 'nodes')}/>
                    <h2>Activation</h2>
                    <select value={struct[pageIndex].activation} onChange={e => editStruct(e, 'activation')}>
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
                    <input type='text' value={struct[pageIndex].width} onChange={e => editStruct(e, 'width')}/>
                    <h2>Padding</h2>
                    <input type='text' value={struct[pageIndex].padding} onChange={e => editStruct(e, 'padding')}/>
                    <h2>Stride</h2>
                    <input type='text' value={struct[pageIndex].stride} onChange={e => editStruct(e, 'stride')}/>
                    <h2>Activation</h2>
                    <select value={struct[pageIndex].activation} onChange={e => editStruct(e, 'activation')}>
                        <option value="none">None</option>
                        <option value="sigmoid">Sigmoid</option>
                        <option value="tanh">Tanh</option>
                        <option value="relu">Relu</option>
                        <option value="softmax">Softmax</option>
                    </select>
                </div>}
            </div>
            <div className='TrainSection'>
                <button className='TaTbtn' onClick={train}>Train & Test</button>
            </div>
        </div>
    )
}
