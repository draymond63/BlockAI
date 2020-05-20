import React from 'react'

import LayerColumn from '../components/LayerColumn'
import ModelColumn from '../components/ModelColumn'
import EditColumn from '../components/EditColumn'
import '../styles/Formatting.css'
import '../styles/Defaults.css'

export default function CreatePage() {
  return (
    <div className="cl-main">
      <LayerColumn/>
      <ModelColumn/>
      <EditColumn/>
    </div>
  );
}
