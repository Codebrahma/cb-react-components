// Importing necessary libs
import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

import {
  InputText,
  InputSelect,
  MultiSelect,
  InputPassword,
  InputCheckbox,
  InputGroupCheckbox,
  InputRadioButtons,
  InputSwitch
} from '../Root/SemanticUI_ReduxForm/Components';

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

const checkBoxOptions = [
  {
    label: 'checkbox-1',
    value: 'Checkbox-1',
    name: 'checkbox1'
  },
  {
    label: 'checkbox-2',
    value: 'Checkbox-2',
    name: 'checkbox2'
  },
  {
    label: 'checkbox-3',
    value: 'Checkbox-3',
    name: 'checkbox3'
  }
];

const radioOptions = [
  {
    label: 'radioButton-1',
    value: 'radioButton-1'
  },
  {
    label: 'radioButton-2',
    value: 'radioButton-2'
  },
  {
    label: 'radioButton-3',
    value: 'radioButton-3'
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
        <form onSubmit={this.props.handleSubmit}>
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
          <InputCheckbox
            name="inputCheckbox"
            label="Input CheckBox"
            {...styles}
          />
          <InputGroupCheckbox
            name="groupCheckbox"
            options={checkBoxOptions}
            {...styles}
          />
          <InputRadioButtons
            name="inputRadioButton"
            label="RadioButtons"
            options={radioOptions}
            {...styles}
          />
          <InputSwitch
            name="inputSwitch"
            label="Input Switch"
            {...styles}/>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default reduxForm({
  form: 'playground'
})(App);
