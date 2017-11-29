import React from 'react';

import {
  Form, 
  FormHOC,
} from './FormBindings/ReduxForm';

import {
  Button,
  TextField,
  CheckBox,
  RadioButtonGroup,
  Select,
  Toggle,
  DatePicker,
} from './FormBindings/ReduxForm/Components';

import { 
  countryOptions,
  genderOptions,
} from './MockData.js';

const styles = {
  wrapperDivStyle: {
    display: 'flex',
    marginTop: '10px',
    height: '50px',
    alignItems: 'center',
  },
  labelStyle: {
    display: 'inline-block',
    minWidth: '150px',
  },
  inputDivStyle: {
    
  }
}

const style = {
  formHolderStyle: {
    margin: '40px 200px',
  }
};

const Demo = (props) => {
  const {
    formHolderStyle 
  } = style;

  const { handleSubmit, fieldsValidationConfig } = props;

  return (
    <div style={formHolderStyle}>
      <Form
        {...props}
        onSubmit={handleSubmit}
        fieldsValidationConfig={fieldsValidationConfig}
      >
        <TextField
          name="name"
          label="Name"
          {...styles}
        />
        <CheckBox
          name="isRegistered"
          label="Registered Already ?"
          {...styles}
        />
        <RadioButtonGroup
          name="gender"
          label="Gender"
          options={genderOptions}
          {...styles}
        />
        <Select
          name="country"
          label="Country"
          options={countryOptions}
          {...styles}
        />
        <Toggle
          name="Subscription"
          label="Are you subscribed ?"
          {...styles}
        />
        <DatePicker
          name="dob"
          label="Date of Birth"
          {...styles}
        />      
        <Button />
      </Form>
    </div>    
  )
}

export default FormHOC(Demo);

