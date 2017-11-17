import React from 'react';

const Form = ({ onSubmit, children }) => (
  <form
    onSubmit={onSubmit}
    children={children}
  >
    {children}
  </form>
)

export default Form;