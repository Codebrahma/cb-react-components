import React from 'react';
import map from 'lodash/map';
import { SelectField, Option } from 'react-mdl-extra';

const SelectUI = ({ options, input, placeholder, ...props}) => (
  <SelectField
    label={placeholder} 
    {...input}
    {...props}
  >
    {
      map(options, ({ key, value, text }) => {
        return (
          <Option
            key={key}
            value={value}
          >
            {text}
          </Option>
        )
      })
    }
  </SelectField>
);

export default SelectUI;