import React, {Component} from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import {
  TextField,
  RadioButtonGroup,
  Toggle,
  CheckBox,
  Select,
} from '../../FormComponents/MaterialUI/FormBindings/ReduxForm';

import { 
  styles
} from './styles';
import {
  genderOptions,
  countryOptions,
  tShirtOptions
} from './mock';

class App extends Component {
  constructor(props) {
    super(props);
  }

  handleSubmit = (data) => {
    console.log(data);
  }

  render() {
    return (
      <div style={styles.formWrapperStyle}> 
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
