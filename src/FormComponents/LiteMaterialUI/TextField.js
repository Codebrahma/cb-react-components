import React from 'react';

import { Textfield } from 'react-mdl';

const TextFieldUI = ({ 
  placeholder, 
  input,
  ...props }) => (
  <Textfield
    label="text"
    placeholder={placeholder}
    style={{width: '200px', padding: '0px'}}
    {...input} 
  />
);

export default TextFieldUI;