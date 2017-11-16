import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

import DatePicker from '../Fields/DatePicker.js';

const InputDate = (props) => {
  return (
    <Field
      {...props}
      component={DatePicker}
    />
  );
}

export default InputDate;