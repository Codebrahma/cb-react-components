import React, { Component } from 'react'
import { Radio } from 'semantic-ui-react'

import map from 'lodash/map';

const style = {
  radioStyle: {
    marginRight: '25px', 
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
    <div style={inputDivStyle}>
    {
      map(options, ({ key, text, value }) => {
        return (
          <Radio
            {...input}
            key={key}
            label={text}
            name={text}
            value={value}
            checked={input.value === value}
            onChange={handleChange}
            style={style.radioStyle}
          />
        )
      })
    }
    </div>
  )
}

export default RadioButtonGroupUI;