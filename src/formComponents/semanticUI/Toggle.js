import React from 'react'
import { Checkbox, Segment } from 'semantic-ui-react'

const InputCheckbox = ({ 
  handleChange,
  input,
  ...props
}) => {
  return (
    <Checkbox
      toggle 
      onChange={handleChange}
    >
      <input 
        {...input}
        {...props}
      />
    </Checkbox>
  )
}

export default InputCheckbox;