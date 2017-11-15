import React from 'react'
import { Checkbox, Segment } from 'semantic-ui-react'

const InputCheckbox = ({ label, input, ...props}) => {
  const handleChange = (e, { checked }) => {
    input.onChange(checked);
  }
  return (
    <div>
      <label>
        {label}
      </label>
      <Checkbox
        toggle 
        onChange={handleChange}
      >
        <input 
          {...input}
          {...props}
        />
      </Checkbox>
    </div>
  )
}

export default InputCheckbox;