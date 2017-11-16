import React, { Component } from 'react'
import RadioButtonUI from '../../../formComponents/SemanticUI/RadioButtonGroup.js';

import map from 'lodash/map';

const style = {
  radioStyle: {
    marginRight: '25px', 
  }
}

class RadioExampleRadioGroup extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (e, { value }) {
    this.props.input.onChange(value);
  } 

  render() {
    const {
      label,
      labelStyle,
      wrapperDivStyle,
      inputDivStyle,
      ...props
    } = this.props
    const {
      radioStyle
    } = style;
    return (
      <div style={wrapperDivStyle}>
        <label 
          style={labelStyle}
        >
          {label}
        </label>
        <RadioButtonUI
          options={this.props.options}
          handleChange={this.handleChange}
          {...props}
        />
      </div>
    )
  }
}

export default RadioExampleRadioGroup;