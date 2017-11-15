import React from 'react';
import PropTypes from 'prop-types';
import Radio from 'material-ui/Radio';

const MuiRadio = (props) => {
  const {
    name,
    value,
    onChange,
    checked,
    ...restProps,
  } = props;

  return (
    <Radio
      name={name}
      value={value}
      onChange={onChange}
      checked={checked}
      {...restProps}
    />
  );
};


export default MuiRadio;