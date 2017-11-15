import React from 'react'
import { Checkbox } from 'semantic-ui-react'

const InputCheckbox = ({ label, input, meta, ...props }) => (
  <div>
    <label>
      {label}
    </label>
    <Checkbox
      {...input} 
    >
      <input 
        {...props}
      />
    </Checkbox>
  </div>
)

export default InputCheckbox;