import React from 'react';
import PropTypes from 'prop-types';
import { HOC } from 'formsy-react';
import MuiRadioGroup from '../RadioGroup';
import MuiRadio from './Radio.js';
import { formsyApiPropsKeys, wrapperRadioButtonGroupPropsKeys } from './utilConstants.js';
import { extractObjectHavingKeys, extractObjectOmittingKeys } from './util.js';

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

    const radioComponents = this.props.radioOptions.map((radioOption) => {
      const {
        name,
        value,
        onChange,
        ...rest,
      } = radioOption;

      const checked = radioOption.value === this.props.getValue;

      return (
        <MuiRadio
          name={name}
          value={value}
          onChange={onChange}
          checked={checked}
          {...rest}
        />
      )
    })

    return (
      <MuiRadioGroup
        {...this.props}
        disabled={wrapperRadioButtonGroupProps.disabled}
        onChange={this.handleChange}
        value={this.props.getValue()}
        radioOptions={this.props.radioOptions}
      >
        {/* children have higher precedence over `radioOptions` props 
          Either children radio components or radioOptions props can be used
        */}
      </MuiRadioGroup>
    );
  }
}

export default HOC(FormsyMuiRadioGroup);
