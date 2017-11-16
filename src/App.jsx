import React, {Component} from 'react';
import Form from './DemoSemanticUI.jsx';
import DemoWithout from './DemoWithout.jsx';

import DemoML from './DemoML.jsx';

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
        <DemoML
          name="materialLite"
        />
      </div>
    )
  }
}

export default App;
