import React from 'react';
import PropTypes from 'prop-types';
import { HOC } from 'formsy-react';
import { SliderUI } from '../Config/UIPicker.js';

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

    const styleProps = {
      sliderStyle: {
        height: '100%',
        width: '100%'
      },
      axis: 'x',
      sliderColors: {
        handleFiller: 'yellow',
        handleBorder: 'green',
        selectedPortion: 'blue',
      },
      showTooltip: true,
    };

    const {
      wrapperDivStyle,
      labelStyle,
      inputDivStyle,
      label,
      loadDefaultStyle,
    } = this.props;

    return (
      <div style={wrapperDivStyle}>
        {
          !loadDefaultStyle ?
          <label style={labelStyle}>
            {label}
          </label> : null
        }
        <div style={inputDivStyle}>
          <SliderUI
            {...styleProps}
            {...this.props}
            {...wrapperSliderProps}
            label={loadDefaultStyle ? this.props.label : undefined}
            error={!this.props.isValid()}
            errorMessage={this.props.getErrorMessage()}
          />
        </div>
      </div>  
    );
  }
}

export default HOC(FormsyMuiSlider);
