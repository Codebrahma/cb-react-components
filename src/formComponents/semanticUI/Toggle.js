import React from 'react'
import { Checkbox, Segment } from 'semantic-ui-react'

const InputCheckbox = ({ label, ...props}) => (
  <div>
    <label>
      label
    </label>
    <Checkbox
      toggle 
    >
      <input 
        {...props}
      />
    </Checkbox>
  </div>
)

export default InputCheckbox;