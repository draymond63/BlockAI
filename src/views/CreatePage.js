import React, { useState } from 'react'
import { Button } from '@material-ui/core'
  
// import CTX from '../components/Store'
// const store = React.useContext(CTX);
import Board from '../components/Board'
import TileSelector from '../components/TileSelector'
import '../styles/Create.css'

export default function LoginPage() {
  const [struct] = useState(
    {
      hi: '1'
    }
  )

  const train = () => {
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
    <div className="cl-main">
      <div className="sideBar">
        <div className="optionsBar">
          <Button onClick={train}>Compile</Button>
        </div>
        <div 
          id='Board-1' 
          className='menu'
          onDrop={e => e.preventDefault()}
          onDragOver={e => e.preventDefault()}
        >
          <TileSelector 
            id='tile-1'
            type='dense'
          />
          <TileSelector 
            id='tile-zzz'
            type='dense'
          />
        </div>
      </div>
      <Board id='Board-2' className='board'/>
    </div>
  );
}
