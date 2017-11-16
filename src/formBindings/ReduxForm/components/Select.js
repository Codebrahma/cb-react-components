import React, { Component } from 'react'
import { Field } from 'redux-form';

import map from 'lodash/map';

import Select from '../fields/Select.js';

class InputSelect extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    const {
      options,
      name,
      ...props
    } = this.props
    return (
      <Field
        name={name}
        component={Select}
        selection
        search
        placeholder='State' 
        options={options}
        {...props}
      />
    )
  }
}

export default InputSelect;