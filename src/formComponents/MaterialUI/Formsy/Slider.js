import React from 'react';
import PropTypes from 'prop-types';
import { HOC } from 'formsy-react';
import MuiSlider from '../Slider';
import { formsyApiPropsKeys, wrapperSliderPropsKeys } from './utilConstants.js';
import { extractObjectHavingKeys, extractObjectOmittingKeys } from './util.js';

class FormsyMuiSlider extends React.Component {
  constructor(props) {
    super(props);
  }

  handleChange = (event, newValue) => {
    this.props.setValue(newValue);
  }

  render() {
    const wrapperSliderProps = {
      disabled: this.props.isFormDisabled(),
      onChange: this.handleChange,
      value: this.props.getValue() || 0,
    }

    return (
      <MuiSlider
        {...this.props}
        {...wrapperSliderProps}
      />
    );
  }
}

export default HOC(FormsyMuiSlider);
