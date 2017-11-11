import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import map from 'lodash/map';

const InputCheckbox = ({ input, meta, option, label, ...props }) => {

  return (
    <div>
      <input
        type="checkbox"
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
