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
  InputSwitch,
  CustomButton,
  InputTypeableSelect
} from '../Root/BootstrapUI_ReduxForm/Components';

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

const typeableSelectOptions = [
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
    width: '150px',
    height: '35px',
    lineHeight: '35px',
  },
  inputDivStyle: {
    float: 'left',
    width: '200px',
  },
  errorDivStyle: {
    clear: 'left',
  }
}

const buttonStyles = {
  buttonStyle: {
    backgroundColor: 'blue',
    color: 'black',
    fontSize: '14px'
  }
}

class App extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit}>
        {
          InputText &&
          <InputText
            name="textinput"
            label="Input Text"
            placeholder="Text Input"
            {...styles}
          />
        }
        {
          InputSelect &&
          <InputSelect
            name="select"
            label="select box"
            options={options}
            {...styles}
          />
        }
        {
          MultiSelect &&
          <MultiSelect
            name="multiselect"
            label="Multiselect Box"
            options={multiSelectOptions}
            {...styles}
          />
        }
        {
          InputPassword &&
          <InputPassword
            name="password"
            label="Password"
            placeholder="Password"
            {...styles}/>
        }
        {
          InputCheckbox &&
          <InputCheckbox
            name="inputCheckbox"
            label="Input CheckBox"
            {...styles}
          />
        }
        {
          InputGroupCheckbox &&
          <InputGroupCheckbox
            name="groupCheckbox"
            options={checkBoxOptions}
            {...styles}
          />
        }
        {
          InputRadioButtons &&
          <InputRadioButtons
            name="inputRadioButton"
            label="RadioButtons"
            options={radioOptions}
            {...styles}
          />
        }
        {
          InputSwitch &&
          <InputSwitch
            name="inputSwitch"
            label="Input Switch"
            on={<h5>ON</h5>}
            off={<h5>OFF</h5>}
            size="xs"
            offstyle="danger"
            defaultValue = {true}
            {...styles}/>
        }
        {
          InputTypeableSelect &&
          <InputTypeableSelect
            name="inputTypeableSelect"
            label="Typeable Select"
            options={typeableSelectOptions}
            placeholder="Search for options"
            {...styles}/>
        }
        {
          CustomButton &&
          <CustomButton
            content="Click here"
            actionType="button"
            classType="btn btn-secondary"
            {...buttonStyles}
          />
        }
        </form>
      </div>
    )
  }
}

export default reduxForm({
  form: 'playground'
})(App);
