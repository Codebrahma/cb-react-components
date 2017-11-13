import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import FormButton from '../components/StyledComponents/InputButton.js';

const Button = ({ label, ...props }) => (
  <div>
    <FormButton {...props}>
      {label}
    </FormButton>
  </div>
);

export default Button;
