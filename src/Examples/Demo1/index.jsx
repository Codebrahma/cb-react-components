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
} from '../../Root/BootstrapUI_ReduxForm/Components';

import Form from '../../Root/common/ReduxFormBinders/Form.js';

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
        placeholder="Text Input"
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
        placeholder="Password"
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

      
      <CustomButton
        content="Click here"
        actionType="submit"
        classType="btn btn-secondary"
        {...buttonStyles}
      />
    </Form>
  </div>
)

export default reduxForm({
  form: 'playground',
  fieldsValidationConfig: validationConfig,
})(App);
