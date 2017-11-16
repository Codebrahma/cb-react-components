import React from 'react'
import { Input } from 'semantic-ui-react'

const InputExampleInput = ({ 
  placeholder, 
  label, 
  input, 
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
      <Input 
        placeholder={placeholder}
        {...input} 
        >
        <input
          {...props}
        />
      </Input>
    </div>
  </div>
)

export default InputExampleInput