import React from 'react';
import { FormStructureHOC } from '../Common/FormStructureHOC.js';
import map from 'lodash/map';
import { Dropdown } from 'semantic-ui-react';
import { Field } from 'redux-form';
import omit from 'lodash/omit';

/* Simple MultipleSelect imported from Semantic UI */
const _MultiSelectUI = (props) => {
  const options = map(props.options, ({ label: text, value }) => {
    return {
      key: value,
      text,
      value,
    }
  });
  return (
    <Dropdown
      multiple
      selection
      options={options}
      fluid
      {...omit(props, ['options'])}/>
  )
}

/* A Higher order component which adds a layout for form */
/* Look at the corresponding HOC to know more */
const MultiSelectUI = FormStructureHOC(_MultiSelectUI);

/* If you are passing removeFormLayoutProp then you get the stand alone component binded with the form */
/* If you are working on custom form element wrapper either write a new HOC */
export const MultiSelect = ({ name, ...props }) => (
  <Field
    name={name}
    component={MultiSelectUI}
    type="select-multiple"
    {...props}
  />
);
