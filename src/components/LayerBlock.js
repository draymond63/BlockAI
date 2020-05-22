import React from 'react'

export default function LayerBlock({type, isSet, setPage}) {
    const colors = {
        Input: ['#F2EAED', '#A4A4BF'],
        Dense: ['#F2EAED', '#A4A4BF'],
        Conv: ['#F2EAED', '#A4A4BF']
    }

    return (
        <div 
            className='Layer' 
            style={{
                background: colors[type][isSet ? 1 : 0],
                color: isSet ? '#FFF' : '#000'
            }}
            onClick={setPage}
        >
            <h2>{type} Layer</h2>
        </div>
    )
}
