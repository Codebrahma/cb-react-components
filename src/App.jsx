import React, {Component} from 'react';
import { Form } from 'formsy-react';

import TextField from './formComponents/MaterialUI/Formsy/TextField.js';
import CheckBox from './formComponents/MaterialUI/Formsy/CheckBox.js';
import RadioGroup from './formComponents/MaterialUI/Formsy/RadioGroup.js';

import MuiTextField from './formComponents/MaterialUI/TextField';
import MuiRadio from './formComponents/MaterialUI/Radio';
import MuiRadioGroup from './formComponents/MaterialUI/RadioGroup';

class App extends Component {
  constructor(props) {
    super(props);

  }

  onSubmit = (data) => {
    console.log(data);
  }

  render() {
    return (
      <div>
        <Form
        onSubmit={this.onSubmit}
        >
          <div style={{paddingBottom: '40px'}}>
            <TextField
              name="emailAddress"
              validations="isEmail"
              validationError="This is not a valid email"
              label="Email Address"
              helperText="Helper Text: Field to enter Email"
              required
              errorMessage='asf'
              helperText='Help'
              disabled={false}
            />
          </div>

          <div style={{ paddingBottom: '40px' }}>
            <RadioGroup
              label="RadioGroup"
              name="optionSelected"
              error={false}
              errorMessage='asf'
              helperText='Help'
              required
              radioOptions={[
                { label: 'React', value: 'react', disabled: false },
                { label: 'Redux', value: 'redux', disabled: false },
                { label: 'Flux', value: 'flux', disabled: false },
              ]}
            />
          </div>

          <div style={{ paddingBottom: '40px' }}>
            <CheckBox
              name="Checkbox"
              label="CBox Label"
              value={false}
            />
          </div>

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