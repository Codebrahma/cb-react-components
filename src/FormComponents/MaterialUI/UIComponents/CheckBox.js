import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from 'material-ui/Checkbox';

const MuiCheckBox = ({ disabled, value, name, onChange }) => {
  return (
    <Checkbox
      checked={value}
      name={name}
      onChange={onChange}
      disabled={disabled}  
    />
  )
}

MuiCheckBox.propTypes = {
  label: PropTypes.string,
  disabled: PropTypes.bool,
  checked: PropTypes.bool,
  name: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.bool,
}

MuiCheckBox.defaultProps = {
  disabled: false,
  label: '',
  value: false,
}

export default MuiCheckBox;
