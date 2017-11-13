import React, {Component} from 'react';
import { Form } from 'formsy-react';
import TextField from './formComponents/MaterialUI/Formsy/TextField';

class App extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <Form
        onSubmit={this.onSubmit}
      >
        <TextField 
          name="userName"
          validations="isEmail" 
          validationError="This is not a valid email"
          requiredError='Field Required Custom Message'
          required
          label="Email Address"
        />
        <button>
          Submit
        </button>
      </Form>
    )
  }
}

export default App;