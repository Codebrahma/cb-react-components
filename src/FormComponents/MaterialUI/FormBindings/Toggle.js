import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

import Toggle from '../Fields/Toggle.js';

const InputToggle = (props) => {
  return (
    <Field
      {...props}
      component={Toggle}
    />
  );
}

export default InputToggle;