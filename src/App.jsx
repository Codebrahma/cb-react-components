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
          name="emailAddress"
          validations="isEmail" 
          validationError="This is not a valid email"
          requiredError='Field Required Custom Message'
          required
          label="Email Address"
        />
        <Checkbox
          name="submitted"
          label="Cbox Label"
        />
        <button>
          Submit
        </button>
      </Form>
    )
  }
}

export default App;