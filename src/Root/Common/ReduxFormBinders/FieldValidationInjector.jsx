import React, { Fragment } from 'react';

const CouldNotLoadComponent = ({ componentName }) => (
  <div>
     Component with name "{componentName}" is not compatible with this library. Please change it.
  </div>
);

const FieldValidationInjector = (formChildren, fieldsValidationConfig = {}) => 
  React.Children.map(formChildren, (child) => {
    if (child.type) {
      return React.cloneElement(
        child,
        {
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
