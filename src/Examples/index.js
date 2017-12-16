import React from 'react';
import Playground from './Playground.jsx';

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