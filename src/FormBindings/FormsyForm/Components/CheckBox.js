import React from 'react';
import PropTypes from 'prop-types';
import { HOC } from 'formsy-react';
import { CheckBoxUI } from '../Config/UIPicker.js';

class FormsyMuiCheckBox extends React.Component {
  constructor(props) {
    super(props);
  }

  handleChange = (event, checked) => {
    this.props.setValue(checked);
  }

  render() {
    const wrapperCheckboxProps = {
      disabled: this.props.isFormDisabled(),
      onChange: this.handleChange,
      checked: this.props.getValue() || false,
    }

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
          <CheckBoxUI
            {...this.props}            
            {...wrapperCheckboxProps}
            inputProps={this.props}
            label={loadDefaultStyle ? label : undefined}
            error={!this.props.isValid()}
            errorMessage={this.props.getErrorMessage()}
          />
        </div>
      </div>
    );
  }
}

export default HOC(FormsyMuiCheckBox);
