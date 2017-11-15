import React from 'react';
import {
  DatePicker, 
  DatePickerInput
} from 'rc-datepicker';
import omit from 'lodash/omit';
import 'rc-datepicker/lib/style.css';

const onChange = (a, b) => {
  console.log('a and b', a, b);
};

const InputDateRange = (props) => (
  <div>
    <DatePickerInput
      onChange={onChange}
      {...omit(props, ['date'])} 
    />  
  </div>
)

export default InputDateRange;
