import React from 'react';
import DemoApp from './Demo1/index.jsx';

class App extends React.Component {
  state = {}
  componentDidCatch(err, errorInfo) {
    console.log('error found ', err);
  }

  render() {
    if (this.state.err) {
      return (
        <div>
          {this.state.err}
        </div>
      )
    }
    return (
      <div>
        <DemoApp
          onSubmit={(values) => { console.log('values', values) }}
        />
      </div>
    )
  }
}

export default App;
