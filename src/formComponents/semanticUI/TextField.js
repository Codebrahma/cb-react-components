import React from 'react'
import { Input } from 'semantic-ui-react'

const InputTextUI = ({ 
  placeholder, 
  input,
  ...props }) => (
  <Input 
    placeholder={placeholder}
    {...input} 
    >
    <input
      {...props}
    />
  </Input>
);

export default InputTextUI;