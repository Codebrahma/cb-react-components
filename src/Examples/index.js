import React from 'react';
import Playground from './MaterialReduxForm';

const Demo = () => {
  const onSubmit = (values) => {
    debugger
    console.log('values', values);
  }

  return (
    <Playground
      name='DemoForm'
      onSubmit={onSubmit}
    />
  )
}

export default Demo;