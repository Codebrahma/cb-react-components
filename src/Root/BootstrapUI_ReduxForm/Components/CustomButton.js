import React from 'react';

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
      className={classType}
      onClick={actionType === "submit"? null : handleAction}
      style={styles}
      {...props}
      >
      { content }
    </button>
  );
}
