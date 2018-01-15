// Importing necessary libs
import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import omit from 'lodash/omit';

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
} from '../../Root/SemanticUI_ReduxForm/Components';

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
  monthsOption,
  genderOptions,
  locationOptions
} from './mockData';

import {
  formStyles,
  styles,
  buttonStyles
} from './styles';

import {
  fieldStyles
} from './fieldStyles.js';

const {inputDivStyle} = fieldStyles.userName;

const App = (props) => //{
//   console.log("", inputDivStyle);
//   return (
//     <div>
//     coming
//     </div>
//   );
// }
//}
(
  <div style={formStyles.formContainerDivStyle}>
    <Form
      {...props}
    >
      <div style={fieldStyles.nameContainerDiv}>
        <div>
          <label>Name</label>
        </div>
        <div style={fieldStyles.firstField}>
          <InputText
            name="first"
            placeholder="First"
            {...styles}
            inputDivStyle={fieldStyles.firstField.inputDivStyle}
          />
        </div>
        <div style={fieldStyles.lastField}>
          <InputText
            name="last"
            placeholder="last"
            {...styles}
            inputDivStyle={fieldStyles.lastField.inputDivStyle}
          />
        </div>
      </div>
      <div style={fieldStyles.userName}>
        <InputText
          name='userName'
          label='Choose your username'
          {...styles}
          inputDivStyle={fieldStyles.userName.inputDivStyle}
        />
        <span style={fieldStyles.atgmail}>@gmail.com</span>
      </div>
      <div style={fieldStyles.password}>
        <InputPassword
          name="password"
          label="Create a password"
          {...styles}
          inputDivStyle={fieldStyles.password.inputDivStyle}
        />
      </div>
      <div style={fieldStyles.confirmPassword}>
        <InputPassword
          name="confirmPassword"
          label="Confirm your password"
          {...styles}
          inputDivStyle={fieldStyles.confirmPassword.inputDivStyle}
        />
      </div>
      <div style={fieldStyles.DOB}>
        <div>
          <label>Birthday</label>
        </div>
        <div style={fieldStyles.month}>
          <InputSelect
            name="birthdayMonth"
            options={monthsOption}
            placeholder="Month"
            {...styles}
            inputDivStyle={fieldStyles.month.inputDivStyle}
          />
        </div>
        <div style={fieldStyles.year}>
          <InputText
            name="birthdayYear"
            placeholder="Year"
            type='number'
            {...styles}
            inputDivStyle={fieldStyles.year.inputDivStyle}
          />
        </div>
        <div style={fieldStyles.day}>
          <InputText
            name="birthdayDay"
            placeholder="Day"
            type='number'
            {...styles}
            inputDivStyle={fieldStyles.day.inputDivStyle}
          />
        </div>
      </div>
      <div style={fieldStyles.gender}>
      <InputSelect
        name="gender"
        label="Gender"
        options={genderOptions}
        placeholder="I am..."
        {...styles}
        inputDivStyle={fieldStyles.gender.inputDivStyle}
      />
      </div>
      <div style={fieldStyles.mobilePhone}>
        <InputText
          name="mobilePhone"
          label="Mobile phone"
          placeholder=""
          {...styles}
          inputDivStyle={fieldStyles.mobilePhone.inputDivStyle}
        />
      </div>
      <div style={fieldStyles.email}>
        <InputText
          name="currentEmail"
          label="Your current email address"
          {...styles}
          inputDivStyle={fieldStyles.email.inputDivStyle}
          labelStyle={fieldStyles.email.labelStyle}
        />
      </div>
      {
        <div style={fieldStyles.location}>
          <div>
          <div></div>
          <InputTypeableSelect
            name="location"
            label="Location"
            options={locationOptions}
            {...styles}
            inputDivStyle={fieldStyles.location.inputDivStyle}
          />
          </div>
        </div>
      }
      <div style={fieldStyles.submitButton}>
        <CustomButton
          content="Next step"
          actionType="submit"
          buttonType={{primary: true}}
          {...buttonStyles}
        />
      </div>
    </Form>
  </div>
)

export default reduxForm({
  form: 'playground',
  fieldsValidationConfig: validationConfig,
})(App);
