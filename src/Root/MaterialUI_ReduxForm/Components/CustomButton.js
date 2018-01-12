import React from 'react';
import { Button } from 'material-ui';
import omit from 'lodash/omit';

export const CustomButton = ({
  content,
  actionType,
  buttonType,
  buttonStyle,
  removeFormLayout,
  handleAction,
  ...props
}) => {
  const styles = removeFormLayout? buttonStyle : {};
  return (
    <Button
      {...buttonType}
      type={actionType}
      onClick={actionType === "submit"? null : handleAction}
      style={styles}
      {...omit(props, ['classType'])}
      >
      { content }
    </Button>
  );
}
