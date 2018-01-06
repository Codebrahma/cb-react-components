/* This HOC structures each form element */
/* If you are going to use MaterialUI Form structure replace this with a new HOC. Refer below *.
/* https://material-ui-next.com/api/form-control/ */

import React, { Fragment } from 'react';

import pick from 'lodash/pick';
import omit from 'lodash/omit';

/* Custom Error Component */
/* Change the error display depending upon the type of the error */
const ErrorDisplay = ({
  error,
  dirty,
  pristine,
  errorDivStyle,
}) => {

  // Checks if there is an error
  const isErrorAfterEdit = dirty && !pristine && error;
  
  return (
    <div style={errorDivStyle}>
      {isErrorAfterEdit ? error : null}
    </div>
  )
}

// Props which are definitely going to get consumed
const consumedDownProps = [
  'label',
  'input',
  'meta',
  'wrapperDivStyle',
  'labelStyle',
  'inputDivStyle',
  'errorDivStyle',
  'removeFormLayout',
];

// Meta Props which are needed to get to know about the form elements
const metaProps = [
  'pristine',
  'valid',
  'invalid',
  'active',
  'dirty',
  'error',
  'warning',
]

export const FormStructureHOC = (Component) => {
  return class WrapperComponent extends React.Component {

    handleOnBlur = (event) => {
      /* OnBlur emits undefined during onChange. So handle it separately */
      if (event.target.value) {
        this.props.input.onBlur(event.target.value);
      }
    }
    render() {
      // Get Props which are going to get consumed
      const consumableProps = pick(this.props, consumedDownProps);

      // Get Props which may be passable
      const passableProps = omit(this.props, consumedDownProps);

      // Pick up meta props
      const meta = pick(consumableProps.meta, metaProps);
      
      // If the form layout is not required
      if (consumableProps.removeFormLayout) {
        return (
          <Fragment>
            {/* Interact with UI element directly */}
            <Component
              label={consumableProps.label}
              error={meta.error}
              {...consumableProps.input}
              {...passableProps}
            />
          </Fragment>
        )
      } else {
        // If form layout is required
        return (
          <Fragment>
            {/* Wrapper <div> contains the entire Form element*/}
            <div style={consumableProps.wrapperDivStyle}>
              {/* Label <div> contains the entire label */}
              <label style={consumableProps.labelStyle}>
                {consumableProps.label}
              </label>
              {/* Input <div> wraps the entire input element from UI library */}
              <div style={consumableProps.inputDivStyle}>
                {/* Passing down all passable plus callbacks on input*/}
                <Component
                  {...passableProps}
                  {...consumableProps.input} 
                  onBlur={this.handleOnBlur}
                />
              </div>
              <ErrorDisplay
                errorDivStyle={consumableProps.errorDivStyle}
                {...meta}
              />
            </div>
          </Fragment>
        );
      }
    }
  }
}