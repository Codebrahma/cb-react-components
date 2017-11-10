import React, {Component} from 'react';
import InputWithLabel from './components/ReactComponents/Input.js';

const style = {
  nameStyle: {
    labelStyle: {
      background: 'red',
    },
    inputStyle: {
      background: 'green',
    }
  }
}

class App extends Component {

  render() {
    const {
      nameStyle
    } = style;
    return ([
      <InputWithLabel
        label="Name"
        color="green"
        key={1}
        {...nameStyle}
      />,
      <InputWithLabel
        type="password"
        label="password"
        key={2}
      />,
      <InputWithLabel
        type="radio"
        label="gender"
        key={3}
      />,
      <InputWithLabel
        type="button"
        value="Click me"
        key={4}
      />
    ]);
  }
}
export default App;
