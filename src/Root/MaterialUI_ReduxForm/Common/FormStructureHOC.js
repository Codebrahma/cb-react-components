import React, { Fragment } from 'react';

import pick from 'lodash/pick';
import omit from 'lodash/omit';

const ErrorDisplay = ({
  error = 'some error occured',
  dirty,
  pristine,
  errorDivStyle,
}) => {
  // const isErrorAfterEdit = dirty && !pristine &&error;
  const isErrorAfterEdit = true;
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

// Meta Props which are needed
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