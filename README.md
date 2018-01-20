A set of Universal React Components that can be plug and played in any project.

## Inspiration:

A common API for 
1. creation 
2. validation
3. error handling across any form library and across any material library

Why to create a new component for every project and to bind with a form library every single time.
Decide which form library to use and then just mention which UI library to use. Everything else will be provided by this library.

You can build 70% of your forms with this and style it with custom styling.

## How to customize any components ?

1. Name, label, options (in case of select / checkbox) should be provided by default.
2. By default it will have out of box styling.
3. Want to overwrite ? Simply pass the props which you would have passed to the actual components.

Currently it supports

## UI libraries
1. Material UI
2. Semantic UI
3. AntDesign UI
4. Bootstrap UI
5. BluePrint UI


Form Libraries
1. Redux Form

## So how does this works ?

```javascript
// Importing necessary libs
import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

// Import components from required library
import {
  InputText,
  InputPassword,
  InputSelect,
  InputSwitch
} from '../../Root/SemanticUI_ReduxForm/Components';

// Importing additional components from other UI lib
import {
  InputDateTimePicker,
} from '../../Root/AntDesignUI_ReduxForm/Components';

// Importing additional components from other UI lib
import {
  InputRangeSlider,
} from '../../Root/RangeSlider_ReduxForm/Components';

import {
  genderOptions
} from './mockData';

import Form from '../../Root/Common/ReduxFormBinders/Form.js';

// Validations Passed
import {
  validationConfig
} from './validation';

// Basic styles and overwritting styles
import {
  styles,
  formLayoutStyle,
  customizedDateStyle,
  subsctiptionStyles,
} from './styles';

const App = (props) => (
  <div style={formLayoutStyle}>
    <Form
      {...props}
      styles={styles}
      validations={validationConfig}
    >
      <InputText
        name="name"
        label="Name"
      />
      <InputText
        name="email"
        label="Email"
      />
      <InputPassword
        name="password"
        label="Password"
      />
      <InputDateTimePicker
        name="dob"
        label="Date Of Birth"
        style={customizedDateStyle}
      />
      <InputSelect
        name="gender"
        label="Gender"
        options={genderOptions}
      />
      <InputSwitch
        name="subscription"
        label="Subscription"
        style={subsctiptionStyles}
      />
      <InputRangeSlider
        name="size"
        label="Size Range"
        min={10}
        max={20}
      />
      <button>Submit</button>
    </Form>
  </div>
)

export default reduxForm({})(App);

```

## How validations work ?

```javascript
import isRequired from '../../Root/Common/Validations/isRequired';
import minLength from '../../Root/Common/Validations/minLength';
import maxLength from '../../Root/Common/Validations/maxLength';
import isEmail from '../../Root/Common/Validations/isEmail';

export const validationConfig = {
  name: {
    validations: [isRequired('Text input is required'), minLength(5), maxLength(15)],
  },
  email: {
    validations: [isRequired('Email is required'), isEmail()]
  },
  password: {
    validations: [isRequired('Password is required', minLength(6))]
  },
  dob: {
    validations: [isRequired('Date of Birth is Required')]
  },
  gender: {
    validations: [isRequired('Password is required')]
  },
  size: {
    validations: [isRequired('Size Range should be selected')]
  }

};
```
For more Try out SimpleSignup folder inside Examples.
