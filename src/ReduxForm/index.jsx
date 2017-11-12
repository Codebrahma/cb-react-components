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
        component={InputText}
      />
      <Field
        name="category.first"
        label="category"
        component={InputCheckbox}
      />
      <Field
        name="category.second"
        label="category"
        component={InputCheckbox}
      />
      <Field
        name="location"
        component={InputSelect}
        options={selectOptions}
      />
      <Field
        name="date"
        component={InputDateRange}
      />
      <Button
        label="submit"
      />
    </form>
  )
}

export default reduxForm({
  form: 'demo',
})(DemoForm)
