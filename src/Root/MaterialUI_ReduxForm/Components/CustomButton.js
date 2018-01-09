import React from 'react';
import { Button } from 'material-ui';

export const CustomButton = (props) => {
  const {content, actionType, buttonType, buttonstyle,
    removeFormLayout, handleAction} = props;
  const styles = removeFormLayout? {} : buttonstyle;
  return (
    <Button
      {...buttonType}
      type={actionType}
      onClick={actionType === "submit"? null : handleAction}
      style={styles}>
      { content }
    </Button>
  );
}
