import React from 'react'
import { CheckBoxUI } from '../Config/UIPicker.js';

const InputCheckbox = ({ 
  label, 
  labelStyle,
  wrapperDivStyle, 
  meta, 
  ...props 
}) => {
  const handleChange = (e, result) => {
    if (result && result.checked) {
      props.input.onChange(result.checked);  
    } else {
      props.input.onChange(e)
    }
  } 
  return (
    <div style={wrapperDivStyle}>
      <label style={labelStyle}>
        {label}
      </label>
      <CheckBoxUI
        {...props}
        handleChange={handleChange}
      />
    </div>
  )
}

export default InputCheckbox;