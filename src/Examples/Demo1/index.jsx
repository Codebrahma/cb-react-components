// Importing necessary libs
import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

import {
  InputText,
  InputSelect,
  MultiSelect,
  InputPassword,
  InputCheckbox,
  InputGroupCheckbox,
  InputRadioButtons,
  InputSwitch,
  CustomButton,
  InputTypeableSelect
} from '../../Root/MaterialUI_ReduxForm/Components';

import Form from '../../Root/Common/ReduxFormBinders/Form.js';

import {
  validationConfig
} from './validation';

import {
  options,
  multiSelectOptions,
  typeableSelectOptions,
  checkBoxOptions,
  radioOptions,
} from './mockData';

import {
  styles,
  buttonStyles,
} from './styles';

const App = (props) => (
  <div>
    <Form
      {...props}
    >
      <InputText
        name="text"
        label="Input Text"
        {...styles}
      />
      <InputSelect
        name="select"
        label="select box"
        options={options}
        {...styles}
      />
      <MultiSelect
        name="multiselect"
        label="Multiselect Box"
        options={multiSelectOptions}
        {...styles}
      />
      <InputPassword
        name="password"
        label="Password"
        {...styles}
      />
      <InputCheckbox
        name="inputCheckbox"
        label="Input CheckBox"
        {...styles}
      />
      <InputGroupCheckbox
        name="groupCheckbox"
        options={checkBoxOptions}
        {...styles}
      />
      <InputRadioButtons
        name="inputRadioButton"
        label="RadioButtons"
        options={radioOptions}
        {...styles}
      />
      <InputSwitch
        name="inputSwitch"
        label="Input Switch"
        {...styles}
      />
      <InputTypeableSelect
        name="inputTypeableSelect"
        label="Typeable Select"
        options={typeableSelectOptions}
        {...styles}
      />
      <CustomButton
        content="Click here"
        {...buttonStyles}
      />
    </Form>
  </div>
)

export default reduxForm({
  form: 'playground',
  fieldsValidationConfig: validationConfig,
})(App);
