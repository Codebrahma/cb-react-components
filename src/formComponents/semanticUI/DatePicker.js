import React from 'react';
import {
  DatePicker, 
  DatePickerInput
} from 'rc-datepicker';
import omit from 'lodash/omit';
import 'rc-datepicker/lib/style.css';

const InputDateRange = ({ input, meta, ...props }) => {
  const onChange = (a, b) => {
    input.onChange(b);
  };

  return (
    <div>
      <DatePickerInput
        onChange={onChange}
        {...omit(props, ['date'])} 
      />  
    </div>
  )
}

export default InputDateRange;
