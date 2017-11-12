import React from 'react';
import PropTypes from 'prop-types';

import Input from '../components/StyledComponents/InputText.js';

const InputText = ({ wrapperClass, input, meta, ...props }) => {
  const { valid, touched, warning } = meta;
  // Description for warning
  const fieldValid = !props.working && valid;
  const fieldInvalid = !valid && touched;
  const warningField = warning && !fieldInvalid;
  
  return (
    <div>
      <div className="text">
        <Input
          type="text"
          id={input.name}
          {...input}
          {...props}
        />
      </div>
    </div>
  );
};

export default InputText;
