import React from 'react';
import PropTypes from 'prop-types';
import { HOC } from 'formsy-react';
import TextField from 'material-ui/TextField';
import { formsyApiPropsKeys, wrapperTextInputPropsKeys } from './utilConstants.js';
import { extractObjectHavingKeys, extractObjectOmittingKeys } from './util.js';

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
    const isRequiredError = isRequired() && !isPristine() && !isValid() && isFormSubmitted() && wrapperInputProps.requiredError;
    const errorText = this.props.getErrorMessage() || isRequiredError;

    return (
      <TextField
        label={this.props.label}
        InputProps={{ ...wrapperInputProps }}
        inputProps={{ ...DOMInputProps}}
        error={!isValid()}
        required
      >
      </TextField>
    );
  }
}

export default HOC(FormsyMuiTextField);
