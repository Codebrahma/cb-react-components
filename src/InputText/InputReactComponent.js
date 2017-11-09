import React from 'react';
import PropTypes from 'prop-types';

import Input from './Input.js';

const InputReactComponent = ({type = 'text', ...props}) => {
  return (
    <Input
        type={type} 
        {...props}
    >{value}</Input>
  );
}

InputReactComponent.PropTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  value: PropTypes.string,
}

export default InputReactComponent;