import React from 'react';
import { FormStructureHOC } from '../Common/FormStructureHOC.js';
import map from 'lodash/map';
import { Select } from 'antd';
import { Field } from 'redux-form';
const Option = Select.Option;

/* Simple Select imported from Ant Design */
const _InputSelectUI = ({options, ...props}) => {
  return (
    <Select {...props}>
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
const InputSelectUI = FormStructureHOC(_InputSelectUI);

/* If you are passing removeFormLayoutProp then you get the stand alone component binded with the form */
/* If you are working on custom form element wrapper either write a new HOC */
export const InputSelect = ({ name, placeholder, label, ...props }) => {
  placeholder = placeholder || label;
  return (
    <Field
      name={name}
      label={label}
      placeholder={placeholder}
      component={InputSelectUI}
      {...props}
    />
  );
}
