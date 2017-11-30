import React from 'react';

import {
  Form,
  FormHOC
} from '../../FormBindings/ReduxForm';

import {
  Button,
  CheckBox,
  DatePicker,
  RadioButtonGroup,
  Select,
  TextField,
  Toggle
} from '../../FormBindings/ReduxForm/Components';

import { 
  fieldsValidationConfig
} from './validations';

const MaterialReduxForm = ({ onSubmit }) => {
  return (
    <Form
      onSubmit={onSubmit}
      fieldsValidationConfig={fieldsValidationConfig}
    >
      <TextField
        name="username"
        label="UserName"
      />
      <TextField
        name="email"
        label="Email"
      />
      <TextField
        name="age"
        label="Age"
      />
      <DatePicker
        name="dob"
        label="Date of Birth"
      />
    </Form>
  )
}
  


export default FormHOC(MaterialReduxForm);