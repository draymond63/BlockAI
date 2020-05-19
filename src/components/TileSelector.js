import React, { useState } from 'react'
import '../styles/Create.css'

export default function TileSelector(props) {
    const [data, setData] = useState()

    if (props.type == 'dense') {
        
    }



    const dragStart = e => {
        const target = e.target       
        
        e.dataTransfer.setData('item', 
            '1'
        )
    }

    const dragOver = e => {
        e.stopPropagation()
    }

    return (
        <div
            id={props.id}
            className='tile'
            onDragStart={dragStart}
            onDragOver={dragOver}
            draggable='true'
        >
            { props.children }
        </div>
    )
}
