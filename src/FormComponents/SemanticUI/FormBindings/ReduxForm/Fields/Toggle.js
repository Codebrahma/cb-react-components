import React from 'react'
import FormInputHelperText from '../Common/FormInputHelper.js';

const InputCheckbox = ({ 
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
  const handleChange = (e, { checked }) => {
    props.input.onChange(checked);
  }
  return (
    <div style={wrapperDivStyle}>
      <label style={labelStyle}>
        {label}
      </label>
      <div style={inputDivStyle}>
        <ToggleUI
          onChange={handleChange}
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
}

export default InputCheckbox;