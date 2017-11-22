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

import App from './Demo.jsx';

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
  // if (!values.email) {
  //   errors.email = 'Required'
  // } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
  //   errors.email = 'Invalid email address'
  // }
  // if (!values.age) {
  //   errors.age = 'Required'
  // } else if (isNaN(Number(values.age))) {
  //   errors.age = 'Must be a number'
  // } else if (Number(values.age) < 18) {
  //   errors.age = 'Sorry, you must be at least 18 years old'
  // }
  return errors
}

ReactDOM.render(<Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <App
        onSubmit={onSubmit}
        name='DemoForm'
        validateFunction={validate}
        validationObject={
          {
            'name': {
              validations: [(v) => {console.log('VName', v)}],
              warnings: [(v) => { console.log('WName', v) }],
            }
          }
        }
      />
    </MuiThemeProvider>
  </Provider>, document.getElementById('react-root'));

