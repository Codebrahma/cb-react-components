import React from 'react';
import { FormStructureHOC } from '../Common/FormStructureHOC.js';
import map from 'lodash/map';
import { Dropdown } from 'semantic-ui-react';
import { Field } from 'redux-form';
import omit from 'lodash/omit';

/* Simple Dropdown imported from Semantic UI */
const _InputTypeableSelectUI = (props) => {
  const options = map(props.options, ({ label: text, value }) => {
    return {
      key: text,
      text,
      value
    }
  });
  return (
    <Dropdown
      placeholder={props.placeholder}
      fluid
      search
      selection
      options={options}
      {...omit(props, ['options'])}/>
  );
}

/* A Higher order component which adds a layout for form */
/* Look at the corresponding HOC to know more */
const InputTypeableSelectUI = FormStructureHOC(_InputTypeableSelectUI);

/* If you are passing removeFormLayoutProp then you get the stand alone component binded with the form */
/* If you are working on custom form element wrapper either write a new HOC */
export const InputTypeableSelect = ({ name, placeholder, label, ...props }) => {
  placeholder = placeholder || label;
  return (
    <Field
      name={name}
      label={label}
      placeholder={placeholder}
      component={InputTypeableSelectUI}
      {...props}
    />
  );
}
