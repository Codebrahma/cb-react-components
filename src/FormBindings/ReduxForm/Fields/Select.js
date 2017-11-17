import React from 'react'

import { SelectUI } from '../Config/UIPicker.js';

const InputSelect = ({ 
  label, 
  labelStyle,
  wrapperDivStyle,
  inputDivStyle,
  meta, 
  ...props
}) => {
  const handleChange = (e, result) => {
    if (result && result.value) {
      props.input.onChange(result.value);  
    } else {
      props.input.onChange(e)
    }
  } 

  return (
    <div style={wrapperDivStyle}>
      <label
        style={labelStyle}
      >
        {label}
      </label>
      <div style={inputDivStyle}>
        <SelectUI
          {...props}
          onChange={handleChange}
        />
      </div>
    </div>
  )
}

export default InputSelect;