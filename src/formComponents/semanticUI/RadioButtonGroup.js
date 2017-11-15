import React, { Component } from 'react'
import { Radio } from 'semantic-ui-react'

import map from 'lodash/map';

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
      ...props
    } = this.props
    return (
      <div>
        <label>
          {label}
        </label>
        <div>
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