A set of Universal React Components that can be plug and played in any project.

Inspiration:

A common API for creation, validation and error handling across any form library and across any material library
Why to create a new component for every project and to bind with a form library every single time.
Decide which form library to use and then just mention which UI library to use. Everything else will be provided by this library.

You can build 70% of your forms with this and style it with custom styling.

Currently it supports

Material UI
1. Material UI
2. Semantic UI
3. Material Lite UI

Form Libraries
1. Formsy
2. Redux Form
3. Formik

So how does this works ?

```javascript
import React, {Component} from 'react';
import { Form } from 'formsy-react';

// Importing the components from formsy library
// If you feel formsy doesn't fit your project then use '/ReduxForm/Components/.....'

import TextField from './FormBindings/FormsyForm/Components/TextField.js';
import CheckBox from './FormBindings/FormsyForm/Components/CheckBox.js';
import RadioGroup from './FormBindings/FormsyForm/Components/RadioGroup.js';
import Toggle from './FormBindings/FormsyForm/Components/Toggle.js';

import Slider from './FormBindings/FormsyForm/Components/Slider';
import { countryOptions } from './MockData.js';

// Inline styles to overwrite
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
          // You just need to declare components with name and label.
          // If you have any style just overwrite it here
          // Add any prop which has to be passed on to the respective library
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
```

How validations work ?

```javascript
const fieldsValidationConfig = {
  'name': {
    validations: [isRequired('Custom is Required'), minLength('Custom min length')(3)],
  },
  'gender': {
    validations: [(v) =>((`VName ${v}`))],
    warnings: [(v) => ((`WName ${v}`))],
  },
  'dob': {
    validations: [(v) =>((`VName ${v}`))],
    warnings: [(v) => ((`WName ${v}`))],
  },
  'Subscription': {
    validations: [(v) =>((`VName ${v}`))],
    warnings: [(v) => ((`WName ${v}`))],
  },
  'country': {
    validations: [(v) =>((`VName ${v}`))],
    warnings: [(v) => ((`WName ${v}`))],
  },
  'isRegistered': {
    validations: [(v) =>((`VName ${v}`))],
    warnings: [(v) => ((`WName ${v}`))],
  },
};


```
