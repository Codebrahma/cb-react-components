import React, { Component } from 'react'
import { Form, Radio } from 'semantic-ui-react'

import map from 'lodash/map';

export default class RadioExampleRadioGroup extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (e, { value }) {
    this.setState({ value })
  } 

  render() {
    return (
      <Form>
        {
          map(this.props.options, ({ key, text, value }) => {
            return (
              <Radio
                key={text}
                label={text}
                name={text}
                value={value}
                checked={this.state.value === value}
                onChange={this.handleChange}
              />
            )
          })
        }
      </Form>
    )
  }
}