import React, {Component} from 'react';
import { Form } from 'formsy-react';

import TextField from './formComponents/MaterialUI/Formsy/TextField.js';
import CheckBox from './formComponents/MaterialUI/Formsy/CheckBox.js';
import RadioGroup from './formComponents/MaterialUI/Formsy/RadioGroup.js';
import Toggle from './formComponents/MaterialUI/Formsy/Toggle.js';

import MuiTextField from './formComponents/MaterialUI/TextField';
import MuiRadio from './formComponents/MaterialUI/Radio';
import MuiRadioGroup from './formComponents/MaterialUI/RadioGroup';
import MuiSelect from './formComponents/MaterialUI/Select';
import MuiToggle from './formComponents/MaterialUI/Toggle';

import Slider from './formComponents/MaterialUI/Formsy/Slider';

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
              required={false}
              errorMessage='asf'
              helperText='Help'
              disabled={false}
            />
          </div>

          <div style={{ paddingBottom: '40px' }}>
            <RadioGroup
              label="RadioGroup"
              name="optionSelected"
              value={'flux'}
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

          <div style={{ paddingBottom: '40px' }}>
            <Toggle
              label='Toggle Switch'
              name='Switch'
              disabled={false}
              value={false}
            />
          </div>

          <Slider
            name='Slider'
            sliderStyle={{
              width: '200px',
              height: '200px'
            }}
            axis='x'
            sliderColors={{
              handleFiller: 'yellow',
              handleBorder: 'green',
              selectedPortion: 'blue',
            }}
            value={0}
            label={'Slider'}
            showTooltip={true}
          />

          <div>
            <button>
              Submit
            </button>
          </div>
        </Form>

      {/*<MuiSelect
            selectOptions={
              [
                { label: 'React', value: 'react', disabled: false },
                { label: 'Redux', value: 'redux', disabled: false },
                { label: 'Flux', value: 'flux', disabled: false },
              ]
            }
            value={'react'}
            native
          />

        <MuiToggle
          label='Toggle Switch'
          name='Name'
          value='Value'
          checked={true}
          disabled={false}
          onChange={() => console.log('Toggled')}
        />
      */}
      </div>
    )
  }
}

export default App;