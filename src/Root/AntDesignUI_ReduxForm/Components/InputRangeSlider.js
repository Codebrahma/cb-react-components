import React from 'react';
import { FormStructureHOC } from '../Common/FormStructureHOC.js';
import { Slider } from 'antd';
import { Field } from 'redux-form';
import omit from 'lodash/omit';

/* Simple Slider imported from Ant Design */
const _InputRangeSliderUI = (props) => (
  <Slider
    {...omit(props, ['value'])}
  />
);

/* A Higher order component which adds a layout for form */
/* Look at the corresponding HOC to know more */
const InputRangeSliderUI = FormStructureHOC(_InputRangeSliderUI);

/* If you are passing removeFormLayoutProp then you get the stand alone component binded with the form */
/* If you are working on custom form element wrapper either write a new HOC */
export const InputRangeSlider = ({ name, label, ...props }) => {
  return (
    <Field
      name={name}
      label={label}
      component={InputRangeSliderUI}
      {...props}
    />
  );
}
