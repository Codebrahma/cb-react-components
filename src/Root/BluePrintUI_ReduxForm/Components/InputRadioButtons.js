import React from 'react';
import { FormStructureHOC } from '../Common/FormStructureHOC.js';
import { Field } from 'redux-form';
import map from 'lodash/map';

/* Use blue print classes to get radio buttons */
export const _InputRadioButtonsUI = ({options, className, name, ...props}) => {
  return (
    <div {...props}>
    {
      map(options, ({ label, value }) => (
        <label
          className={ className || 'pt-control pt-radio .modifier' }
          key={value}>
          <input type="radio" name={name} value={value} />
          <span className="pt-control-indicator"></span>
          {label}
        </label>
      ))
    }
    </div>
  );
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
