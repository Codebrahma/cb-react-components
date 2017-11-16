import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const InputSelect = ({ 
  label, 
  labelStyle,
  wrapperDivStyle,
  inputDivStyle,
  input, 
  meta, 
  ...props
}) => {
  const handleChange = (e, { value }) => {
    console.log('value ', value);
    input.onChange(value);
  }

  return (
    <div style={wrapperDivStyle}>
      <label
        style={labelStyle}
      >
        {label}
      </label>
      <div style={inputDivStyle}>
        <Dropdown 
          {...input} 
          {...props}
          onChange={handleChange}
        />
      </div>
    </div>
  )
}

export default InputSelect;