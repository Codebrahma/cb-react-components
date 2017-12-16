import React from 'react';
import Playground from './Demo';

const Demo = () => {
  const onSubmit = (values) => {
    console.log('submit is ', values);
  }
  return (
    <Playground
      name='DemoForm'
      onSubmit={onSubmit}
    />
  )
}

export default Demo;