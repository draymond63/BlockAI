import React from 'react'
import { Button } from '@material-ui/core'
import CTX from '../components/Store'

export default function EditColumn(props) {
    const store = React.useContext(CTX);

    const train = () => {
        fetch('/train', {
            method: 'POST',
            body: JSON.stringify(store.struct),
            headers: new Headers({'content-type': 'application/json'}),
        })
        .then((response) => { response.json()
        .then((body) => console.log(body));
        });
    }

    return (
        <div className='EditColumn'>
            <h1>Edits</h1>
            <Button onClick={train}>Compile</Button>
        </div>
    )
}
