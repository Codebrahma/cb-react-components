import React from 'react'
import { Dropdown } from 'semantic-ui-react'

import InputSelectUI from '../../../formComponents/SemanticUI/Select.js';

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
        <InputSelectUI
          {...props}
          onChange={handleChange}
        />
      </div>
    </div>
  )
}

export default InputSelect;