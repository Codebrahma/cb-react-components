import React from 'react';
import InjectPropsToChildren from './InjectPropsToChildren.jsx';

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
    { InjectPropsToChildren(children, validations, styles) }
  </form>
)

export default Form;
