import React from 'react';
import Formsy from 'formsy-react';
import FieldValidationInjector from './FieldValidationInjector.js';

{/*
  This HOC accepts Formsy.Form and Common Field-level Validation Object (already used / compatible with redux-form)
  Injects Field Validation as custom function validation for each form element compatible with Formsy API structure
*/}

const FormsyFormHOC = ({onSubmit: handleSubmit, fieldsValidationConfig, children}) => (
  <Formsy.Form
    onSubmit={handleSubmit}
  >
    {
      FieldValidationInjector(children, fieldsValidationConfig)
    }
  </Formsy.Form>
)

export default FormsyFormHOC;
