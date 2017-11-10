import React, {Component} from 'react';
import { Form } from 'formsy-react';

import { 
  InputText,
  InputPassword,
} from './components/FormsyComponents/index.js';

const style = {
  nameStyle: {
    labelStyle: {
      background: 'white',
    },
    inputStyle: {
      background: 'red',
      textAlign: 'right',
    }
  }
}

class App extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(data) {
    console.log('data ', data);
  }

  render() {
    const {
      nameStyle
    } = style;

    return (
      <Form
        onSubmit={this.onSubmit}
      >
        <InputText
          name="name"
          label="Name"
          value="Hello"
          {...nameStyle}
        />
        <InputPassword
          type="password"
          name="password"
          label="password"
          {...nameStyle}
        />
        <button>
          Submit
        </button>
      </Form>
    )
  }
}

export default App;
