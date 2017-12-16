import React from 'react';
import PropTypes from 'prop-types';

const FormInputHelper = ({
  meta: {touched, error = null, warning = null},
  style: {errorSpanStyle, warningSpanStyle},
  ...restProps
}) => (
  touched ?
  (
    ((error && <span {...restProps} style={errorSpanStyle || {}}>{error}</span>) ||
    (warning && <span {...restProps} style={warningSpanStyle || {}}>{warning}</span>))
  ) : null
);

export default FormInputHelper;
