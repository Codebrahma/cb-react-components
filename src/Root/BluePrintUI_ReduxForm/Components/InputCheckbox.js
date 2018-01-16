import React from 'react';
import { FormStructureHOC } from '../Common/FormStructureHOC.js';
import { Field } from 'redux-form';

/* Use blueprint classes to get checkbox */
const _InputCheckboxUI = ({className, ...props}) => {
  return (
    <label
      className={className || 'pt-control pt-checkbox pt-inline'}
      {...props}>
      <input type="checkbox" />
      <span className="pt-control-indicator"></span>
    </label>
  )
}

/* A Higher order component which adds a layout for form */
/* Look at the corresponding HOC to know more */
const InputCheckboxUI = FormStructureHOC(_InputCheckboxUI);

/* If you are passing removeFormLayoutProp then you get the stand alone component binded with the form */
/* If you are working on custom form element wrapper either write a new HOC */
export const InputCheckbox = ({ name, ...props }) => {
  return (
    <Field
      name={name}
      component={InputCheckboxUI}
      {...props}
    />
  );
}
