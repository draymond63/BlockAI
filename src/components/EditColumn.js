import React from 'react'

export default function EditColumn({struct}) {
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

    return (
        <div className='EditColumn'>
            <div className='EditSection'>
                <h1>Edits</h1>
            </div>
            <div className='TrainSection'>
                <button className='TaTbtn' onClick={train}>Train & Test</button>
            </div>
        </div>
    )
}
