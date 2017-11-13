import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';

import 'react-dates/lib/css/_datepicker.css';
import Button from './InputButton.js';
import InputText from './InputText.js';
import InputCheckbox from './InputCheckbox.js';
import InputSelect from './InputSelect.js';
import InputDateRange from './InputDateRange.js';

import 'react-dates/lib/css/_datepicker.css';

import formValidation from './formValidation.js';

const selectOptions = [{
  label: 'US',
  value: 'us',
}, {
  label: 'UK',
  value: 'UK',
}];

const DemoForm = (props) => {
  const {
    handleSubmit,
  } = props;

  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="name"
        label="Name"
        component={InputText}
      />
      <Field
        name="email"
        label="Email"
        component={InputText}
      />  
      <Field
        name="age"
        label="Age"
        component={InputText}
      />
      <Field
        name="category"
        label="Category"
        component={InputCheckbox}
      />
      <Field
        name="location"
        label="Location"
        component={InputSelect}
        options={selectOptions}
      />
      <Field
        name="dob"
        label="Date Of Birth"
        component={InputDateRange}
      />
      <Button
        label="Submit"
      />
    </form>
  )
}

export default reduxForm({
  form: 'demo',
  validate: formValidation,
})(DemoForm)
