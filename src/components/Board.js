import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid'
import Tile from './Tile'

export default function Board(props) {
  const len_w = 5
  const len_h = 5
  const [grid, setGrid] = useState(
    Array(len_w).fill().map(() => Array(len_h).fill(0))
  )
  const [reRender, setReRender] = useState(false)

  const push = tile => {
    let temp = grid
    temp[0][0] = tile
    setGrid(temp)
  }

  const drop = e => {
    e.preventDefault()
    const tile = e.dataTransfer.getData('item')
    push(tile)
    setReRender(!reRender) // Tell component to rerender
  }

  const renderGrid = () => {
    return grid.map(row => {
      return row.map(item => {        
        if (item) {
          return (
            <Tile />
          )
        } else {
          return <span /> // Empty space
        }
    })})
  }

  return (
    <Grid 
      id={props.id}
      onDrop={drop}
      onDragOver={e => e.preventDefault()}
      className={props.className}
    >
      { renderGrid() }
    </Grid>
  )
}
