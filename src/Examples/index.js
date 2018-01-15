import React from 'react';
import DemoApp from './Google-registration-form/index.jsx';

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
          onSubmit={() => { console.log('hello') }}
        />
      </div>
    )
  }
}

export default App;
