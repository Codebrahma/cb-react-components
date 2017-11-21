import React from 'react';
import PropTypes from 'prop-types';
import { HOC } from 'formsy-react';

import { CheckBoxUI } from '../Config/UIPicker.js';

import { formsyApiPropsKeys, wrapperCheckboxPropsKeys } from '../Common/utilConstants.js';
import { extractObjectHavingKeys, extractObjectOmittingKeys } from '../Common/util.js';

class FormsyMuiCheckBox extends React.Component {
  constructor(props) {
    super(props);
  }

  handleChange = (event, checked) => {
    this.props.setValue(checked);
  }

  render() {
    const formsyApiProps = extractObjectHavingKeys(formsyApiPropsKeys, this.props);
    const extractedPropsForWrapperCheckbox = extractObjectHavingKeys(wrapperCheckboxPropsKeys, this.props);
    const wrapperCheckboxProps = {
      ...extractedPropsForWrapperCheckbox,
      disabled: this.props.isFormDisabled(),
      onChange: this.handleChange,
      checked: this.props.getValue() || false,
    }
    const DOMInputProps = extractObjectOmittingKeys(
      [...formsyApiPropsKeys, ...wrapperCheckboxPropsKeys],
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
          <CheckBoxUI
            {...this.props}
            label={loadDefaultStyle ? undefined : label}
            {...wrapperCheckboxProps}
            inputProps={DOMInputProps}
          />
        </div>
      </div>
    );
  }
}

export default HOC(FormsyMuiCheckBox);
