import React from 'react';
import PropTypes from 'prop-types';
import { HOC } from 'formsy-react';
import { TextFieldUI } from '../Config/UIPicker.js';

class FormsyMuiTextField extends React.Component {
  constructor(props) {
    super(props);
  }

  handleChange = (e) => {
    this.props.setValue(e.currentTarget.value);
  }

  render() {
    const wrapperInputProps = {
      disabled: this.props.isFormDisabled(),
      onChange: this.handleChange,
      value: this.props.getValue() || '',
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
          <TextFieldUI
            {...this.props}
            { ...wrapperInputProps }
            label={loadDefaultStyle ? this.props.label : undefined}
            error={!this.props.isValid()}
            errorMessage={this.props.getErrorMessage()}
          />
        </div>
      </div>
    );
  }
}

export default HOC(FormsyMuiTextField);
