import React, {Component} from 'react';

import {
  TextField,
  CheckBoxGroup,
  RadioButtonGroup,
  Toggle,
  Slider,
  Select,
  DatePicker,
} from '../FormBindings/FormsyForm/Components/';

import { Form } from '../FormBindings/FormsyForm';

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
    validations: [(v) => ((`VName ${v}`))],
  },
  'optionSelected': {
    validations: [(v) => ((`VName ${v}`))],
  },
  'checkbox': {
    validations: [(v) => ((`VName ${v}`))],
  },
  'switch': {
    validations: [(v) => ((`VName ${v}`))],
  },
  'slider': {
    validations: [(v) => ((`VName ${v}`))],
  },
  'chkbxgrp': {
    validations: [(v) => ((`VName ${JSON.stringify(v)}`))],
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
          onSubmit={this.handleSubmit}
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
          <Slider
            name="slider"
            label="slider"
            {...styles}
          />

          <CheckBoxGroup
            label='CheckBox Group'
            name='chkbxgrp'
            helperText={'Helper Text'}
            required={true}
            disabled={false}
            checkBoxOptions={
              [
                { label: 'Rails', value: 'rails', disabled: false },
                { label: 'Ruby', value: 'ruby', disabled: false },
                { label: 'Electron', value: 'electron', disabled: true },
                { label: 'React', value: 'react', disabled: false },
              ]
            }
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

export default App;
