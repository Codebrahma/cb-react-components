import React from 'react';
import PropTypes from 'prop-types';
import Input, { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import { FormControl, FormHelperText } from 'material-ui/Form';
import Select from 'material-ui/Select';
import { concat } from 'lodash';
// empty option from props

const constructOption = (OptionTagComponent, optionPair) => {
  return (
    <MenuItem
      component={'option'}
      {...optionPair}
      value={optionPair['value']}
      key={optionPair['value']}
      disabled={optionPair['disabled']}
    >
      {optionPair['label']}
    </MenuItem>
  )
}

const constructSelectOptions = (selectOptions, isNative = false) => {
  const OptionTagComponent = isNative ? (<React.DOM.option/>) : (<MenuItem/>);
  const emptyOption = (
    <MenuItem value='' key='empty-Option' />
  );
  const optionComponents = selectOptions.map((optionPair) => {
    return constructOption(OptionTagComponent, optionPair);
  });

  return (concat([emptyOption], optionComponents));
}

const MuiSelect = ({
  label,
  value,
  onChange,
  input,
  renderValue,
  selectOptions,
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

  const wrapperInputComponent = input ? input : (<Input id="select-input"/>);
  const optionComponents = children ? children : constructSelectOptions(selectOptions, native);
  const helperDescription = error ? errorMessage : helperText;

  return (
    <FormControl error={wrapperFormProps.error} disabled={wrapperFormProps.disabled}>
      <InputLabel htmlFor="select-input">{label}</InputLabel>
      <Select
        {...restProps}
        {...selectProps}
        value={selectProps.value}
        onChange={selectProps.onChange}
        renderValue={selectProps.renderValue}
        input={wrapperInputComponent}
      >
        {optionComponents}
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