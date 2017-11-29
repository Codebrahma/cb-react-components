import React from 'React';
import Playground from './Playground.jsx';

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