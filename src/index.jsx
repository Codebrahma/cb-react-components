// Application entrypoint.

// Load up the application styles
require("../styles/application.scss");

// Render the top-level React component
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { reducer as formReducer } from 'redux-form';

import App from './App.jsx';

const rootReducer = combineReducers({
  form: formReducer,
})

const store = createStore(rootReducer);

ReactDOM.render(<Provider store={store}>
    <App />
  </Provider>, document.getElementById('react-root'));
