import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const InputSelect = ({
  input,
  onChange,  
  ...props
}) => {
  return (
    <Dropdown 
      {...input} 
      {...props}
      onChange={onChange}
    />
  )
}

export default InputSelect;