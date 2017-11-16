import React from 'react';

import Button from './FormComponents/LiteMaterialUI/button.js';
import Checkbox from './FormComponents/LiteMaterialUI/Checkbox.js';
import RadioButtonGroup from './FormComponents/LiteMaterialUI/RadioButtonGroup.js';
import Select from './FormComponents/LiteMaterialUI/Select.js';
import TextField from './FormComponents/LiteMaterialUI/TextField.js';
import Toggle from './FormComponents/LiteMaterialUI/Toggle.js';

const DemoML = (props) => (
  <div>
  <TextField />
  <Toggle />
  <RadioButtonGroup
  />
  <Checkbox
  />
  <Select
  />
  <Button>
    Click Me
  </Button>
  </div>
  
)

export default DemoML;