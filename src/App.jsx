import React, {Component} from 'react';
import { Form } from 'formsy-react';

import { InputText } from './components/FormsyComponents/index.js';

const style = {
  nameStyle: {
    labelStyle: {
      background: 'red',
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
          color="green"
          value="Hello"
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
