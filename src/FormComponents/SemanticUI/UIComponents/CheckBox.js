import React from 'react'
import omit from 'lodash/omit';
import { Checkbox } from 'semantic-ui-react'

const InputCheckboxUI = ({ 
  input,
  inputDivStyle, 
  ...props 
}) => (
  <Checkbox
    style={inputDivStyle} 
    checked={input.value === true} 
    {...omit(input, ['value'])}
    onChange={props.handleChange}
  >
    <input
      {...props}
    />
  </Checkbox>
)

export default InputCheckboxUI;