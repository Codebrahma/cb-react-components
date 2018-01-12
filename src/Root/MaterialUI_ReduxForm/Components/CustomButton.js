import React from 'react';
import PropTypes from 'prop-types';
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

CustomButton.propTypes = {
  actionType: PropTypes.string
}

CustomButton.defaultProps = {
  actionType: "button"
}
