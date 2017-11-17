import React from 'react';

import { Switch } from 'react-mdl';

const TextFieldUI = ({ input, ...props}) => (
  <Switch
    {...input}
    checked={input.value}
  />
)

export default TextFieldUI;