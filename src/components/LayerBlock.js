import React from 'react'

export default function LayerBlock({text, type, setPage}) {
    let color;
    if (type === 'Input')
        color = '#A4A4BF' 
    else if (type === 'Dense')
        color = '#F2EAED'

    return (
        <div 
            className='Layer' 
            style={{background: color}}
            onClick={setPage}
        >
            <h2>{text} Layer</h2>
        </div>
    )
}
