import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

import Input from '../../../formComponents/SemanticUI/TextField.js';

const InputText = (props) => {
  
  return (
    <Field
      {...props}
      component={Input}
    />
  );
};

export default InputText;
