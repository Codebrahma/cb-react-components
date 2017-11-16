import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

import RadioButtonGroup from '../fields/RadioButtonGroup.js';

const InputRadioButtonGroup = (props) => {
  return (
    <Field
      {...props}
      component={RadioButtonGroup}
    />
  );
}

export default InputRadioButtonGroup;