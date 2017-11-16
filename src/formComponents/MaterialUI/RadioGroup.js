import React from 'react';
import PropTypes from 'prop-types';
import { FormControl, FormLabel } from 'material-ui/Form';
import { Radio, RadioGroup } from 'material-ui/Radio';
import { omit, pick, concat } from 'lodash';

const radioComponentsFromOptions = (radioOptions = [], selectedValue) => {
  return radioOptions.map((radioProps) => (
    <Radio
      {...radioProps}
      checked={selectedValue === radioProps.value}
    />
  )); 
}

const MuiRadioGroup = ({
  label,
  name,
  value,
  children,
  onChange,
  required,
  error,
  radioOptions,
  helperText,
  errorMessage,
  ...restProps,
}) => {

  const radioGroupSelectedValue = value;
  const radioComponents = children ? children : radioComponentsFromOptions(radioOptions, radioGroupSelectedValue);

  return (
    <FormControl component="fieldset" required={required} error={error} >
      <FormLabel component="legend">{label}</FormLabel>
      <RadioGroup
        aria-label={name}
        name={name}
        value={value}
        onChange={onChange}
        {...restProps}
      >
        {radioComponents}
      </RadioGroup>
      <FormHelperText>{(errorMessage || helperText)}</FormHelperText>
    </FormControl>
  )
}

MuiRadioGroup.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  children: PropTypes.node,
  onChange: PropTypes.func,
  required: PropTypes.bool,
  error: PropTypes.bool,
  radioOptions: PropTypes.arrayOf(
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

MuiRadioGroup.defaultProps = {
  label: '',
  radioOptions: {
    disabled: false,
    label: '',
  }
}

export default MuiRadioGroup;
