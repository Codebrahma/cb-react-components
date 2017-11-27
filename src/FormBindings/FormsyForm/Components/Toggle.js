import React from 'react';
import PropTypes from 'prop-types';
import { HOC } from 'formsy-react';
import { ToggleUI } from '../Config/UIPicker.js';

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
          <ToggleUI
            {...this.props}
            {...wrapperToggleProps}
            inputProps={DOMInputProps}
            label={loadDefaultStyle ? this.props.label : undefined}
            error={!this.props.isValid()}
            errorMessage={this.props.getErrorMessage()}
          />
        </div>
      </div>  
    );
  }
}

export default HOC(FormsyMuiToggle);
