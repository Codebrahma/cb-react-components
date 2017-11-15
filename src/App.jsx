import React, {Component} from 'react';
import { Form } from 'formsy-react';
import TextField from './formComponents/MaterialUI/Formsy/TextField.js';
import Checkbox from './formComponents/MaterialUI/Formsy/CheckBox.js';
import RadioButtonGroup from './formComponents/MaterialUI/Formsy/RadioButtonGroup.js';

class App extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <Form
        onSubmit={this.onSubmit}
      >
        <TextField 
          name="emailAddress"
          validations="isEmail" 
          validationError="This is not a valid email"
          requiredError='Field Required Custom Message'
          required
          label="Email Address"
        />
        <Checkbox
          name="checked"
          label="Cbox Label"
        />
        <RadioButtonGroup
          name="optionSelected"
          radioOptions={[
            { name: 'React', value: 'react', disabled: false },
            { name: 'Redux', value: 'redux', disabled: false },
            { name: 'Flux', value: 'flux', disabled: true },
          ]}
        />
        <button>
          Submit
        </button>
      </Form>
    )
  }
}

export default App;