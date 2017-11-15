import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const InputSelect = ({ label, input, meta, ...props}) => {
  const handleChange = (e, { value }) => {
    console.log('value ', value);
    input.onChange(value);
  }

  return (
    <div>
      <label>
        {label}
      </label>
      <Dropdown 
        {...input} 
        {...props}
        onChange={handleChange}
      />
    </div>
  )
}

export default InputSelect;