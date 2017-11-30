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

class MaterialReduxForm extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <Form
        {...this.props}
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
        <button
          type="submit"
        >
          Submit
        </button>
      </Form>
    )
  }
}

export default FormHOC(MaterialReduxForm);