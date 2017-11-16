import React from 'react';

import { Radio, RadioGroup } from 'react-mdl';

const RadioButtonGroup = (props) => (
  <RadioGroup name="demo" value="opt1">
    <Radio value="opt1" ripple>Ripple option</Radio>
    <Radio value="opt2">Other option</Radio>
  </RadioGroup>
);

export default RadioButtonGroup;