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

import { reduxForm } from 'redux-form';

const style = {
  formHolderStyle: {
    margin: '40px 200px',
  }
};

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
          name="Subscription"
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

export default reduxForm({
  form: 'fieldLevelValidation',
})(Demo)
