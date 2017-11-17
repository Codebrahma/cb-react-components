import React from 'react'
import { ToggleUI } from '../Config/UIPicker.js';

const InputCheckbox = ({ 
  label, 
  labelStyle,
  wrapperDivStyle,
  inputDivStyle,
  ...props
}) => {
  const handleChange = (e, { checked }) => {
    props.input.onChange(checked);
  }
  return (
    <div style={wrapperDivStyle}>
      <label style={labelStyle}>
        {label}
      </label>
      <div style={inputDivStyle}>
        <ToggleUI
          onChange={handleChange}
          {...props}
        />
      </div>
    </div>
  )
}

export default InputCheckbox;