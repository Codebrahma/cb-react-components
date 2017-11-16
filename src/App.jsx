import React, {Component} from 'react';
import Form from './Demo.jsx';
import DemoWithout from './DemoWithout.jsx';

class App extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
        <Form
          name="demo" 
          onSubmit={(data) => { console.log('data is ', data)}}
        />
      </div>
    )
  }
}

export default App;
