import React, {Component} from 'react';

import {
  TextField,
  CheckBoxGroup,
  RadioButtonGroup,
  Toggle,
  Slider,
  Select,
} from '../../FormComponents/SemanticUI/FormBindings/ReduxForm';

import { 
  Form, 
  FormHOC 
} from '../../FormComponents/SemanticUI/FormBindings/ReduxForm/api';

import { 
  styles
} from './styles';
import {
  genderOptions,
  countryOptions,
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
        <Form
          handleSubmit={this.handleSubmit}
        >
          <TextField
            name="name"
            label="Name"
          />
          <TextField
            name="email"
            label="email"
          />
          <TextField
            name="age"
            label="Age"
          />
          <RadioButtonGroup
            label="Gender"
            name="gender"
            options={genderOptions}
          />
          <Toggle
            name='isMember'  
            label='Already a member ?'
          />
          <Select
            name="country"
            label="country"
            options={countryOptions}
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
