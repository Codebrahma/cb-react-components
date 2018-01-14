import React from 'react';
import FieldValidationInjector from './FieldValidationInjector.jsx';

const Form = ({ 
  handleSubmit, 
  children, 
  validations,
  styles,
}) => (
  <form
    onSubmit={handleSubmit}
    children={children}
  >
    { FieldValidationInjector(children, validations, styles) }
  </form>
)

export default Form;
