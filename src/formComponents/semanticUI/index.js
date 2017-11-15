import React from 'react';
import TextField from './TextField.js';
import CheckBox from './CheckBox.js';
import Select from './Select.js'; 
import RadioButtonGroup from './RadioButtonGroup.js';
import Toggle from './Toggle.js';
import DatePicker from './DatePicker.js';

const options = [{
  value: 'optionA',
  key: 'optionA',
  text: 'optionA',
}, {
  value: 'optionB',
  key: 'optionB',
  text: 'optionB',
}];

const Form = () => (
  <div>
    <TextField
      label="Name"
      placeholder="name"
    />
    <CheckBox
      label="Checkbox"
      placeholder="checkbox"
    />
    <Select
      label="Select"
      options={options}
    />
    <RadioButtonGroup
      label="radio"
      options={options}
    />
    <DatePicker
    />
    <Toggle
    />
  </div>
)

export default Form;