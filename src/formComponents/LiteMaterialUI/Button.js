import React from 'react';
import { Button } from 'react-mdl';

const ButtonUI = ({ children }) => (
  <Button
    raised
    ripple
  >
    {children}
  </Button>
);

export default ButtonUI;