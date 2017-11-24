import React from 'react';
import FieldValidationInjector from './FieldValidationInjector.js';

{/*
  This HOC accepts Formsy.Form and Common Field-level Validation Object (already used / compatible with redux-form)
  Injects Field Validation as custom function validation for each form element compatible with Formsy API structure
*/}

const FormsyFormHOC = (FormsyForm, fieldsValidationConfig) => (
  <FormsyForm>
    {
      FieldValidationInjector(FormsyForm.children, fieldsValidationConfig)
    }
  </FormsyForm>
)

export default FormsyFormHOC;
