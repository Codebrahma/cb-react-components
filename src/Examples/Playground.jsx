import React, {Component} from 'react';

import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import {
  TextField,
  CheckBox,
  CheckBoxGroup,
  RadioButtonGroup,
  Toggle,
  Slider,
  Select,
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

export const tShirtOptions = [{
  key: 'L',
  text: 'L',
  value: 'L'
},
{
  key: 'XL',
  text: 'XL',
  value: 'XL'
},
{
  key: 'XXL',
  text: 'XXL',
  value: 'XXL'
}
]
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
          
          <Toggle
            name='switch'  
            label='Toggle Switch'
            {...styles}
          />
          <RadioButtonGroup 
            name="tshirtSize"
            label="T-shirt Size"
            options={tShirtOptions}
            {...styles}            
          />
          <Toggle 
            name="toggle"
            label="Include Special surprise?"
            {...styles}
          />
          <CheckBox 
            name="acceptTerms"
            label="I accept the terms and conditions"
            {...styles}
          />
          <Select
            name="country"
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


