import React from 'react'
import { Checkbox, Segment } from 'semantic-ui-react'

const InputCheckbox = ({ 
  label, 
  input, 
  labelStyle,
  wrapperDivStyle,
  inputDivStyle,
  ...props
}) => {
  const handleChange = (e, { checked }) => {
    input.onChange(checked);
  }
  return (
    <div style={wrapperDivStyle}>
      <label style={labelStyle}>
        {label}
      </label>
      <div style={inputDivStyle}>
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
    </div>
  )
}

export default InputCheckbox;