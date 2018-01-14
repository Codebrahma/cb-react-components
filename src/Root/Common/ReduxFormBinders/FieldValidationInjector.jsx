import React, { Fragment } from 'react';

const CouldNotLoadComponent = ({ componentName }) => (
  <div>
     Component with name "{componentName}" is not compatible with this library. Please change it.
  </div>
);

const FieldValidationInjector = (formChildren, fieldsValidationConfig = {}, styles = {}) =>
  React.Children.map(formChildren, (child) => {
    /* Inject only if it has type and name */
    /* Checking type because if type is not there it means it is not present in the UI lib */
    /* Checking name to prevent injection in un intended components */
    if (child.type && child.props.name) {
      return React.cloneElement(
        child,
        {
          ...styles,
          validate: (fieldsValidationConfig[child.props.name] || {}).validations,
          warn: (fieldsValidationConfig[child.props.name] || {}).warnings,
        }
      );
    } else {
      return (
        <CouldNotLoadComponent
          componentName={child.props.name}
        />
      );
    }
  }
);

export default FieldValidationInjector;
