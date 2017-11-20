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

import { 
  countryOptions,
  genderOptions,
} from './MockData.js';

import styles from './FormBindings/ReduxForm/Components/styles.js';

const style = {
  formHolderStyle: {
    margin: '40px 200px',
  }
};

const handleReduxFormValidation = (validation) => (values) => {
  console.log('values', values);
  const error = {};
  Object
    .entries(validation)
    .forEach((entry) => {
      if (typeof entry[0] === 'string' && typeof entry[1] === 'function') {
        error[entry[0]] = entry[1](values[entry[0]], values);
      }
    });
    console.log('error ', error);
  return error;  
}

const validate = {
  name: (value, values) => {
    if (value.length < 3) {
      return 'Length < 3';
    } else if (value.length > 8) {
      return 'Length > 8';
    }
  },
  isRegistered: (value, values) => {

  },
  gender: (value, values) => {

  },
  country: (value, values) => {

  },
  subscription: (value, values) => {

  },
  dob: (value, values) => {

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
        validate={handleReduxFormValidation(validate)}
        a="a"
      >
        <TextField
          name="name"
          label="Name"
          {...styles}
        />
        <CheckBox
          name="isRegistered"
          label="Registered Already ?"
          {...styles}
        />
        <RadioButtonGroup
          name="gender"
          label="Gender"
          options={genderOptions}
          {...styles}
        />
        <Select
          name="country"
          label="Country"
          options={countryOptions}
          {...styles}
        />
        <Toggle
          name="subscription"
          label="Are you subscribed ?"
          {...styles}
        />
        <DatePicker
          name="dob"
          label="Date of Birth"
          {...styles}
        />      
        <Button />
      </Form>
    </div>    
  )
}

export default FormHOC(Demo);