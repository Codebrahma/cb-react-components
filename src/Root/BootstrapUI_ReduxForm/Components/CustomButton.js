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
      className={classType}
      onClick={actionType === "submit"? null : handleAction}
      style={styles}
      {...props}
      >
      { content }
    </button>
  );
}

CustomButton.propTypes = {
  actionType: PropTypes.string,
  classType: PropTypes.string
}

CustomButton.defaultProps = {
  actionType: "button",
  classType: "btn btn-primary"
}
