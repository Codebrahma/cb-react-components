import React from 'react';
import PropTypes from 'prop-types';
import { HOC } from 'formsy-react';
import { RadioGroup } from 'material-ui/Radio';
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
      checked: this.props.getValue(),
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
      <RadioGroup
        disabled={wrapperRadioButtonGroupProps.disabled}
        onChange={this.handleChange}
        value={this.props.getValue()}
      >
        {radioComponents}
      </RadioGroup>
    );
  }
}

export default HOC(FormsyMuiRadioGroup);
