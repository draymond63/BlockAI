import React, { useState, useEffect } from 'react'
import LayerBlock from './LayerBlock'

export default function ModelColumn({struct}) {    
    const renderLayers = () => {
        // Add input block
        let layers = [<LayerBlock key={0} text='Input' color='#A4A4BF' type='Input'/>]
        // Add successive layers
        layers.push(struct.map((layer, index) => {
            return <LayerBlock 
                key={index + 1} 
                text={layer.type} 
                color='#F2EAED' 
                type={layer.type}
            />
        }))
        return layers
    }

    return (
        <div className='ModelColumn'>
            <h1>Model</h1>
            {renderLayers()}
        </div>
    )
}
