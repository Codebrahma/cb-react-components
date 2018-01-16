// Application entrypoint.
import 'semantic-ui-css/semantic.min.css';
// Render the top-level React component
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import { reducer as formReducer } from 'redux-form';

// Required for React MDL
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';

// Required for Material UI
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';

// Required for DatePicker
// import 'react-dates/initialize';

// Root file
import App from './Examples/index.js';

// Required for Redux Forms
const rootReducer = combineReducers({
  form: formReducer,
})
const store = createStore(rootReducer, {}, applyMiddleware(logger));

// Required for Material UI
const theme = createMuiTheme();

ReactDOM.render(<Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <App
      />
    </MuiThemeProvider>
  </Provider>, document.getElementById('react-root'));
