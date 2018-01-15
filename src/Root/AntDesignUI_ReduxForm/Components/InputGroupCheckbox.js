import React from 'react';
import { FormStructureHOC } from '../Common/FormStructureHOC.js';
import { Checkbox } from 'antd';
import { Field } from 'redux-form';
import omit from 'lodash/omit';
const CheckboxGroup = Checkbox.Group;

/* Simple Checkbox imported from Ant Design */
const _InputGroupCheckboxUI = ({options, ...props}) => {
  return (
    <CheckboxGroup options={options} {...omit(props, 'value')} />
  );
}

/* A Higher order component which adds a layout for form */
/* Look at the corresponding HOC to know more */
const InputGroupCheckboxUI = FormStructureHOC(_InputGroupCheckboxUI);

/* If you are passing removeFormLayoutProp then you get the stand alone component binded with the form */
/* If you are working on custom form element wrapper either write a new HOC */
export const InputGroupCheckbox = ({ name, ...props }) => {
  return (
    <Field
      name={name}
      component={InputGroupCheckboxUI}
      {...props}
    />
  );
}
