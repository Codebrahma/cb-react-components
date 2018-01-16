import React from 'react';
import { FormStructureHOC } from '../Common/FormStructureHOC.js';
import { RangeSlider } from "@blueprintjs/core";
import { Field } from 'redux-form';

/* Simple RangeSlider imported from Blue print */
const _InputRangeSliderUI = ({value, min, max, ...props}) => {
  min = min || 10;
  max = max || 20;
  return (
    <RangeSlider
      value={value || [min, max]}
      min={min}
      max={max}
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
