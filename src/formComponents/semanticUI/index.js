import React from 'react';
import TextField from './TextField.js';
import CheckBox from './CheckBox.js';
import Select from './Select.js'; 

const options = [{
  value: 'optionA',
  key: 'optionA',
  text: 'optionA',
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
  </div>
)

export default Form;