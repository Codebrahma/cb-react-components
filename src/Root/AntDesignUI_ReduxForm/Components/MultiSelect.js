import React from 'react';
import { FormStructureHOC } from '../Common/FormStructureHOC.js';
import map from 'lodash/map';
import { Select } from 'antd';
import { Field } from 'redux-form';
const Option = Select.Option;

/* Simple MultipleSelect imported from Ant Design */
const _MultiSelectUI = ({options, ...props}) => {
  return (
    <Select {...props} mode="multiple">
      {
        map(options, ({ label, value }) => (
          <Option value={value} key={value}>{label}</Option>
        ))
      }
    </Select>
  );
}

/* A Higher order component which adds a layout for form */
/* Look at the corresponding HOC to know more */
const MultiSelectUI = FormStructureHOC(_MultiSelectUI);

/* If you are passing removeFormLayoutProp then you get the stand alone component binded with the form */
/* If you are working on custom form element wrapper either write a new HOC */
export const MultiSelect = ({ name, placeholder, label, ...props }) => {
  placeholder = placeholder || label;
  return (
    <Field
      name={name}
      label={label}
      placeholder={placeholder}
      component={MultiSelectUI}
      type="select-multiple"
      {...props}
    />
  );
}
