import React from 'react'

import TextFieldUI from '../../../formComponents/SemanticUI/TextField.js';

const InputExampleInput = ({ 
  placeholder, 
  label, 
  labelStyle,
  wrapperDivStyle,
  inputDivStyle,
  meta, 
  ...props }) => (
  <div style={wrapperDivStyle}>
    <label style={labelStyle}>
      {label}
    </label>
    <div style={inputDivStyle}>
      <TextFieldUI
        placeholder={placeholder}
        {...props}
      />
    </div>
  </div>
)

export default InputExampleInput