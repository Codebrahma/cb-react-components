import React, {Component} from 'react';

import {
  TextField,
  CheckBoxGroup,
  RadioButtonGroup,
  Toggle,
  Slider,
  Select,
  DatePicker,
} from '../FormComponents/SemanticUI/FormComponents/ReduxForm/Components/index.js';

import { Form, FormHOC } from '../FormComponents/SemanticUI/FormComponents/ReduxForm/';

import { isRequired } from '../FormBindings/Validations/index.js';

export const countryOptions = [{
  key: 'India',
  text: 'India',
  value: 'India',
}, {
  key: 'USA',
  text: 'USA',
  value: 'USA',
}];

export const genderOptions = [{
  key: 'male',
  text: 'male',
  value: 'male',
}, {
  key: 'female',
  text: 'female',
  value: 'female',
}];

const styles = {
  wrapperDivStyle: {
    display: 'flex',
    marginTop: '10px',
    height: '100px',
    
    alignItems: 'center',
  },
  labelStyle: {
    display: 'inline-block',
    minWidth: '150px',
  },
  inputDivStyle: {
    width: '250px',
  }
};

const fieldsValidationConfig = {
  'emailAddress': {
    validations: [isRequired("Enter a valid email")],
  },
  'optionSelected': {
    validations: [(v) => ((`Invalid ${v}`))],
  },
  'checkbox': {
    validations: [(v) => ((`Invalid ${v}`))],
  },
  'switch': {
    validations: [(v) => ((`Invalid ${v}`))],
  },
  'slider': {
    validations: [(v) => ((`Invalid ${v}`))],
  },
  'chkbxgrp': {
    validations: [(v) => ((`Invalid ${JSON.stringify(v)}`))],
  },
};

class App extends Component {
  constructor(props) {
    super(props);
  }

  handleSubmit = (data) => {
    console.log(data);
  }

  render() {
    return (
      <div>
        <Form
          handleSubmit={this.handleSubmit}
          fieldsValidationConfig={fieldsValidationConfig}          
        >
          <TextField
            name="emailAddress"
            label="Email Address"
            {...styles}
          />
          <RadioButtonGroup
            label="RadioGroup"
            name="optionSelected"
            options={countryOptions}
            {...styles}
          />
          <Toggle
            name='switch'  
            label='Toggle Switch'
            {...styles}
          />
          <Select
            name='Country'  
            label='Country'
            options={countryOptions}
            {...styles}
          />

          <DatePicker
            name='dob'  
            label='Born On'
            {...styles}
          />
          <div>
            <button>
              Submit
            </button>
          </div>
        </Form>
      </div>
    )
  }
}

export default FormHOC(App);
