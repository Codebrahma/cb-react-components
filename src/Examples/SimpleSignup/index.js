// Importing necessary libs
import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

import {
  InputText,
  InputPassword,
  InputSelect,
  InputSwitch
} from '../../Root/SemanticUI_ReduxForm/Components';

import {
  InputDateTimePicker,
} from '../../Root/AntDesignUI_ReduxForm/Components';

import {
  InputRangeSlider,
} from '../../Root/RangeSlider_ReduxForm/Components';

import {
  genderOptions
} from './mockData';

import Form from '../../Root/Common/ReduxFormBinders/Form.js';

import {
  validationConfig
} from './validation';

import {
  styles,
  formLayoutStyle,
  customizedDateStyle,
  subsctiptionStyles,
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
        label="Gender"
        options={genderOptions}
      />
      <InputSwitch
        name="subscription"
        label="Subscription"
        style={subsctiptionStyles}
      />
      <InputRangeSlider
        name="size"
        label="Size Range"
        min={10}
        max={20}
      />
      <button>Submit</button>
    </Form>
  </div>
)

export default reduxForm({})(App);
