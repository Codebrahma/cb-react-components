import React, {Fragment} from 'react';
import { FormStructureHOC } from '../Common/FormStructureHOC.js';
import map from 'lodash/map';
import { Field } from 'redux-form';
import omit from 'lodash/omit';

/* Simple Input with radio and bootstrap class */
const _InputRadioButtonsUI = ({name, ...props}) => {
  return (
    <Fragment>
    {
      map(props.options, ({ label, value }) => (
        <div className="form-check" key={value} {...omit(props, ['options'])}>
          <input
            className="form-check-input"
            name={name}
            type="radio"
            id={label}
            value={value}
            onChange={props.onChange}
            />
          <label className="form-check-label" htmlFor={label}>
            {label}
          </label>
        </div>
      ))
    }
    </Fragment>
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
