import React from 'react';
import ValidationInjector from '../Validations/Injector.jsx';


const Form = ({ handleSubmit, children, validationObject }) => (
  <form
    onSubmit={handleSubmit}
    children={children}
  >
    {
      ValidationInjector(children, validationObject)
    }
  </form>
)

export default Form;