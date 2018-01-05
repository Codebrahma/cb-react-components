import React, { Component } from 'react';

import { omit } from 'lodash';

import TextField from 'material-ui/TextField';
import { reduxForm, Field } from 'redux-form';
import { FormStructureHOC } from '../Root/MaterialUI_ReduxForm/Common/FormStructureHOC.js';


const InputTextUI = (props) => (
  <TextField
    {...props}
  />
);

const InputText = ({ name, ...props }) => (
  <Field
    name={name}
    component={FormStructureHOC(InputTextUI)}
    {...props}
  />
);

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
            removeFormLayout
          />
        </form>
      </div>
    )
  }
}

export default reduxForm({
  form: 'playground'
})(App);