import React from 'react';
import { FormStructureHOC } from '../Common/FormStructureHOC.js';

import { Input as TextField } from 'semantic-ui-react';
import { Field } from 'redux-form';

/* Simple InputText imported from Material UI */
const _InputTextUI = (props) => (
  <TextField
    {...props}
    fluid
  />
);

/* A Higher order component which adds a layout for form */
/* Look at the corresponding HOC to know more */
const InputTextUI = FormStructureHOC(_InputTextUI);

/* If you are passing removeFormLayoutProp then you get the stand alone component binded with the form */
/* If you are working on custom form element wrapper either write a new HOC */
export const InputText = ({ name, ...props }) => (
  <Field
    name={name}
    component={InputTextUI}
    {...props}
  />
);