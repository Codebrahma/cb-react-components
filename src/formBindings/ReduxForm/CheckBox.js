import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

import CheckBox from '../../formComponents/SemanticUI/CheckBox.js';

const styles = {
  display: 'flex',
  alignItems: 'center',
  margin: '10px 0px',
}
const InputCheckbox = (props) => {
  return (
    <Field
      {...props}
      component={CheckBox}
    />
  );
}

export default InputCheckbox;
