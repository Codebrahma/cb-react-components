import React from 'react';
import PropTypes from 'prop-types';
import { FormControl, FormLabel, FormHelperText, FormGroup } from 'material-ui/Form';
import MuiCheckBox from './CheckBox';
import { omit, pick, concat } from 'lodash';

const checkBoxComponentsFromOptions = (checkBoxOptions = [], selectedValues = [], onChange) => {
  return checkBoxOptions.map((checkBoxProps) => (
    <MuiCheckBox
      {...checkBoxProps}
      key={checkBoxProps.value}
      checked={selectedValues.indexOf(checkBoxProps.value) !== -1}
      onChange={onChange}
    />
  ));
}

const MuiCheckBoxGroup = ({
  label,
  name,
  value,
  children,
  onChange,
  required,
  error,
  checkBoxOptions,
  helperText,
  errorMessage,
  disabled,
  ...restProps,
}) => {

  const checkBoxGroupSelectedValues = value;
  const checkBoxComponents = children ? children : checkBoxComponentsFromOptions(checkBoxOptions, checkBoxGroupSelectedValues, onChange);
  const helperDescription = error ? errorMessage : helperText;

  return (
    <FormControl component="fieldset" required={required} error={error} disabled={disabled}>
      <FormLabel component="legend">{label}</FormLabel>
      <FormGroup>
        {checkBoxComponents}
      </FormGroup>
      <FormHelperText>{helperDescription}</FormHelperText>
    </FormControl>
  )
}

MuiCheckBoxGroup.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
  ),
  children: PropTypes.node,
  onChange: PropTypes.func,
  required: PropTypes.bool,
  error: PropTypes.bool,
  checkBoxOptions: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      disabled: PropTypes.bool,
      name: PropTypes.string,
      onChange: PropTypes.func,
      inputProps: PropTypes.object,
      value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
      ]),
    }),
  ),
  helperText: PropTypes.string,
  errorMessage: PropTypes.string,
}

MuiCheckBoxGroup.defaultProps = {
  label: '',
  value: [],
}

export default MuiCheckBoxGroup;
