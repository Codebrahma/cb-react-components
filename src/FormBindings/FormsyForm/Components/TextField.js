import React from 'react';
import PropTypes from 'prop-types';
import { HOC } from 'formsy-react';

import { TextFieldUI } from '../Config/UIPicker.js';

import { formsyApiPropsKeys, wrapperTextInputPropsKeys } from '../Common/utilConstants.js';
import { extractObjectHavingKeys, extractObjectOmittingKeys } from '../Common/util.js';

class FormsyMuiTextField extends React.Component {
  constructor(props) {
    super(props);
  }

  handleChange = (e) => {
    this.props.setValue(e.currentTarget.value);
  }

  render() {
    const formsyApiProps = extractObjectHavingKeys(formsyApiPropsKeys, this.props);
    const extractedPropsForWrapperInput = extractObjectHavingKeys(wrapperTextInputPropsKeys, this.props);
    const wrapperInputProps = {
      ...extractedPropsForWrapperInput,
      disabled: this.props.isFormDisabled(),
      onChange: this.handleChange,
      value: this.props.getValue() || '',
    }
    const DOMInputProps = extractObjectOmittingKeys(
      [...formsyApiPropsKeys, ...wrapperTextInputPropsKeys],
      this.props,
    )

    const { isRequired, isPristine, isValid, isFormSubmitted } = formsyApiProps;
    const errorMessage = this.props.getErrorMessage();
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
            { ...DOMInputProps}
            label={loadDefaultStyle ? this.props.label : undefined}
            error={!isValid()}
            errorMessage={errorMessage}
          />
        </div>
      </div>
    );
  }
}

export default HOC(FormsyMuiTextField);
