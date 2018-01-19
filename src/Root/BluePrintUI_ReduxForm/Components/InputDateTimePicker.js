import React from 'react';
import { FormStructureHOC } from '../Common/FormStructureHOC.js';
import { DateTimePicker } from "@blueprintjs/datetime";
import { Field } from 'redux-form';

/* Simple DateTimePicker imported from Blue print*/
const _InputDateTimePickerUI = ({value, ...props}) => (
  <DateTimePicker value={value || null}
    { ...props }
  />
);

/* A Higher order component which adds a layout for form */
/* Look at the corresponding HOC to know more */
const InputDateTimePickerUI = FormStructureHOC(_InputDateTimePickerUI);

/* If you are passing removeFormLayoutProp then you get the stand alone component binded with the form */
/* If you are working on custom form element wrapper either write a new HOC */
export const InputDateTimePicker = ({ name, label, ...props }) => {
  return (
    <Field
      name={name}
      label={label}
      component={InputDateTimePickerUI}
      {...props}
    />
  );
}
