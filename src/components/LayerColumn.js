import React from 'react'

export default function LayerColumn({struct, setStruct}) {
    const AddLayer = layerType => {
        let temp = [...struct]
        temp.push({ // Doesn't cause rerender
            type: layerType,
            nodes: 10,
            activation: 'None'
        })
        setStruct(temp)
    }
    
    return (
        <div className='LayerColumn'>
            <h1>Layers</h1>

            <button onClick={() => AddLayer('Dense')}>Add Layer</button>
        </div>
    )
}
