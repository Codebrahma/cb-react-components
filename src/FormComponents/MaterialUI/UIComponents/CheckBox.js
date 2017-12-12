import React from 'react';
import PropTypes from 'prop-types';
import { FormControlLabel } from 'material-ui/Form';
import Checkbox from 'material-ui/Checkbox';
import { omit } from 'lodash';

const MuiCheckBox = ({ label, disabled, checked, name, onChange, value, ...restProps }) => {
  const wrapperCheckboxProps = {
    checked,
    name,
    onChange,
    value,
  };

  return (
    <FormControlLabel
      disabled={disabled}
      control={
        <Checkbox
          {...wrapperCheckboxProps}
          inputProps={restProps['inputProps']}
          {...(omit(restProps, ['inputProps'])) }
        />
      }
      label={label}
    />
  )
}

MuiCheckBox.propTypes = {
  label: PropTypes.string,
  disabled: PropTypes.bool,
  checked: PropTypes.bool,
  name: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
}

MuiCheckBox.defaultProps = {
  disabled: false,
  checked: false,
  label: '',
}

export default MuiCheckBox;
