import React from 'react';

import {
  Form,
  FormHOC
} from '../../FormBindings/ReduxForm';

import {
  Button,
  CheckBox,
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
      fieldsValidationConfig={fieldsValidationConfig}
    >
      <TextField
        name="username"
        fieldsValidationConfig={fieldsValidationConfig}
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
      <button
        type="submit"
      >
        Submit
      </button>
    </Form>
  )
}
  

export default FormHOC(MaterialReduxForm);