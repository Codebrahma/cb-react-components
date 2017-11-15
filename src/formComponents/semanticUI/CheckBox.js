import React from 'react'
import { Checkbox } from 'semantic-ui-react'

const InputCheckbox = ({ 
  label, 
  labelStyle,
  wrapperDivStyle,
  inputDivStyle,
  input, 
  meta, 
  ...props 
}) => (
  <div style={wrapperDivStyle}>
    <label style={labelStyle}>
      {label}
    </label>
    <Checkbox
      style={inputDivStyle} 
      {...input} 
    >
      <input
        {...props}
      />
    </Checkbox>
  </div>
)

export default InputCheckbox;