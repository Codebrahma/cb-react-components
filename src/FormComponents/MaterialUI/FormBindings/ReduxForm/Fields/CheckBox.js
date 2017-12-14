import React from 'react'
import { CheckBoxUI } from '../../../UIComponents';
import FormInputHelperText from '../Common/FormInputHelper.js';
import isBoolean from 'lodash/isBoolean';

const InputCheckbox = ({ 
  label, 
  labelStyle,
  wrapperDivStyle, 
  input,
  meta,
  wrapperHelperStyle,
  errorSpanStyle,
  warningSpanStyle,
  ...props 
}) => {
  const handleChange = (e, checked) => {
    input.onChange(checked);
  }

  return (
    <div style={wrapperDivStyle}>
      <label style={labelStyle}>
        {label}
      </label>
      <CheckBoxUI
        {...props}
        {...input}
        onChange={handleChange}
      />
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

export default InputCheckbox;