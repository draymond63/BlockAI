import React from 'react'

export default function LayerColumn({struct, setStruct, setPageIndex}) {
    const AddLayer = layer => {
        let temp = [...struct]
        temp.push(layer)
        setPageIndex(struct.length) // Focus on added layer
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
                    flatten: 0,
                    activation: 'None'
                })}>Dense
                <div className="plus">+</div>
            </div>
            <div 
                className='addLayer' 
                onClick={() => AddLayer({ // Doesn't cause rerender
                    type: 'Conv',
                    filters: 1,
                    width: 3,
                    stride: 1,
                    flatten: 0,
                    activation: 'None'
                })}>Convolution
                <div className="plus">+</div>
            </div>
        </div>
    )
}
