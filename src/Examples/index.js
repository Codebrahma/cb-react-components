import React from 'react';
import SignIn from './SimpleSignup/index.js';

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
        <SignIn
          form="signIn"
          validation
          onSubmit={(values) => { console.log('values', values) }}
        />
      </div>
    )
  }
}

export default App;
