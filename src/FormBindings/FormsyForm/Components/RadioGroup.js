import React from 'react';
import PropTypes from 'prop-types';
import { HOC } from 'formsy-react';
import { RadioButtonGroupUI } from '../Config/UIPicker.js';
import { RadioUI } from '../Config/UIPicker.js';

class FormsyMuiRadioGroup extends React.Component {
  constructor(props) {
    super(props);
  }

  handleChange = (event, value) => {
    this.props.setValue(value);
  }

  render() {
    const wrapperRadioButtonGroupProps = {
      disabled: this.props.isFormDisabled(),
      onChange: this.handleChange,
      value: this.props.getValue(),
    }

    const { isRequired, isPristine, isValid, isFormSubmitted } = this.props;

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
          <RadioButtonGroupUI
            {...this.props}
            label={loadDefaultStyle ? this.props.label : undefined}
            disabled={wrapperRadioButtonGroupProps.disabled}
            onChange={this.handleChange}
            value={this.props.getValue()}
            radioOptions={this.props.options}
            error={!this.props.isValid()}
            errorMessage={this.props.getErrorMessage()}
          />
        </div>      
      </div>
    );
  }
}

export default HOC(FormsyMuiRadioGroup);
