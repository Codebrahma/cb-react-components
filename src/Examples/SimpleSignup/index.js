// Importing necessary libs
import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

import {
  InputText,
  InputPassword,
} from '../../Root/SemanticUI_ReduxForm/Components';

import {
  InputDateTimePicker
} from '../../Root/AntDesignUI_ReduxForm/Components';
import Form from '../../Root/Common/ReduxFormBinders/Form.js';

import {
  validationConfig
} from './validation';

import {
  styles,
  formLayoutStyle,
  customizedDateStyle,
} from './styles';

const App = (props) => (
  <div style={formLayoutStyle}>
    <Form
      {...props}
      styles={styles}
      validations={validationConfig}
    >
      <InputText
        name="name"
        label="Name"
      />
      <InputText
        name="email"
        label="Email"
      />
      <InputPassword
        name="password"
        label="Password"
      />
      <InputDateTimePicker
        name="dob"
        label="Date Of Birth"
        style={customizedDateStyle}
      />
      <InputSelect
        name="gender"
        labe="Gender"
      />
    </Form>
  </div>
)

export default reduxForm({
})(App);
