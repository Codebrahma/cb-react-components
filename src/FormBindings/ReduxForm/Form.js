import React from 'react';
import FieldValidationInjector from './Injector.jsx';


const Form = ({ handleSubmit, children, fieldsValidationConfig }) => (
  <form
    onSubmit={handleSubmit}
    children={children}
  >
    {
      FieldValidationInjector(children, fieldsValidationConfig)
    }
  </form>
)

export default Form;