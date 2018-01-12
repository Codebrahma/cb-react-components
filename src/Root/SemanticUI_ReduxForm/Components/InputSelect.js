import React from 'react';
import { FormStructureHOC } from '../Common/FormStructureHOC.js';

import map from 'lodash/map';

import { Select } from 'semantic-ui-react';
import { MenuItem } from 'material-ui/Menu'
import { Field } from 'redux-form';
import omit from 'lodash/omit';

/* Simple InputSelect imported from Semantic UI */
const _InputSelectUI = (props) => {
  const options = map(props.options, ({ label: text, value }) => {
    return {
      key: value,
      text,
      value,
    }
  });
  return (
    <Select
      options={options}
      fluid
      {...omit(props, ['options'])}
    />
  )
}

/* A Higher order component which adds a layout for form */
/* Look at the corresponding HOC to know more */
const InputSelectUI = FormStructureHOC(_InputSelectUI);

/* If you are passing removeFormLayoutProp then you get the stand alone component binded with the form */
/* If you are working on custom form element wrapper either write a new HOC */
export const InputSelect = ({ name, ...props }) => (
  <Field
    name={name}
    component={InputSelectUI}
    {...props}
  />
);
