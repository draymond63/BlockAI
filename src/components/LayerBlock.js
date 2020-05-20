import React from 'react'

export default function LayerBlock({text, color, type}) {
    const changeEdits = () => {
        console.log(type)
    }

    return (
        <div 
            className='Layer' 
            style={{background:  color}}
            onClick={changeEdits}
        >
            <h2>{text}</h2>
        </div>
    )
}
