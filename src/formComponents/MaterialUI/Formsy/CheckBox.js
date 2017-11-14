import React from 'react';
import PropTypes from 'prop-types';
import { HOC } from 'formsy-react';
import { FormControlLabel } from 'material-ui/Form';
import Checkbox from 'material-ui/Checkbox';
import { formsyApiPropsKeys, wrapperCheckboxPropsKeys } from './utilConstants.js';
import { extractObjectHavingKeys, extractObjectOmittingKeys } from './util.js';

class FormsyMuiCheckbox extends React.Component {
  constructor(props) {
    super(props);
  }

  handleChange = (e) => {
    this.props.setValue(e.currentTarget.checked);
  }

  render() {
    const formsyApiProps = extractObjectHavingKeys(formsyApiPropsKeys, this.props);
    const extractedPropsForWrapperCheckbox = extractObjectHavingKeys(wrapperCheckboxPropsKeys, this.props);
    const wrapperCheckboxProps = {
      ...extractedPropsForWrapperCheckbox,
      disabled: this.props.isFormDisabled(),
      onChange: this.handleChange,
      checked: this.props.getValue(),
    }
    const DOMInputProps = extractObjectOmittingKeys(
      [...formsyApiPropsKeys, ...wrapperCheckboxPropsKeys],
      this.props,
    )

    return (
      <FormControlLabel
        disabled={wrapperCheckboxProps.disabled}
        control={
          <Checkbox
            {...wrapperCheckboxProps}
            {...DOMInputProps}
          />
        }
        label={this.props.label}
      />
    );
  }
}

export default HOC(FormsyMuiCheckbox);
