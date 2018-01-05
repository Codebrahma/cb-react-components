import React from 'react';
import PlayGroundForm from './PlayGroundForm.jsx';

class App extends React.Component {
  render() {
    return (
      <div>
        <PlayGroundForm
          onSubmit={() => { console.log('hello') }}
        />
      </div>
    )
  }
}

export default App;
