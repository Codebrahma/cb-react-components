import React from 'react';
import { FormStructureHOC } from '../Common/FormStructureHOC.js';
import { Checkbox } from 'semantic-ui-react'
import { Field } from 'redux-form';
import omit from 'lodash/omit';

/* Simple Checkbox imported from Semantic UI */
const _InputSwitchUI = ({value, defaultValue, ...props}) => {
  return (
    <Checkbox
      toggle
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
