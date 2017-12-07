import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import InputButton from '../../../UIComponents/Button.js';

const Button = ({ label, ...props }) => (
  <div>
    <InputButton {...props}>
      {label}
    </InputButton>
  </div>
);

export default Button;
