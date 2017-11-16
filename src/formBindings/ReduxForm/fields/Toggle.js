import React from 'react'
import Toggle from '../../../formComponents/SemanticUI/Toggle.js';

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
        <Toggle
          onChange={handleChange}
          {...props}
        />
      </div>
    </div>
  )
}

export default InputCheckbox;