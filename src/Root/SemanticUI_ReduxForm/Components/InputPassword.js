import React from 'react';
import { FormStructureHOC } from '../Common/FormStructureHOC.js';
import { Input as PasswordField } from 'semantic-ui-react';
import { Field } from 'redux-form';

/* Simple Input imported from Semantic UI for password field*/
const _InputPasswordUI = (props) => (
  <PasswordField
    {...props}
    fluid
  />
);

/* A Higher order component which adds a layout for form */
/* Look at the corresponding HOC to know more */
const InputPasswordUI = FormStructureHOC(_InputPasswordUI);

/* If you are passing removeFormLayoutProp then you get the stand alone component binded with the form */
/* If you are working on custom form element wrapper either write a new HOC */
export const InputPassword = ({ name, placeholder, label, ...props }) => {
  placeholder = placeholder || label;
  return (
    <Field
      name={name}
      label={label}
      placeholder={placeholder}
      component={InputPasswordUI}
      {...props}
    />
  );
}
