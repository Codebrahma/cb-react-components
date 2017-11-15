import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

import Input from '../../formComponents/SemanticUI/TextField.js';

const styles = {
  display: 'flex',
  alignItems: 'center',
  margin: '10px 0px',
}

const InputText = (props) => {
  
  return (
    <Field
      {...props}
      component={Input}
    />
  );
};

export default InputText;
