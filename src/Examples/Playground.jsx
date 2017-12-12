import React, {Component} from 'react';

import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import {
  TextField,
  CheckBoxGroup,
  RadioButtonGroup,
  Toggle,
  Slider,
  Select,
  DatePicker,
} from '../FormComponents/MaterialUI/Formbindings/ReduxForm';

import { 
  Form,
  FormHOC, 
} from '../FormComponents/MaterialUI';

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

class App extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div>
        <form
          onSubmit={this.props.handleSubmit}
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

          <div>
            <button>
              Submit
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default reduxForm({
  form: 'demo',
})(App);


