import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import TextField from 'material-ui/TextField';
import Select from 'material-ui/Select';
import { MenuItem } from 'material-ui/Menu';
import _ from 'lodash';
import { tShirtOptions } from './Demo/mock';

// Label
const Label = (props) => (
  <div style={{ margin: 6, }}>
    <span style={[props.style]}>{props.text}</span>
  </div>
);

Label.propTypes = {
  style: PropTypes.object,
  text: PropTypes.string,
};

// Validations
const Validation = (props) => {
  return (
    <div>
      { 
        props.errors.map(error => {
          return <span className="errorMessage">{error}</span>
        })
      }
    </div>
  )
};

Validation.propTypes = {
  errors: PropTypes.arrayOf(PropTypes.string).isRequired,
};


// Form Input: Component to attach label and 
// validation to the input component
const FormInput = (props) => {
  const inputProps = _.omit(props, ['label', 'labelStyles', 'input']);
  return (
    <div style={{ display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'space-around', padding: '10px', }}>
      <Label
        text={props.label}
        style={props.labelStyles}
      />
      <props.inputComponent
        {...inputProps}
        {...props.input}
      />
      <Validation errors={[]} />
    </div>
  )
};

// Basic Form component
const Form = (props) => {
  return (
    <div>
      {props.children}
    </div>
  )
};

// HOC to bind an input with Redux form
const ReduxFormWrapper = (inputComponent) => {
  // Can include form input or not here
  const withFormInput = (props) => {
    return (
      <FormInput
        inputComponent={inputComponent}
        {...props}
      />
    )
  };
  // Return new component with Field
  return class ConnectedComponent extends React.Component {
    render() {
      return (
        <Field
          component={withFormInput}
          name={this.props.name}
          props={this.props}
        />
      )
    }
  }
};

// Generic Text Input which expects the name, value and onChange as props
const TextFieldUI = (props) => {
  return (
    <TextField
      style={{ flex: 1 }}
      name={props.name}
      value={props.value}
      onChange={props.onChange}
    />
  )
};

// Generic Text Input which expects the name, value, onChange and options as props
const SelectFieldUI = (props) => {
  return (
    <Select
      style={{ flex: 1 }}
      name={props.name}
      value={props.value}
      onChange={props.onChange}
    >
      <MenuItem value="">
        <em>None</em>
      </MenuItem>
      {
        props.options.map(option => {
          return (
            <MenuItem
              key={option.key}
              value={option.value}
            >
              {option.text}
            </MenuItem>
          )
        })
      }
    </Select>
  )
};

// Make Redux form inputs
const ReduxTextField = ReduxFormWrapper(TextFieldUI);
const ReduxSelectField = ReduxFormWrapper(SelectFieldUI);


// Main Form 
const Test = () => {
  return (
    <Form>
      <ReduxTextField
        name="full_name"
        label="Name"
      />
      <ReduxSelectField
        name="tshirtSize"
        label="T shirt size"
        options={tShirtOptions}
      />
    </Form>
  )
};


// Export with redux form HOC
export default reduxForm({
  destroyOnUnmount: false, 
  asyncBlurFields: [],
  form: 'Test from'
})(Test);
