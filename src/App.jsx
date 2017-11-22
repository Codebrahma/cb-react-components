import React, {Component} from 'react';
import { Form } from 'formsy-react';

import TextField from './FormBindings/FormsyForm/Components/TextField.js';
import CheckBox from './FormBindings/FormsyForm/Components/CheckBox.js';
import RadioGroup from './FormBindings/FormsyForm/Components/RadioGroup.js';
import Toggle from './FormBindings/FormsyForm/Components/Toggle.js';

import Slider from './FormBindings/FormsyForm/Components/Slider';
import { countryOptions } from './MockData.js';

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
            {...styles}
          />
          <RadioGroup
            label="RadioGroup"
            name="optionSelected"
            options={countryOptions}
            {...styles}
          />
          <CheckBox
            name="Checkbox"
            label="CBox Label"
            {...styles}
          />
          <Toggle
            name='Switch'  
            label='Toggle Switch'
            {...styles}
          />
          <Slider
            name="slider"
            label="slider"
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

export default App;