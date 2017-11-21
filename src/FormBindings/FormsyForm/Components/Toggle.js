import React from 'react';
import PropTypes from 'prop-types';
import { HOC } from 'formsy-react';

import MuiToggle from '../../../FormComponents/MaterialUI/Toggle';

import { formsyApiPropsKeys, wrapperTogglePropsKeys } from '../Common/utilConstants.js';
import { extractObjectHavingKeys, extractObjectOmittingKeys } from '../Common/util.js';

class FormsyMuiToggle extends React.Component {
  constructor(props) {
    super(props);
  }

  handleChange = (event, checked) => {
    this.props.setValue(checked);
  }

  render() {
    const formsyApiProps = extractObjectHavingKeys(formsyApiPropsKeys, this.props);
    const extractedPropsForWrapperToggle = extractObjectHavingKeys(wrapperTogglePropsKeys, this.props);
    const wrapperToggleProps = {
      ...extractedPropsForWrapperToggle,
      disabled: this.props.isFormDisabled(),
      onChange: this.handleChange,
      checked: this.props.getValue() || false,
    }
    const DOMInputProps = extractObjectOmittingKeys(
      [...formsyApiPropsKeys, ...wrapperTogglePropsKeys],
      this.props,
    )

    return (
      <MuiToggle
        {...this.props}
        label={this.props.label}
        {...wrapperToggleProps}
        inputProps={DOMInputProps}
      />
    );
  }
}

export default HOC(FormsyMuiToggle);
