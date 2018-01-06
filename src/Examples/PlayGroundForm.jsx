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
    value: 'Option 1',
  },
  {
    label: 'option-2',
    value: 'Option 2',
  }
];

const styles = {
  wrapperDivStyle: {
    
  },
  labelStyle: {
    display: 'block',
    float: 'left',
    width: '100px',
    height: '35px',
    lineHeight: '35px',
  },
  inputDivStyle: {
    float: 'left',
    width: '200px',
  },
  errorDivStyle: {
    clear: 'left',
  },
}

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
            {...styles}
          />
          <InputSelect
            name="select"
            label="select box"
            options={options}
            {...styles}
          />
        </form>
      </div>
    )
  }
}

export default reduxForm({
  form: 'playground'
})(App);