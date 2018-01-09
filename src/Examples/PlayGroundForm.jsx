// Importing necessary libs
import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

import {
  InputText,
  InputSelect,
  MultiSelect,
  InputPassword
} from '../Root/MaterialUI_ReduxForm/Components/index.js';

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

const multiSelectOptions = [
  {
    label: 'option-1',
    value: 'Option 1',
  },
  {
    label: 'option-2',
    value: 'Option 2',
  },
  {
    label: 'option-3',
    value: 'Option 3',
  },
  {
    label: 'option-4',
    value: 'Option 4',
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
          <MultiSelect
            name="multiselect"
            label="Multiselect Box"
            options={multiSelectOptions}
            {...styles}
          />
          <InputPassword
            name="password"
            label="Password"
            placeholder="Password"
            {...styles}/>
        </form>
      </div>
    )
  }
}

export default reduxForm({
  form: 'playground'
})(App);
