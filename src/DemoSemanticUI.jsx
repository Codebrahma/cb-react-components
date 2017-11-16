import React from 'react';

import { Field } from 'redux-form';

import FormHOC from './formBindings/ReduxForm/FormHOC.js';
import Form from './formBindings/ReduxForm/Form.js';

import Button from './formBindings/ReduxForm/components/Button.js';
import TextField from './formBindings/ReduxForm/components/TextField.js';
import CheckBox from './formBindings/ReduxForm/components/CheckBox.js';
import RadioButtonGroup from './formBindings/ReduxForm/components/RadioButtonGroup.js';
import Select from './formBindings/ReduxForm/components/Select.js';
import Toggle from './formBindings/ReduxForm/components/Toggle.js';
import DatePicker from './formBindings/ReduxForm/components/DatePicker.js';

import styles from './formBindings/ReduxForm/components/styles.js';

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
        <DatePicker
          name="date"
          label="Date"
          {...styles}
        />
        <Button />
      </Form>
    </div>    
  )
}

export default FormHOC(Demo);