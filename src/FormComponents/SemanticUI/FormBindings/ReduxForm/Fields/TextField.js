import React from 'react'

import { TextFieldUI } from '../../../UIComponents';
import FormInputHelperText from '../Common/FormInputHelper.js';

const InputExampleInput = ({ 
  placeholder, 
  label, 
  labelStyle,
  wrapperDivStyle,
  inputDivStyle,
  wrapperHelperStyle,
  meta,
  errorSpanStyle,
  warningSpanStyle,
  ...props }) => (
  <div style={wrapperDivStyle}>
    <label style={labelStyle}>
      {label}
    </label>
    <div style={inputDivStyle}>
      <TextFieldUI
        placeholder={placeholder}
        {...props}
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

export default InputExampleInput