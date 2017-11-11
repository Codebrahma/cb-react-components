import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';

import Button from './InputButton.js';
import InputText from './InputText.js';

const DemoForm = (props) => {
  const {
    handleSubmit,
  } = props;

  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="name"
        component={InputText}
        type="text"
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
