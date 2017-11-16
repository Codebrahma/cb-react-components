import React from 'react';

import FormHOC from './FormBindings/ReduxForm/FormHOC.js';
import Form from './FormBindings/ReduxForm/Form.js';

import Button from './FormBindings/ReduxForm/Components/Button.js';
import Checkbox from './FormBindings/ReduxForm/Components/CheckBox.js';
import RadioButtonGroup from './FormBindings/ReduxForm/Components/RadioButtonGroup.js';
import Select from './FormBindings/ReduxForm/Components/Select.js';
import TextField from './FormBindings/ReduxForm/Components/TextField.js';
import Toggle from './FormBindings/ReduxForm/Components/Toggle.js';

const DemoML = (props) => (
  <div>
    <Form
      onSubmit={props.handleSubmit}
    >
      
      
    </Form>
  </div>
  
)

export default FormHOC(DemoML);