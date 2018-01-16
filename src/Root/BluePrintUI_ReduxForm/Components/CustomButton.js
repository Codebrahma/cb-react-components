import React from 'react';
import PropTypes from 'prop-types';

export const CustomButton = ({
  content,
  actionType,
  buttonType,
  buttonStyle,
  classType,
  removeFormLayout,
  handleAction,
  ...props
}) => {
  const styles = removeFormLayout? {} : buttonStyle;
  return (
    <button
      {...buttonType}
      type={actionType}
      className={classType || 'pt-button pt-intent-primary'}
      onClick={actionType === "submit"? null : handleAction}
      style={styles}
      {...props}
      >
      { content }
    </button>
  );
}
