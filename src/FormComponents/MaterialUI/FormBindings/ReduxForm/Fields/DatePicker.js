import React from 'react';
import omit from 'lodash/omit';

import FormInputHelperText from '../Common/FormInputHelper.js';

const InputDate = ({ 
  meta, 
  label, 
  labelStyle,
  wrapperDivStyle,
  inputDivStyle,
  wrapperHelperStyle,
  errorSpanStyle,
  warningSpanStyle,
  ...props 
}) => {
  const onChange = (a, b) => {
    props.input.onChange(b);
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
          onBlur={props.input.onBlur}
          {...omit(props, ['date'])} 
        />  
      </div>
      <div style={wrapperHelperStyle}>
        <FormInputHelperText
          {...props}
          meta={meta}
          style={{
            errorSpanStyle: errorSpanStyle,
            warningSpanStyle: warningSpanStyle,
          }}
        />
      </div>
    </div>
  )
}

export default InputDate;
