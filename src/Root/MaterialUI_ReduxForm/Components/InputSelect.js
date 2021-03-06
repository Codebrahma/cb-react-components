import React from 'react';
import { FormStructureHOC } from '../Common/FormStructureHOC.js';

import map from 'lodash/map';

import Select from 'material-ui/Select';
import { MenuItem } from 'material-ui/Menu'
import { Field } from 'redux-form';
import omit from 'lodash/omit';

/* Simple InputSelect imported from Material UI */
const _InputSelectUI = (props) => {

  return (
    <Select
      {...omit(props, ['options'])}
      fullWidth
    >
      {
        map(props.options, ({ label, value }) => (
          <MenuItem
            key={value}
            value={value}
          >
            {label}
          </MenuItem>
        ))
      }
    </Select>
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
