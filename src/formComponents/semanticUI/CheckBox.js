import React from 'react'
import { Checkbox } from 'semantic-ui-react'

const InputCheckboxUI = ({ 
  input,
  inputDivStyle, 
  ...props 
}) => (
  <Checkbox
    style={inputDivStyle} 
    {...input} 
  >
    <input
      {...props}
    />
  </Checkbox>
)

export default InputCheckboxUI;