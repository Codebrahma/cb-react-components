import React from 'react';
import PropTypes from 'prop-types';
/* Used Stable material ui version which is different from current version
Since slider is not implemented in latest beta version
*/
import lightBaseTheme from 'material-ui-stable/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui-stable/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui-stable/styles/getMuiTheme';
import Slider from 'material-ui-slider-label/Slider';
import { FormHelperText } from 'material-ui/Form';

const styles = {
  labelStyleOuter: {
    width: '30px',
    height: '30px',
    borderRadius: '50% 50% 50% 0',
    background: 'blue',
    position: 'absolute',
    transform: 'rotate(-45deg)',
    top: '-40px',
    left: '-9px',
  },
  labelStyleInner: {
    transform: 'rotate(45deg)',
    color: 'white',
    textAlign: 'center',
    position: 'relative',
    top: '3px',
    right: '0px',
    fontSize: '10px',
  },
  labelTextStyle: {
    fontFamily: ["Roboto", "Helvetica", "Arial", "sans-serif"],
    color: 'rgba(0, 0, 0, 0.54)',
    padding: 0,
    fontSize: '1rem',
    lineHeight: 1,
  }
};

const MuiSlider = (props) => {
  const toolTipElement = props.showTooltip ? (
    <div style={styles.labelStyleOuter}>
      <div style={styles.labelStyleInner}>
        {props.value}
      </div>
    </div>
  ) : '';

  const { error, errorMessage, helperText } = props;
  const helperDescription = error ? errorMessage : helperText;

  return (
    <div>
      <label style={styles.labelTextStyle}>
        {props.label}
      </label>
      <Slider 
        {...props}
        label={toolTipElement}
      />
      <FormHelperText>{helperDescription}</FormHelperText>
    </div>
  );
}

const MuiWrappedSlider = ({sliderColors = {}, ...restProps}) => {
  /* Added sliderColors in addition with api provided `sliderStyle`
    Since it is not sufficient for color customization
  */

  /*
    Customization after selection has to be done at scss level
    By providing className to Slider component and styling child elements
    As props are not applied to child elements
  */
  
  const defaultMuiSliderColour = 'blue';

  const sliderCustomColors = {
    slider: {
      handleColorZero: sliderColors.handleBorder || defaultMuiSliderColour,
      handleFillColor: sliderColors.handleFiller || defaultMuiSliderColour,
      selectionColor: sliderColors.selectedPortion || defaultMuiSliderColour,
      rippleColor: sliderColors.ripple || defaultMuiSliderColour,
    }
  };

  const sliderTheme = {
    ...lightBaseTheme,
    ...sliderCustomColors,
  };

  return (
    <MuiThemeProvider muiTheme={getMuiTheme(sliderTheme)}>
      <MuiSlider {...restProps} />
    </MuiThemeProvider>
  );
}

MuiSlider.contextTypes = {
  muiTheme: PropTypes.object,
}

MuiSlider.propTypes = {
  label: PropTypes.oneOfType(
    PropTypes.string,
    PropTypes.node,
  ),
  name: PropTypes.string,
  value: PropTypes.number,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  axis: PropTypes.oneOf(
    ['x', 'x-reverse', 'y', 'y-reverse']
  ),
  onDragStart: PropTypes.func,
  onDragStop: PropTypes.func,
  required: PropTypes.bool,
  sliderStyle: PropTypes.object,
  style: PropTypes.object,
  sliderColors: PropTypes.shape({
    handleBorder: PropTypes.string,
    handleFiller: PropTypes.string,
    selectedPortion: PropTypes.string,
    ripple: PropTypes.string,
  }),
  helperText: PropTypes.string,
  error: PropTypes.bool,
  errorMessage: PropTypes.string,
};

export default MuiWrappedSlider;