import React from 'react';
import { Link } from 'react-router-dom';

// import CTX from '../components/Store'
// const store = React.useContext(CTX);
import Board from '../components/Board'
import Tile from '../components/Tile'
import '../styles/Create.css'

export default function LoginPage() {

  return (
    <div className="flexBox">
      <Link to="/">Go Back</Link>
      
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
