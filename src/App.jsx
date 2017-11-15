import React, {Component} from 'react';
import Demo from './Demo.jsx';

class App extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <Demo 
        onSubmit={(data) => { console.log('data is ', data)}}
      />
    )
  }
}

export default App;
