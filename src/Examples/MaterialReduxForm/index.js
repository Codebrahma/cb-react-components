import React from 'react';

import pick from 'lodash/omit';

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

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(values) {
    console.log('values', values);
  }
  render() {
    return (
      <Form
        {...this.props}
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
}

export default FormHOC(MaterialReduxForm);