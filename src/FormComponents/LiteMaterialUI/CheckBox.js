import React from 'react'
import { Checkbox} from 'react-mdl';

const InputCheckboxUI = ({ 
  input,
  inputDivStyle, 
  ...props 
}) => (
  <Checkbox
    style={inputDivStyle} 
    {...input}
    {...props} 
  />
)

export default InputCheckboxUI;