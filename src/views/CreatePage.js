import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@material-ui/core'
  
// import CTX from '../components/Store'
// const store = React.useContext(CTX);
import Board from '../components/Board'
import Tile from '../components/Tile'
import '../styles/Create.css'

export default function LoginPage() {
  const [struct] = useState(
    {
      hi: 'Teehee'
    }
  )

  const train = () => {
    const data = new FormData();
    data.append('data', struct);
    
    fetch('/train', {
      method: 'POST',
      body: data,
    })
    .then((response) => { response.json()
    .then((body) => console.log(body));
    });
  }

  return (
    <div className="flexBox">
      <Link to="/">Go Back</Link>
      <Button onClick={train}>Compile</Button>
      
      <Board id='Board-1' className='board'>
        <Tile id='card-1' className='tile'>1</Tile>
        <Tile id='card-2' className='tile'>2</Tile>
      </Board>

      <Board id='Board-2' className='board'>
        <Tile id='card-3' className='tile'>3</Tile>
        <Tile id='card-4' className='tile'>4</Tile>
      </Board>
      
    </div>
  );
}
