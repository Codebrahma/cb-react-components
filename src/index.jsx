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

const rootReducer = combineReducers({
  form: formReducer,
})

const theme = createMuiTheme();

const store = createStore(rootReducer, {}, applyMiddleware(logger));

ReactDOM.render(<Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  </Provider>, document.getElementById('react-root'));

