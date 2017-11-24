import React from 'react';
import PropTypes from 'prop-types';
import { FormControlLabel } from 'material-ui/Form';
import Switch from 'material-ui/Switch';

const MuiToggle = ({
  label,
  name,
  value,
  checked,
  onChange,
  disabled,
  inputProps,
  ...restProps,
}) => (
    <FormControlLabel
      control={
        <Switch
          name={name}
          value={value}
          checked={checked}
          onChange={onChange}
          inputProps={inputProps}
          {...restProps}
        />
      }
      label={label}
      disabled={disabled}
    />
)

MuiToggle.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.oneOfType(
    PropTypes.string,
    PropTypes.number,
  ),
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  inputProps: PropTypes.object,
};

export default MuiToggle;
