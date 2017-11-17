import React from 'react'
import { Checkbox, Segment } from 'semantic-ui-react'

const InputCheckboxUI = ({ 
  onChange,
  input,
  ...props
}) => {
  return (
    <Checkbox
      toggle 
      onChange={onChange}
    >
      <input 
        {...input}
        {...props}
      />
    </Checkbox>
  )
}

export default InputCheckboxUI;