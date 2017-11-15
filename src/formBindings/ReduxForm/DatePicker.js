import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

import DatePicker from '../../formComponents/SemanticUI/DatePicker.js';

const styles = {
  display: 'flex',
  alignItems: 'center',
  margin: '10px 0px',
}
const InputDate = (props) => {
  return (
    <Field
      {...props}
      component={DatePicker}
    />
  );
}

export default InputDate;