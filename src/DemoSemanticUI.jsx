import React from 'react';

import { Field } from 'redux-form';

import FormHOC from './FormBindings/ReduxForm/FormHOC.js';
import Form from './FormBindings/ReduxForm/Form.js';

import Button from './FormBindings/ReduxForm/Components/Button.js';
import TextField from './FormBindings/ReduxForm/Components/TextField.js';
import CheckBox from './FormBindings/ReduxForm/Components/CheckBox.js';
import RadioButtonGroup from './FormBindings/ReduxForm/Components/RadioButtonGroup.js';
import Select from './FormBindings/ReduxForm/Components/Select.js';
import Toggle from './FormBindings/ReduxForm/Components/Toggle.js';
import DatePicker from './FormBindings/ReduxForm/Components/DatePicker.js';

import styles from './FormBindings/ReduxForm/Components/styles.js';

const options = [{
  key: 'A',
  text: 'A',
  value: 'a',
}, {
  key: 'B',
  text: 'B',
  value: 'b',
}]

const style = {
  formHolderStyle: {
    margin: '40px 200px',
  }
}
const Demo = (props) => {
  const {
    formHolderStyle 
  } = style;
  return (
    <div style={formHolderStyle}>
      <Form
        onSubmit={props.handleSubmit}
      >
        <TextField
          name="name"
          label="Name"
          {...styles}
        />
        <CheckBox
          name="isHuman"
          label="Are you a Human ?"
          {...styles}
        />
        <RadioButtonGroup
          name="category"
          label="Category"
          options={options}
          {...styles}
        />
        <Select
          name="selectValue"
          label="Select"
          options={options}
          {...styles}
        />
        <Toggle
          name="toggle"
          label="Are you male ?"
          {...styles}
        />
        
        <Button />
      </Form>
    </div>    
  )
}

export default FormHOC(Demo);