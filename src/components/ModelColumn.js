import React from 'react'
import LayerBlock from './LayerBlock'

export default function ModelColumn({struct, setPageIndex}) {    
        // Add successive layers
    const renderLayers = () => {
        const layers = struct.map((layer, index) => {
            return <LayerBlock 
                setPage={() => setPageIndex(index)}
                key={index} 
                text={layer.type} 
                type={layer.type}
            />
        })
        return layers
    }

    return (
        <div className='ModelColumn'>
            <h1>Model</h1>
            {renderLayers()}
        </div>
    )
}
