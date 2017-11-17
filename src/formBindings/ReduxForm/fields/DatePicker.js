import React from 'react';
import omit from 'lodash/omit';

import { DatePickerUI } from '../Config/UIPicker.js';

const InputDate = ({ 
  input, 
  meta, 
  label, 
  labelStyle,
  wrapperDivStyle,
  inputDivStyle,
  ...props 
}) => {
  const onChange = (a, b) => {
    input.onChange(b);
  };

  return (
    <div style={wrapperDivStyle}>
      <label
        style={labelStyle}
      > {label}
      </label>
      <div style={inputDivStyle}>
        <DatePickerUI
          onChange={onChange}
          {...omit(props, ['date'])} 
        />  
      </div>
    </div>
  )
}

export default InputDate;
