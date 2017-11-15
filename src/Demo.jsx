import React from 'react';

import { reduxForm, Field } from 'redux-form';

import Button from './formBindings/ReduxForm/Button.js';
import TextField from './formBindings/ReduxForm/TextField.js';
import CheckBox from './formBindings/ReduxForm/CheckBox.js';
import RadioButtonGroup from './formBindings/ReduxForm/RadioButtonGroup.js';
import Select from './formBindings/ReduxForm/Select.js';
import Toggle from './formBindings/ReduxForm/Toggle.js';

const options = [{
  key: 'A',
  text: 'A',
  value: 'a',
}, {
  key: 'B',
  text: 'B',
  value: 'b',
}]

const Demo = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <TextField
        name="name"
        label="Name"
      />
      <CheckBox
        name="isHuman"
        label="Are you a Human ?"
      />
      <RadioButtonGroup
        name="category"
        label="Category"
        options={options}
      />
      <Select
        name="selectValue"
        label="Select"
        options={options}
      />
      <Toggle
        name="toggle"
        label="Are you male ?"
      />
      <Button />
    </form>  
  )
}

export default reduxForm({
  form: 'simple'
})(Demo)
