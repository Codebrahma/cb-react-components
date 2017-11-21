import React from 'react';
import PropTypes from 'prop-types';
import { HOC } from 'formsy-react';

import { SliderUI } from '../Config/UIPicker.js';

import { formsyApiPropsKeys, wrapperSliderPropsKeys } from '../Common/utilConstants.js';
import { extractObjectHavingKeys, extractObjectOmittingKeys } from '../Common/util.js';

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
      <SliderUI
        {...this.props}
        {...wrapperSliderProps}
      />
    );
  }
}

export default HOC(FormsyMuiSlider);
