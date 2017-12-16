import React from 'react'

import { SelectUI } from '../../../UIComponents';
import FormInputHelperText from '../Common/FormInputHelper.js';

const InputSelect = ({ 
  label, 
  labelStyle,
  wrapperDivStyle,
  inputDivStyle,
  meta,
  wrapperHelperStyle,
  errorSpanStyle,
  warningSpanStyle,  
  ...props
}) => {
  const handleChange = (e, result) => {
    if (result && result.value) {
      props.input.onChange(result.value);  
    } else {
      props.input.onChange(e)
    }
  } 

  return (
    <div style={wrapperDivStyle}>
      <label
        style={labelStyle}
      >
        {label}
      </label>
      <div style={inputDivStyle}>
        <SelectUI
          {...props}
          onChange={handleChange}
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

export default InputSelect;