import React from 'react';
import map from 'lodash/map';
import PropTypes from 'prop-types';
import Input, { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import { FormControl, FormHelperText } from 'material-ui/Form';
import Select from 'material-ui/Select';
import { concat } from 'lodash';
// empty option from props

const constructSelectOptions = (selectOptions) => {
  const result = map(selectOptions, ({ value, key, text }) => (
    <MenuItem 
      key={key}
      value={value}
    >
      {text}
    </MenuItem>
  ));
  return result;
}

const MuiSelect = ({
  label,
  value,
  onChange,
  input,
  renderValue,
  options: selectOptions,
  helperText,
  error,
  errorMessage,
  disabled,
  multiple,
  native,
  children,
  ...restProps,
}) => {

  const selectProps =  {
    value,
    onChange,
    input,
    renderValue,
    native,
    multiple,
    children,
  };
  const wrapperFormProps = {
    helperText,
    error,
    errorMessage,
    disabled,
  }

  const helperDescription = error ? errorMessage : helperText;
  return (
    <FormControl error={wrapperFormProps.error} disabled={wrapperFormProps.disabled} fullWidth>
      <InputLabel htmlFor="select-input">{label}</InputLabel>
      <Select
        value={input.value}
        onChange={input.onChange}
        input={<Input name="age" id="age-simple" />}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {constructSelectOptions(selectOptions)}
      </Select>
      <FormHelperText>{helperDescription}</FormHelperText>
    </FormControl>
  );
}

MuiSelect.PropTypes = {
  label: PropTypes.string,
  value: PropTypes.oneOfType(
    PropTypes.string,
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.number),
    PropTypes.arrayOf(PropTypes.string),
  ),
  onChange: PropTypes.func,
  input: PropTypes.node,
  renderValue: PropTypes.func,
  selectOptions: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
      ]),
      disabled: PropTypes.bool,
    }),
  ),
  helperText: PropTypes.string,
  error: PropTypes.bool,
  errorMessage: PropTypes.string,
  disabled: PropTypes.bool,
  multiple: PropTypes.bool,
  native: PropTypes.bool,
  children: PropTypes.node,
};

export default MuiSelect;