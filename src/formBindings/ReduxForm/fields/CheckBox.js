import React from 'react'
import { CheckBoxUI } from '../Config/UIPicker.js';

const InputCheckbox = ({ 
  label, 
  labelStyle,
  wrapperDivStyle, 
  meta, 
  ...props 
}) => (
  <div style={wrapperDivStyle}>
    <label style={labelStyle}>
      {label}
    </label>
    <CheckBoxUI
      {...props}
    />
  </div>
)

export default InputCheckbox;