import React, { Component } from 'react'

import FormInputHelperText from '../Common/FormInputHelper.js';

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

  handleChange (e, result) {
    if (result && result.value) {
      this.props.input.onChange(result.value);
    } else {
      this.props.input.onChange(e.target.value)
    }
  } 

  render() {
    const {
      label,
      labelStyle,
      wrapperDivStyle,
      inputDivStyle,
      meta,
      wrapperHelperStyle,
      errorSpanStyle,
      warningSpanStyle,
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
        <RadioButtonGroupUI
          options={this.props.options}
          handleChange={this.handleChange}
          {...props}
        />
        <div style={wrapperHelperStyle}>
          <FormInputHelperText
            {...props}
            meta={meta}
            style={{
              errorSpanStyle: errorSpanStyle,
              warningSpanStyle: warningSpanStyle,
            }}
          />
        </div>
      </div>
    )
  }
}

export default RadioExampleRadioGroup;