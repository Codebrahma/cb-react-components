import React from 'react';
import FieldValidationInjector from './FieldValidationInjector.jsx';

const Form = ({ 
  handleSubmit, 
  children, 
  fieldsValidationConfig,
  styles,
}) => (
  <form
    onSubmit={handleSubmit}
    children={children}
  >
    { FieldValidationInjector(children, fieldsValidationConfig, styles) }
  </form>
)

export default Form;
