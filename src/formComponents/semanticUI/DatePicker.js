import React from 'react';
import {
  DatePicker, 
  DatePickerInput
} from 'rc-datepicker';
import 'rc-datepicker/lib/style.css';

const InputDateRange = ({ 
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

export default InputDateRange;
