import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import InputCheck from '../components/StyledComponents/InputCheckbox.js';
import Label from '../components/StyledComponents/Label.js';

const styles = {
  display: 'flex',
  alignItems: 'center',
  margin: '10px 0px',
}
const InputCheckbox = ({ input, meta, option, label, ...props }) => {
  return (
    <div style={styles}>
      <Label>
        {label}
      </Label>
      <InputCheck
          {...input}
          {...props}
      />
    </div>
  );
}

export default InputCheckbox;
