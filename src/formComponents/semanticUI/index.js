import React from 'react';
import TextField from './TextField.js';
import CheckBox from './CheckBox' 

const Form = () => (
  <div>
    <TextField
      label="Name"
      placeholder="name"
    />
    <CheckBox
      label="checkbox"
      placeholder="checkbox"
    />
  </div>
)

export default Form;