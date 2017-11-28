import React from 'react';
import PropTypes from 'prop-types';
import { HOC } from 'formsy-react';
import { CheckBoxGroupUI } from '../Config/UIPicker.js';

class FormyMuiCheckBoxGroup extends React.Component {
  constructor(props) {
    super(props);
  }

  handleChange = name => (event, checked) => {
    this.props.setValue({
      ...this.props.getValue(),
      [name]: checked
    });
  };

  render() {
    const wrapperCheckBoxGroupProps = {
      disabled: this.props.isFormDisabled(),
      value: this.props.getValue() || {},
    }

    const {
      wrapperDivStyle,
      labelStyle,
      inputDivStyle,
      label,
      loadDefaultStyle,
    } = this.props;

    const { checkBoxOptions } = this.props;
    {/* Injecting onChange handler for each checkbox in group */}
    const checkBoxOptionsWithHandler = checkBoxOptions.map((checkBoxOption) => (
      {
        ...checkBoxOption,
        onChange: this.handleChange(checkBoxOption['value'])
      }
    ))

    return (
      <div style={wrapperDivStyle}>
        {
          !loadDefaultStyle ?
            <label style={labelStyle}>
              {label}
            </label> : null
        }
        <div style={inputDivStyle}>
          <CheckBoxGroupUI
            {...this.props}
            {...wrapperCheckBoxGroupProps}
            checkBoxOptions={checkBoxOptionsWithHandler}
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

export default HOC(FormyMuiCheckBoxGroup);
