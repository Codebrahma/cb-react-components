import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

import CheckBox from '../Fields/CheckBox.js';

const InputCheckbox = (props) => {
  return (
    <Field
      {...props}
      component={CheckBox}
    />
  );
}

export default InputCheckbox;
