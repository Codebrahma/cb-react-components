import React, { Fragment } from 'react';
import { FormStructureHOC } from '../Common/FormStructureHOC.js';
import { Radio } from 'semantic-ui-react'
import { Field } from 'redux-form';
import map from 'lodash/map';

/* Simple Radio imported from Semantic UI */
export const _InputRadioButtonsUI = (props) => {
  return (
    <Fragment>
    {
      map(props.options, ({ value, label }) => {
        return (
          <Radio
            key={label}
            label={label}
            name={props.name}
            value={value}
            checked={value === props.value}
            onChange={props.onChange}
            />
        );
      })
    }
    </Fragment>
  )
}

/* A Higher order component which adds a layout for form */
/* Look at the corresponding HOC to know more */
const InputRadioButtonsUI = FormStructureHOC(_InputRadioButtonsUI);

/* If you are passing removeFormLayoutProp then you get the stand alone component binded with the form */
/* If you are working on custom form element wrapper either write a new HOC */
export const InputRadioButtons = ({ name, ...props }) => {
  return (
    <Field
      name={name}
      component={InputRadioButtonsUI}
      {...props}
    />
  );
}
