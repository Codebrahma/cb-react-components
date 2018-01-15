import React from 'react';
import { FormStructureHOC } from '../Common/FormStructureHOC.js';
import { DatePicker } from 'antd';
import { Field } from 'redux-form';
const { RangePicker } = DatePicker;

/* Simple DatePicker imported from Ant Design for date range picker*/
const _InputDateRangePickerUI = (props) => (
  <RangePicker
    {...props}
  />
);

/* A Higher order component which adds a layout for form */
/* Look at the corresponding HOC to know more */
const InputDateRangePickerUI = FormStructureHOC(_InputDateRangePickerUI);

/* If you are passing removeFormLayoutProp then you get the stand alone component binded with the form */
/* If you are working on custom form element wrapper either write a new HOC */
export const InputDateRangePicker = ({ name, label, ...props }) => {
  return (
    <Field
      name={name}
      label={label}
      component={InputDateRangePickerUI}
      {...props}
    />
  );
}
