import React from 'react';

const Injector = (formChildren, validationObject) => (
  React.Children.map(formChildren, (child) => (
    React.cloneElement(
      child,
      {
        validate: (validationObject[child.props.name] || {}).validations,
        warn: (validationObject[child.props.name] || {}).warnings,
      }
    )
  ))
);

export default Injector;