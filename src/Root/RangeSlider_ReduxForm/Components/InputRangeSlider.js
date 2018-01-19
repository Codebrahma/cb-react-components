import React from 'react';
import { FormStructureHOC } from '../Common/FormStructureHOC.js';
import InputRange from 'react-input-range';
import { Field } from 'redux-form';
import omit from 'lodash/omit';

/* Simple Slider imported from Ant Design */
const _InputRangeSliderUI = ({value, minValue, maxValue, ...props}) => {
  minValue = minValue || 10;
  maxValue = maxValue || 20;
  value = value || {min: minValue, max: maxValue};
  return (
    <InputRange
      value={value}
      minValue={minValue}
      maxValue={maxValue}
      {...props}
    />
  );
}

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
