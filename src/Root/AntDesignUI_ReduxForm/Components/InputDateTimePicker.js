import React from 'react';
import { FormStructureHOC } from '../Common/FormStructureHOC.js';
import { DatePicker } from 'antd';
import { Field } from 'redux-form';
import moment from 'moment';
import omit from 'lodash/omit';

/* Simple DatePicker imported from Ant Design */
const _InputDateTimePickerUI = ({formatType, ...props}) => (
  <DatePicker
    format={formatType}
    showTime={{ defaultValue: moment('00:00:00', 'HH:mm:ss') }}
    {...omit(props, ['value', 'selectedValue'])}
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
