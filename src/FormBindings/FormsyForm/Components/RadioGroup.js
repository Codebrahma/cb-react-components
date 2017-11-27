import React from 'react';
import PropTypes from 'prop-types';
import { HOC } from 'formsy-react';

import { RadioButtonGroupUI } from '../Config/UIPicker.js';
import { RadioUI } from '../Config/UIPicker.js';

import { formsyApiPropsKeys, wrapperRadioButtonGroupPropsKeys } from '../Common/utilConstants.js';
import { extractObjectHavingKeys, extractObjectOmittingKeys } from '../Common/util.js';

class FormsyMuiRadioGroup extends React.Component {
  constructor(props) {
    super(props);
  }

  handleChange = (event, value) => {
    this.props.setValue(value);
  }

  render() {
    const formsyApiProps = extractObjectHavingKeys(formsyApiPropsKeys, this.props);
    const extractedPropsForWrapperRadioGroup = extractObjectHavingKeys(wrapperRadioButtonGroupPropsKeys, this.props);
    const wrapperRadioButtonGroupProps = {
      ...extractedPropsForWrapperRadioGroup,
      disabled: this.props.isFormDisabled(),
      onChange: this.handleChange,
      value: this.props.getValue(),
    }
    const DOMInputProps = extractObjectOmittingKeys(
      [...formsyApiPropsKeys, ...wrapperRadioButtonGroupPropsKeys],
      this.props,
    )

    const radioComponents = this.props.options.map(({ key, text: name , value, ...radioOption }) => {
      const {
        onChange,
        ...rest,
      } = radioOption;

      const checked = radioOption.value === this.props.getValue;
      
      return (
        <RadioUI
          {...rest}
          key={key}
          name={name}
          label={name}
          value={value}
          onChange={onChange}
          checked={checked}
        />
      )
    })
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
          <RadioButtonGroupUI
            {...this.props}
            label={loadDefaultStyle ? this.props.label : undefined}
            disabled={wrapperRadioButtonGroupProps.disabled}
            onChange={this.handleChange}
            value={this.props.getValue()}
            radioOptions={this.props.options}
          />
        </div>      
      </div>
    );
  }
}

export default HOC(FormsyMuiRadioGroup);
