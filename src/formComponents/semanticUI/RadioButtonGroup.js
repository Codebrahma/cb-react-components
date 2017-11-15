import React, { Component } from 'react'
import { Radio } from 'semantic-ui-react'

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
      input,
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
        <div style={inputDivStyle}>
          {
            map(props.options, ({ key, text, value }) => {
              return (
                <Radio
                  {...input}
                  key={key}
                  label={text}
                  name={text}
                  value={value}
                  checked={input.value === value}
                  onChange={this.handleChange}
                  style={radioStyle}
                />
              )
            })
          }
        </div>
      </div>
    )
  }
}

export default RadioExampleRadioGroup;