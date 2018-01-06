import React from 'react';
import { FormStructureHOC } from '../Common/FormStructureHOC.js';

import TextField from 'material-ui/TextField';
import { Field } from 'redux-form';

const _InputTextUI = (props) => (
  <TextField
    {...props}
  />
);

const InputTextUI = FormStructureHOC(_InputTextUI);

export const InputText = ({ name, ...props }) => (
  <Field
    name={name}
    component={InputTextUI}
    {...props}
  />
);