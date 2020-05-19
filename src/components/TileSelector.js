import React, { useState, useEffect } from 'react'
import '../styles/Create.css'

export default function TileSelector(props) {
    const [title, setTitle] = useState(props.type)

    // useEffect(() => {
    //     if (props.type === 'dense') {
    //         setTitle('Dense')
    //     }
    // }, [])

    const storeDragData = e => {
        e.dataTransfer.setData('title', title)
    }

    return (
        <div
            id={props.id}
            className='tile'
            onDragStart={storeDragData}
            onDragOver={e => e.stopPropagation()}
            draggable='true'
        >
            <h1>{title}</h1>
        </div>
    )
}
