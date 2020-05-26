import React from 'react'

export default function LayerBlock({type, isSet, setPage}) {
    const colors = {
        Input: ['#F2EAED', '#A4A4BF'],
        Dense: ['rgb(237, 237, 251)', '#2A3457'],
        Conv: ['rgb(251, 206, 223)', '#F991B8']
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
