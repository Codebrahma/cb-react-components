import React from 'react';
import {
  DatePicker, 
  DatePickerInput
} from 'rc-datepicker';
import 'rc-datepicker/lib/style.css';

const InputDateUI = ({ 
  onChange,
  ...props
}) => {

  return (
    <DatePickerInput
      onChange={onChange}
      {...props} 
    />  
  )
}

export default InputDateUI;
