import React from 'react';
import FieldValidationInjector from './FieldValidationInjector.js';

{/*
  This HOC accepts Formsy.Form and Common Field-level Validation Object (already used / compatible with redux-form)
  Injects Field Validation as custom function validation for each form element compatible with Formsy API structure
*/}

const FormsyFormHOC = (FormsyForm, fieldsValidationConfig) => (
  React.cloneElement(
    FormsyForm,
    {
      children: FieldValidationInjector(FormsyForm.children, fieldsValidationConfig),
    }
  )
)

export default FormsyFormHOC;
