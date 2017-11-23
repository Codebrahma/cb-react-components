import React from 'react';
import FieldValidationInjector from '../Validations/Injector.jsx';


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