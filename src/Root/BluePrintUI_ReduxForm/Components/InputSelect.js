import React from 'react';
import { FormStructureHOC } from '../Common/FormStructureHOC.js';
import map from 'lodash/map';
import { Field } from 'redux-form';

/* Use blue print classes of the vlue print to get select */
const _InputSelectUI = ({options, className, placeholder, ...props}) => {
  return (
    <div className={className || 'pt-select'} {...props}>
      <select style={{width: 'inherit'}} defaultValue={placeholder}>
        <option value={placeholder} disabled={true}>{placeholder}</option>
        {
          map(options, ({ label, value }) => (
            <option value={value} key={value}>{label}</option>
          ))
        }
      </select>
    </div>
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
