import React, { useState } from 'react'
import Tile from './Tile'
import '../styles/Board.css'

export default function Board(props) {
  const len_w = 5
  const len_h = 10
  const [grid, setGrid] = useState(
    Array(len_h).fill().map(() => Array(len_w).fill(0))
  )
  const [reRender, setReRender] = useState(false)

  const push = (title, x, y) => {
    let temp = grid
    console.log(x, y)
    temp[x][y] = title
    setGrid(temp)
  }

  const drop = e => {
    e.preventDefault()
    const title = e.dataTransfer.getData('title')
    // Get coordinates of empty space
    let x, y;
    x = e.target.getAttribute('x')
    y = e.target.getAttribute('y')
    push(title, x, y)
    setReRender(!reRender) // Tell component to rerender
  }

  const renderGrid = () => {
    return grid.map((row, x) => {
      return row.map((item, y) => {        
        if (item) {
          return <Tile 
            x={x} y={y} 
            key={y}
            title={item} // For moving elements
          />
        } else {
          return <div 
            x={x} y={y} 
            key={y}
            className='filler'
          /> // Empty space
        }
    })})
  }

  return (
    <div 
      id={props.id}
      onDrop={drop}
      onDragOver={e => e.preventDefault()}
      className='board'
    >
      { renderGrid() }
    </div>
  )
}
