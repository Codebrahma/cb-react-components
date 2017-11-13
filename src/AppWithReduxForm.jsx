import React from 'react';
import moment from 'moment';
import ReduxDemoForm from './ReduxForm/index.jsx';
import MaterialUI from './ReduxForm/materialUI.js';

const styles = {
  marginLeft: '50px',
  marginTop: '50px',
  border: '1px #cccccc',
  background: '#efefef',
  padding: '35px 40px',
  margin: '0 auto',
  width: '50%',
};

const App = (props) => {
  const handleSubmit = (data) => {
    console.log('submitted data ', data);
  }
  return (
    <div style={styles}>
      <ReduxDemoForm 
        onSubmit={handleSubmit}
      />
      <MaterialUI 
      
      />
    </div>
  )
}

export default App;