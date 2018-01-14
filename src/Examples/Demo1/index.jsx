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
} from './styles';

const App = (props) => (
  <div>
    <Form
      {...props}
      styles={styles}
      fieldsValidationConfig={validationConfig}
    >
      <InputText
        name="text"
        label="Input Text"
      />
      <InputSelect
        name="select"
        label="select box"
        options={options}
      />
      <MultiSelect
        name="multiselect"
        label="Multiselect Box"
        options={multiSelectOptions}
      />
      <InputPassword
        name="password"
        label="Password"
      />
      <InputCheckbox
        name="inputCheckbox"
        label="Input CheckBox"
      />
      <InputGroupCheckbox
        name="groupCheckbox"
        options={checkBoxOptions}
      />
      <InputRadioButtons
        name="inputRadioButton"
        label="RadioButtons"
        options={radioOptions}
      />
      <InputSwitch
        name="inputSwitch"
        label="Input Switch"
      />
      <InputTypeableSelect
        name="inputTypeableSelect"
        label="Typeable Select"
        options={typeableSelectOptions}
      />
      <button>
        Submit
      </button>
    </Form>
  </div>
)

export default reduxForm({
  form: 'playground',
})(App);
