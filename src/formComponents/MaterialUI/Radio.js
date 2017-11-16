import React from 'react';
import PropTypes from 'prop-types';
import { FormControlLabel } from 'material-ui/Form';
import Radio from 'material-ui/Radio';
import { omit, pick, concat } from 'lodash';

const MuiRadio = (radioProps) => {
  const radioPropsKeys = ['name', 'onChange', 'checked', 'disabled', 'inputProps'];
  const formControlLabelPropsKeys = ['label', 'value'];

  const wrapperRadioProps = pick(radioProps, radioPropsKeys);
  const formControlLabelProps = pick(radioProps, formControlLabelPropsKeys);
  const restProps = omit(radioProps, concat(radioPropsKeys, formControlLabelPropsKeys));

  return (
    <FormControlLabel
      {...formControlLabelProps}
      control={(
        <Radio
          {...wrapperRadioProps}
          {...restProps}
        />
      )} 
    />
  )
}

MuiRadio.propTypes = {
  radioProps: PropTypes.shape({
    label: PropTypes.string,
    disabled: PropTypes.bool,
    checked: PropTypes.bool,
    name: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
  }).isRequired,
}

MuiRadio.defaultProps = {
  radioProps: {
    disabled: false,
    checked: false,
    label: '',
  }
}

export default MuiRadio;
