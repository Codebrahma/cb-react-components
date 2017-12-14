import React from 'react';
import PropTypes from 'prop-types';
import { FormControl, FormLabel, FormHelperText } from 'material-ui/Form';
import MuiRadio from './Radio';
import { RadioGroup } from 'material-ui/Radio';
import { omit, pick, concat } from 'lodash';

const radioComponentsFromOptions = (options = [], selectedOption) => {
  return options.map((option) => (
    <MuiRadio 
      label={option} 
      value={option}
      checked={option === selectedOption}
      key={option}
    />
  )); 
}

const MuiRadioGroup = ({
  label,
  name,
  input,
  value,
  children,
  onChange,
  required,
  error,
  options,
  helperText,
  errorMessage,
  disabled,
  ...restProps,
}) => {
  const selectedOption = input.value;
  const radioComponents = children ? children : radioComponentsFromOptions(options, selectedOption);
  const helperDescription = error ? errorMessage : helperText;
  return (
    <RadioGroup
      aria-label={name}
      name={name}
      value={selectedOption}
      onChange={onChange}
    >
      {radioComponents}
    </RadioGroup>
  )
}

MuiRadioGroup.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.bool,
  children: PropTypes.node,
  onChange: PropTypes.func,
  required: PropTypes.bool,
  error: PropTypes.bool,
  options: PropTypes.arrayOf(PropTypes.string),
  helperText: PropTypes.string,
  errorMessage: PropTypes.string,
}

MuiRadioGroup.defaultProps = {
  label: '',
  options: ['']
}

export default MuiRadioGroup;
