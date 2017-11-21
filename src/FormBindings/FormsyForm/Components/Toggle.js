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
      wrapperStyle,
      labelStyle,
      inputDivStyle,
      label,
      loadDefaultStyle,
    } = this.props;
    return (
      <div style={wrapperStyle}>
        {
          !loadDefaultStyle ?
          <label>
            {label}
          </label> : null
        }
        <div style={inputDivStyle}>
          <ToggleUI
            {...this.props}
            label={this.props.label}
            {...wrapperToggleProps}
            inputProps={DOMInputProps}
          />
        </div>
      </div>  
    );
  }
}

export default HOC(FormsyMuiToggle);
