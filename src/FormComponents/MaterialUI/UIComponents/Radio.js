import React from 'react';
import PropTypes from 'prop-types';
import { FormControlLabel } from 'material-ui/Form';
import Radio from 'material-ui/Radio';
import pick from 'lodash/pick';

const MuiRadio = (muiRadioProps) => {
  const radioPropsKeys = ['name', 'onChange', 'checked', 'disabled', 'inputProps'];
  const formControlLabelPropsKeys = ['label', 'value'];

  const wrapperRadioProps = pick(muiRadioProps, radioPropsKeys);
  const formControlLabelProps = pick(muiRadioProps, formControlLabelPropsKeys);

  return (
    <FormControlLabel
      label={formControlLabelProps['value']}
      {...formControlLabelProps}
      control={(
        <Radio
          {...wrapperRadioProps}
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
