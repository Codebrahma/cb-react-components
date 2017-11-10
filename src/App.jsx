import React, {Component} from 'react';
import { Form } from 'formsy-react';

import InputText from './components/FormsyComponents/index.js';

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
        <InputWithLabel
          label="Name"
          color="green"
          {...nameStyle}
        />
      </Form>
    )
  }
}
export default App;
