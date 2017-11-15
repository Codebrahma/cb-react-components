import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const InputSelect = ({ options, label, ...props}) => (
  <div>
    <label>
      {label}
    </label>
    <Dropdown 
      placeholder='Select your country' 
      search
      selection
      options={options}
      style={{
        border: '1px solid red',
      }} 
    />
  </div>
)

export default InputSelect;