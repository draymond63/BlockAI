import React from 'react'

export default function LayerColumn({struct, setStruct}) {
    const AddLayer = layer => {
        let temp = [...struct]
        temp.push(layer)
        setStruct(temp)
    }
    
    return (
        <div className='LayerColumn'>
            <h1>Layers</h1>

            <button 
                className='addLayer' 
                onClick={() => AddLayer({ // Doesn't cause rerender
                    type: 'Dense',
                    nodes: 10,
                    activation: 'None'
                })}>Dense
            </button>
            <button 
                className='addLayer' 
                onClick={() => AddLayer({ // Doesn't cause rerender
                    type: 'Conv',
                    width: 3,
                    padding: 0,
                    stride: 1,
                    activation: 'None'
                })}>Convolution
            </button>
        </div>
    )
}
