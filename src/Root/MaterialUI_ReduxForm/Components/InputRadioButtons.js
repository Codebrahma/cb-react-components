import React from 'react';
import { FormStructureHOC } from '../Common/FormStructureHOC.js';
import map from 'lodash/map';
import Radio, { RadioGroup } from 'material-ui/Radio';
import { FormControlLabel } from 'material-ui/Form';
import { Field } from 'redux-form';
import omit from 'lodash/omit';

/* Simple RadioGroup imported from Material UI */
const _InputRadioButtonsUI = (props) => {
  return (
    <RadioGroup
      aria-label={props.name}
      name={props.name}
      value={props.value}
      {...omit(props, ['options'])}>
      {
        map(props.options, ({ label, value }) => (
          <FormControlLabel
            key={value}
            value={value}
            control={<Radio />}
            label={label} />
        ))
      }
    </RadioGroup>
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
