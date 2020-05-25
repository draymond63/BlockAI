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

            <div 
                className='addLayer' 
                onClick={() => AddLayer({ // Doesn't cause rerender
                    type: 'Dense',
                    nodes: 10,
                    activation: 'None'
                })}>Dense
                <div className="plus">+</div>
            </div>
            <div 
                className='addLayer' 
                onClick={() => AddLayer({ // Doesn't cause rerender
                    type: 'Conv',
                    width: 3,
                    padding: 0,
                    stride: 1,
                    activation: 'None'
                })}>Convolution
                <div className="plus">+</div>
            </div>
        </div>
    )
}
