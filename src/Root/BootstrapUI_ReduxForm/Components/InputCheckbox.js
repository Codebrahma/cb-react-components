import React from 'react';
import { FormStructureHOC } from '../Common/FormStructureHOC.js';
import { Field } from 'redux-form';

/* Simple input using bootstrap class */
const _InputCheckboxUI = (props) => {
  return (
    <input
      className="form-check-input"
      type="checkbox"
      {...props} />
  );
}

/* A Higher order component which adds a layout for form */
/* Look at the corresponding HOC to know more */
const InputCheckboxUI = FormStructureHOC(_InputCheckboxUI);

/* If you are passing removeFormLayoutProp then you get the stand alone component binded with the form */
/* If you are working on custom form element wrapper either write a new HOC */
export const InputCheckbox = ({ name, ...props }) => (
  <Field
    name={name}
    component={InputCheckboxUI}
    {...props}
  />
);
