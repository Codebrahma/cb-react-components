import React from 'react';

import { reduxForm, Field } from 'redux-form';

import Button from './formBindings/ReduxForm/Button.js';
import TextField from './formBindings/ReduxForm/TextField.js';
import CheckBox from './formBindings/ReduxForm/CheckBox.js';

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
      <Button />
    </form>  
  )
}

export default reduxForm({
  form: 'simple'
})(Demo)
