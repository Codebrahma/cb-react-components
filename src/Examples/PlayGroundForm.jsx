// Importing necessary libs
import React, { Component } from 'react';

import { reduxForm } from 'redux-form';

import { 
  InputText
} from '../Root/MaterialUI_ReduxForm/Components/InputText';
import { 
  InputSelect
} from '../Root/MaterialUI_ReduxForm/Components/InputSelect';

const options = [
  {
    label: 'option-1',
    value: 1,
  },
  {
    label: 'option-2',
    value: 2,
  }
]
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
          <InputSelect
            name="select"
            options={options}
          />
        </form>
      </div>
    )
  }
}

export default reduxForm({
  form: 'playground'
})(App);