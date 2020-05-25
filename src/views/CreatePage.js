import React, { useState } from 'react'

import LayerColumn from '../components/LayerColumn'
import ModelColumn from '../components/ModelColumn'
import EditColumn from '../components/EditColumn'
import '../styles/Formatting.css'
import '../styles/Defaults.css'
import '../styles/Objects.css'

export default function CreatePage() {
  const [struct, setStruct] = useState([{
    type: "Input",
    optimizer: 'SGD',
    loss: 'sparse_categorical_crossentropy',
    metrics: 'accuracy',
    epochs: 1,
    batch: 64,
    flatten: 1
  }])
  const [pageIndex, setPageIndex] = useState(0)

  return (
    <div className="cl-main">
      <LayerColumn 
        struct={struct} 
        setStruct={setStruct}
      />
      <ModelColumn 
        struct={struct} 
        setPageIndex={setPageIndex} 
        pageIndex={pageIndex}
      />
      <EditColumn 
        struct={struct} 
        setStruct={setStruct} 
        pageIndex={pageIndex} 
      />
    </div>
  );
}
