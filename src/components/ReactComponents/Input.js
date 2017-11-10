import React from 'react';
import Input from '../StyledComponents/Input.js';
import Label from '../StyledComponents/Label.js';

const InputTextWithLabel = ({ label, labelStyle, inputStyle, type = "text", ...props}) => (
  <div>
    {
      label && (
        <Label
          {...labelStyle}
        >
          {label}
        </Label>
      )
    }
    <Input
      type={type}
      {...props}
      {...inputStyle} 
    />
  </div>
)

export default InputTextWithLabel;
