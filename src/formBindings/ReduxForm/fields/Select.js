import React from 'react'

import { SelectUI } from '../Config/UIPicker.js';

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
        <SelectUI
          {...props}
          onChange={handleChange}
        />
      </div>
    </div>
  )
}

export default InputSelect;