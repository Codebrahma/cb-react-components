import React, {Component} from 'react';
import Demo from './Demo.jsx';
import DemoWithout from './DemoWithout.jsx';

class App extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
        <Demo 
          onSubmit={(data) => { console.log('data is ', data)}}
        />
        <DemoWithout
        />
      </div>
    )
  }
}

export default App;
