import React, {Component} from 'react';
import { FormStructureHOC } from '../Common/FormStructureHOC.js';
import { DateRangePicker } from 'react-dates';
import { Field } from 'redux-form';
import omit from 'lodash/omit';

class _InputDateRangePickerUI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focusedInput: null,
    };
  }

  render() {
    return (
      <DateRangePicker
        startDate={this.props.value.startDate}
        endDate={this.props.value.endDate}
        startDateId='startDate'
        endDateId='endDate'
        focusedInput={this.state.focusedInput}
        onFocusChange={(focusedInput) => { this.setState({ focusedInput }) }}
        {...omit(this.props, ['name', 'onDragStart', 'onBlur', 'onChange',
          'onDrop', 'onFocus', 'value'])}
      />
    );
  }
}

/* A Higher order component which adds a layout for form */
/* Look at the corresponding HOC to know more */
const InputDateRangePickerUI = FormStructureHOC(_InputDateRangePickerUI);

/* If you are passing removeFormLayoutProp then you get the stand alone component binded with the form */
/* If you are working on custom form element wrapper either write a new HOC */
export const InputDateRangePicker = ({ name, label, ...props }) => {
  return (
    <Field
      name={name}
      label={label}
      component={InputDateRangePickerUI}
      {...props}
    />
  );
}
