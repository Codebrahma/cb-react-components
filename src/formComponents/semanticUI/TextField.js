import React from 'react'
import { Input } from 'semantic-ui-react'

const InputExampleInput = ({ placeholder, label, input, meta, ...props }) => (
  <div>
    <label>
      {label}
    </label>
    <Input 
      placeholder={placeholder}
      {...input} 
      >
      <input
        {...props}
      />
    </Input>
  </div>
)

export default InputExampleInput