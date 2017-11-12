import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import InputCheck from '../components/StyledComponents/InputCheckbox.js';

const InputCheckbox = ({ input, meta, option, label, ...props }) => {
  return (
    <div>
      <InputCheck
        {...input}
        {...props}
      />
      <label>
        {label}
        <span className="box" />
      </label>
    </div>
  );
}

export default InputCheckbox;
