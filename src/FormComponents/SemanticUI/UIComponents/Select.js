import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const InputSelectUI = ({
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

export default InputSelectUI;