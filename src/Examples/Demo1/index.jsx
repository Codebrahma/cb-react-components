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
  InputTypeableSelect,
  CustomButton
} from '../../Root/AntDesignUI_ReduxForm/Components';

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
  buttonStyles
} from './styles';

const App = (props) => (
  <div>
    <Form
      {...props}
      styles={styles}
      validations={validationConfig}
    >
      <InputText
        name="text"
        label="Input Text"
      />
      <InputSelect
        name="select"
        label="select box"
        options={options}
        style={{width: '200px'}}
      />
      <MultiSelect
        name="multiselect"
        label="Multiselect Box"
        options={multiSelectOptions}
        style={{width: '200px'}}
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
        style={{width: '200px'}}
      />
      <CustomButton
        content="Click here"
        actionType="submit"
        {...buttonStyles}
      />
    </Form>
  </div>
)

export default reduxForm({
})(App);
