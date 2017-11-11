import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Button = ({ label, ...props }) => (
  <div>
    <button {...props}>
      {label}
    </button>
  </div>
);

export default Button;
