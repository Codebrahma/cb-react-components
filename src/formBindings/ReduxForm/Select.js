import React, { Component } from 'react'
import { Field } from 'redux-form';

import map from 'lodash/map';

import Select from '../../formComponents/SemanticUI/Select.js';

class InputSelect extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    const {
      label,
      options,
      name,
      ...props
    } = this.props
    return (
      <div>
        <label>
          {label}
        </label>
        <Field
          name={name}
          component={Select}
          selection
          search
          placeholder='State' 
          options={options}
        />
      </div>
    )
  }
}

export default InputSelect;