import React from 'react'

// XXX ADD DRAGABILITY
export default function Tile({id, title}) {
    console.log(title)
    // const dragStart = e => {
    //     e.dataTransfer.setData('item', data)
    //     setTimeout(() => {
    //         e.target.style.display = 'none'
    //     }, 0)
    // }
    // const dragOver = e => {
    //     e.stopPropagation()
    // }

    return (
        <div
            id={id}
            className='tile'
            draggable='false'
        >
            <h1>{title}</h1>
            {/* Drop down menu for changes */}
        </div>
    )
}
