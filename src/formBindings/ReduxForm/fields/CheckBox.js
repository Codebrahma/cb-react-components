import React from 'react'
import Checkbox from '../../../formComponents/SemanticUI/Checkbox.js';

const InputCheckbox = ({ 
  label, 
  labelStyle,
  wrapperDivStyle, 
  meta, 
  ...props 
}) => (
  <div style={wrapperDivStyle}>
    <label style={labelStyle}>
      {label}
    </label>
    <Checkbox
      {...props}
    />
  </div>
)

export default InputCheckbox;