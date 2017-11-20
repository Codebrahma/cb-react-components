import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';


export default (Form) => (compose(
  connect((state, props) => {
    console.log('props ', state, props); 
    return {
      form: props.name,
    }
  }), 
  reduxForm({ 
    destroyOnUnmount: false, 
    asyncBlurFields: [],
  }))(Form));
