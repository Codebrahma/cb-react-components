import React, { Fragment } from 'react';
import { FormStructureHOC } from '../Common/FormStructureHOC.js';
import { Radio } from 'antd';
import { Field } from 'redux-form';
import map from 'lodash/map';
const RadioGroup = Radio.Group;

/* Simple Radio imported from Ant Design */
export const _InputRadioButtonsUI = ({options, ...props}) => {
  return (
    <RadioGroup {...props}>
      {
        map(options, ({ label, value }) => (
          <Radio value={value} key={value}>{label}</Radio>
        ))
      }
    </RadioGroup>
  );
}

/* A Higher order component which adds a layout for form */
/* Look at the corresponding HOC to know more */
const InputRadioButtonsUI = FormStructureHOC(_InputRadioButtonsUI);

/* If you are passing removeFormLayoutProp then you get the stand alone component binded with the form */
/* If you are working on custom form element wrapper either write a new HOC */
export const InputRadioButtons = ({ name, ...props }) => {
  return (
    <Field
      name={name}
      component={InputRadioButtonsUI}
      {...props}
    />
  );
}
