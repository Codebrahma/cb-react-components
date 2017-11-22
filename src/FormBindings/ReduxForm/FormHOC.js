import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

export default (Form) => (compose(
  connect((state, props) => ({ 
    form: props.name,
    validate: props.validateFunction,
    validationObject: props.validationObject,
  })), 
  reduxForm({ 
    destroyOnUnmount: false, 
    asyncBlurFields: []
  }))(Form));
