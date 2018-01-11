import React from 'react';
import { FormStructureHOC } from '../Common/FormStructureHOC.js';
import Toggle from 'react-bootstrap-toggle';
import { Field } from 'redux-form';
import omit from 'lodash/omit';

/* Simple Toggle imported from react-bootstrap-toggle */
const _InputSwitchUI = ({value, defaultValue, ...props}) => {
  const active = (value === true || value === false)?  value : defaultValue;
  return (
    <Toggle
      active={active}
      {...props}
    />
  )
}

/* A Higher order component which adds a layout for form */
/* Look at the corresponding HOC to know more */
const InputSwitchUI = FormStructureHOC(_InputSwitchUI);

/* If you are passing removeFormLayoutProp then you get the stand alone component binded with the form */
/* If you are working on custom form element wrapper either write a new HOC */
export const InputSwitch = ({ name, ...props }) => {
  return (
    <Field
      name={name}
      component={InputSwitchUI}
      {...props}
    />
  );
}
