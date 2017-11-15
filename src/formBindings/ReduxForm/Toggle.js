import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

import Toggle from '../../formComponents/SemanticUI/Toggle.js';

const styles = {
  display: 'flex',
  alignItems: 'center',
  margin: '10px 0px',
}
const InputToggle = (props) => {
  return (
    <Field
      {...props}
      component={Toggle}
    />
  );
}

export default InputToggle;