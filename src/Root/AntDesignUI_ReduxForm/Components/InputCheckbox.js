import React from 'react';
import { FormStructureHOC } from '../Common/FormStructureHOC.js';
import { Checkbox } from 'antd';
import { Field } from 'redux-form';
import omit from 'lodash/omit';

/* Simple Checkbox imported from Ant Design */
const _InputCheckboxUI = (props) => {
  return (
    <Checkbox {...omit(props, 'value')} />
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
