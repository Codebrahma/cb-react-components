import React from 'react';

const FieldValidationInjector = (formChildren, fieldsValidationConfig = {}) => (
  React.Children.map(formChildren, (child) => (
    React.cloneElement(
      child,
      {
        validate: (fieldsValidationConfig[child.props.name] || {}).validations,
        warn: (fieldsValidationConfig[child.props.name] || {}).warnings,
      }
    )
  ))
);

export default FieldValidationInjector;
