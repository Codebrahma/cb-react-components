import React from 'react'
import { CheckBoxUI } from '../Config/UIPicker.js';
import FormInputHelperText from '../Components/Common/FormInputHelper.js';

const InputCheckbox = ({ 
  label, 
  labelStyle,
  wrapperDivStyle, 
  meta,
  wrapperHelperStyle,
  errorSpanStyle,
  warningSpanStyle,
  ...props 
}) => {
  const handleChange = (e, result) => {
    if (result && result.checked) {
      props.input.onChange(result.checked);  
    } else {
      props.input.onChange(e)
    }
  }

  return (
    <div style={wrapperDivStyle}>
      <label style={labelStyle}>
        {label}
      </label>
      <CheckBoxUI
        {...props}
        handleChange={handleChange}
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