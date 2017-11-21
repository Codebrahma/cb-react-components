import React from 'react';

const Form = ({ handleSubmit, children }) => (
  <form
    onSubmit={handleSubmit}
    children={children}
  >
    {children}
  </form>
)

export default Form;