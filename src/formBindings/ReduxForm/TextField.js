import React from 'react';
import PropTypes from 'prop-types';

import Input from '../components/StyledComponents/InputText.js';
import Label from '../components/StyledComponents/Label.js';

const styles = {
  display: 'flex',
  alignItems: 'center',
  margin: '10px 0px',
}

const InputText = ({ wrapperClass, input, meta, ...props }) => {
  const { valid, touched, warning } = meta;
  // Description for warning
  const fieldValid = !props.working && valid;
  const fieldInvalid = !valid && touched;
  const warningField = warning && !fieldInvalid;
  
  return (
    <div style={styles}>
      <Label>
        {props.label}
      </Label>
      <Input
        {...input}
        {...props}
      />
    </div>
  );
};

export default InputText;
