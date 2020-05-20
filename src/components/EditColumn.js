import React from 'react'

export default function EditColumn({struct, setStruct, pageIndex}) {
    const train = () => {
        console.log(struct)
        fetch('/train', {
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
                    <h2>Input URL</h2>
                    <p>Sorry! There's no parameters as of right now :/</p>
                </div>
                }
                {struct[pageIndex].type === 'Dense' &&
                <div>
                    <h2># of Nodes</h2>
                    <input type='text' value={struct[pageIndex].nodes} onChange={e => edit(e, 'nodes')}/>
                    <h2>Activation</h2>
                    <select value={struct[pageIndex].activation} onChange={e => edit(e, 'activation')}>
                        <option value="None">None</option>
                        <option value="Sigmoid">Sigmoid</option>
                        <option value="Tanh">Tanh</option>
                        <option value="Softmax">Softmax</option>
                    </select>
                </div>
                }
                {struct[pageIndex].type === 'Conv' &&
                    <h2>Conv</h2>
                }
            </div>
            <div className='TrainSection'>
                <button className='TaTbtn' onClick={train}>Train & Test</button>
            </div>
        </div>
    )
}
