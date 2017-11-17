import React from 'react';
import map from 'lodash/map';
import { Radio, RadioGroup } from 'react-mdl';

const style = {
  wrapperDivStyle: {
    width: '100%',
  },
  radioStyle: {
    marginRight: '15px', 
  },
  wrapperSpanStyle: {
    marginRight: '10px'
  }
}

const RadioButtonGroupUI = ({ 
  options, 
  input, 
  inputDivStyle, 
  handleChange, 
  ...props 
}) => {
  return (
    <div style={style.wrapperDivStyle}>
      <RadioGroup

        style={style.radioStyle}
      >
        {
          map(options, ({ key, text, value }) => {
            return (
              <span style={style.wrapperSpanStyle}>
                <Radio
                  {...input}
                  key={key}
                  label={text}
                  name={text}
                  value={value}
                  checked={input.value === value}
                  onChange={handleChange}
                  style={style.radioStyle}
                >
                  {text}
                </Radio>
              </span>
            )
          })
        }
      </RadioGroup>
    </div>
  )
}

export default RadioButtonGroupUI;