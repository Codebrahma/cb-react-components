import React, { Fragment } from 'react';

let missingComponentName = "";

const CouldNotLoadComponent = ({ componentName }) => (
  <div>
     Component with name "{componentName}" is not compatible with this library. Please change it.
  </div>
);

const checkChildValidity = (component) => {
    let isValid = true;
    // Component is react element and type is undefined
    if(component.hasOwnProperty('type') && !component.type) {
      missingComponentName = component.props.name;
      return false;
    }
    // Component is string element and type is not available
    else if(!component.type) {
      return true;
    }
    // Component with type valid, check the validity for children
    else {
      const {children} = component.props;
      React.Children.map(children, (child) => {
        isValid = isValid && checkChildValidity(child);
        return;
      });
      return isValid;
    }
}

const applyFormValidationToAllChildren = (component, fieldsValidationConfig) => {
  const {props} = component;
  const children = props? props.children : null;
  // No child is present close the recursion by return
  if(!children) {
    return;
  }
  // Return all children of the components with validation
  return (
    React.Children.map(children, (child) => {
      let validation = null;
      let warning = null;
      if(child.props) {
        validation = (fieldsValidationConfig[child.props.name] || {}).validations;
        warning = (fieldsValidationConfig[child.props.name] || {}).warnings;
      }
      if(child.type) {
        child = React.cloneElement(child,
                {
                  validate: validation,
                  warn: warning,
                  children: applyFormValidationToAllChildren(child, fieldsValidationConfig)
                }
              );
      }
      return child;
    })
  );
}



const FieldValidationInjector = (formChildren, fieldsValidationConfig = {}) =>
  React.Children.map(formChildren, (child) => {
    const isValidChild = checkChildValidity(child);
    if (isValidChild) {
      return React.cloneElement(
        child,
        {
          validate: (fieldsValidationConfig[child.props.name] || {}).validations,
          warn: (fieldsValidationConfig[child.props.name] || {}).warnings,
          children: applyFormValidationToAllChildren(child, fieldsValidationConfig)
        }
      );
    } else {
      return (
        <CouldNotLoadComponent
          componentName={missingComponentName}
        />
      );
    }
  }
);

export default FieldValidationInjector;
