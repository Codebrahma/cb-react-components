// Importing necessary libs
import React, { Component } from 'react';

import { reduxForm } from 'redux-form';

import { 
  InputText
} from '../Root/MaterialUI_ReduxForm/Components/InputText';

class App extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
        <form>
          <InputText
            name="textinput"
            label="Input Text"
            placeholder="Text Input"
          />
        </form>
      </div>
    )
  }
}

export default reduxForm({
  form: 'playground'
})(App);