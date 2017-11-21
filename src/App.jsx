import React, {Component} from 'react';
import { Form } from 'formsy-react';

import TextField from './FormBindings/FormsyForm/Components/TextField.js';
import CheckBox from './FormBindings/FormsyForm/Components/CheckBox.js';
import RadioGroup from './FormBindings/FormsyForm/Components/RadioGroup.js';
import Toggle from './FormBindings/FormsyForm/Components/Toggle.js';

import Slider from './FormBindings/FormsyForm/Components/Slider';

const options = [
  { label: 'React', value: 'react', disabled: false },
  { label: 'Redux', value: 'redux', disabled: false },
  { label: 'Flux', value: 'flux', disabled: false },
]

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
          <TextField
            name="emailAddress"
            label="Email Address"
          />
          <RadioGroup
            label="RadioGroup"
            name="optionSelected"
            options={options}
          />
          <CheckBox
            name="Checkbox"
            label="CBox Label"
            value={false}
          />
          <Toggle
            name='Switch'  
            label='Toggle Switch'
          />
          <Slider
            name="slider"
            label="slider"
            showToolTip={true}
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