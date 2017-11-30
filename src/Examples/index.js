import React from 'react';
import Playground from './MaterialReduxForm';

const Demo = () => {
  const onSubmit = (values) => {
    console.log('submit is ', values);
  }
  return (
    <Playground
      onSubmit={onSubmit}
      name='DemoForm'
    />
  )
}

export default Demo;