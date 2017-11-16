import React from 'react';
import {
  DatePicker, 
  DatePickerInput
} from 'rc-datepicker';
import omit from 'lodash/omit';
import 'rc-datepicker/lib/style.css';

const InputDateRange = ({ 
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
        <DatePickerInput
          onChange={onChange}
          {...omit(props, ['date'])} 
        />  
      </div>
    </div>
  )
}

export default InputDateRange;
