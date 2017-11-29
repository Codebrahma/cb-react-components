// Application entrypoint.

// Load up the application styles
require("../styles/application.scss");

import 'semantic-ui-css/semantic.min.css';
// Render the top-level React component
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import { reducer as formReducer } from 'redux-form';

import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';

import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import 'react-dates/initialize';

import App from './App.jsx';

import {
  isRequired,
  isNumber,
  isEmail,
  isAlphaNumeric, 
  isMobileNumber, 
  maxLength,
  minLength,
  minValue,
} from './FormBindings/Validations/index.jsx';

const rootReducer = combineReducers({
  form: formReducer,
})

const theme = createMuiTheme();

const store = createStore(rootReducer, {}, applyMiddleware(logger));

const onSubmit = (values) => {
  console.log('Form Values', values);
};

const validate = values => {
  const errors = {}
  if (!values.name) {
    errors.name = 'Required Name'
  } else if (values.name.length > 15) {
    errors.name = 'Must be 15 characters or less'
  }
  return errors
};

{/*
  Structure of Validation Object for Field Level Validation

  {
    `elementName`: {
      validations: [validationFunctions],
      warnings: [warningFunctions],
    },
    ...,
    ,..
  }

*/}

const fieldsValidationConfig = {
  'name': {
    validations: [(v) => ((`VName ${v}`))],
    warnings: [(v) =>((`VName ${v}`))]
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

ReactDOM.render(<Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <App
        onSubmit={onSubmit}
        name='DemoForm'
        // formValidator={validate}
        // fieldsValidationConfig={fieldsValidationConfig}
      />
    </MuiThemeProvider>
  </Provider>, document.getElementById('react-root'));

