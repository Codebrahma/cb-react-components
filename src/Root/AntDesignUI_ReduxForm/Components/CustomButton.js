import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
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
      type={buttonType}
      htmlType={actionType}
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
