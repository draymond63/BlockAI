import React, { useContext, useState } from 'react'

import LayerColumn from '../components/LayerColumn'
import ModelColumn from '../components/ModelColumn'
import EditColumn from '../components/EditColumn'
import '../styles/Formatting.css'
import '../styles/Defaults.css'
import '../styles/Objects.css'

export default function CreatePage() {
  const [struct, setStruct] = useState([{ 
    type: 'Dense',
    node: 10,
    activation: 'sigmoid'
  }])

  const setData = data => {
    setStruct(data)
  }

  return (
    <div className="cl-main">
      <LayerColumn struct={struct} setStruct={setData}/>
      <ModelColumn struct={struct}/>
      <EditColumn  struct={struct}/>
    </div>
  );
}
