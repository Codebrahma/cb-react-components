import React from 'react';

// validationFuncs will be compatible with redux-form
// mapping it to Forsmy compatible
const validationFuncsMapper = (validationFuncs = []) => {
  const mappedFunctions = validationFuncs.map((validationFunc) => (
    (values, value) => {
      const validationFuncResult = validationFunc(value, values);
      const mapperFuncResult = validationFuncResult === undefined ? true : validationFuncResult;
      return mapperFuncResult; 
    }
  ))
  return (Object.assign({}, mappedFunctions));
};

const FormsyFormFieldValidationInjector = (formyFormChildren, fieldsValidationConfig) => (
  React.Children.map(formyFormChildren, (child) => (
    React.cloneElement(
      child,
      {
        validations: validationFuncsMapper(
          (fieldsValidationConfig[child.props.name] || {}).validations
        ),
      }
    )
  ))
);

export default FormsyFormFieldValidationInjector;
