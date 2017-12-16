import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import { omit } from 'lodash';

const MuiTextField = ({ label, disabled, onChange, value, helperText, errorMessage, type, error, ...restProps}) => {
  const InputProps = {
    disabled,
    onChange,
    value,
  };

  const helperDescription = error ? errorMessage : helperText;

  return (
    <TextField
      label={label}
      type={type}
      InputProps={{...InputProps, ...restProps['InputProps']}}
      inputProps={restProps['inputProps']}
      helperText={helperDescription}
      error={error}
      fullWidth
      {...(omit(restProps, ['InputProps', 'inputProps']))}
    />
  )
}

MuiTextField.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  helperText: PropTypes.string,
  error: PropTypes.bool,
  errorMessage: PropTypes.string,
  restProps: PropTypes.object,
}

MuiTextField.defaultProps = {
  type: 'text',
  disabled: false,
}

export default MuiTextField;