import React, {Fragment} from 'react';
import map from 'lodash/map';
import omit from 'lodash/omit';
import {InputCheckbox} from "./InputCheckbox.js";

// Get all the checkboxes for the options
export const InputGroupCheckbox = ({ name, ...props }) => {
  const checkboxGroupName = name;
  return (
    <Fragment>
      {
        map(props.options, ({ label, value, name }) => (
          <InputCheckbox
            name={`${checkboxGroupName}.${name}`}
            key={value}
            label={label}
            value={value}
            {...omit(props, ['options'])}
          />
        ))
      }
    </Fragment>
  );
}
