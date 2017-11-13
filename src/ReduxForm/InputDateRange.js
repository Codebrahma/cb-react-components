import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import Label from '../components/StyledComponents/Label.js';

const styles = {
  display: 'flex',
  alignItems: 'center',
  margin: '10px 0px',
}

class InputDateRange extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      focused: false,
    };

    this.onChange = this.onChange.bind(this);
    this.onFocusChange = this.onFocusChange.bind(this);
  }

  componentDidMount() {
    this.props.input.onChange(moment('12/11/2017', 'DD/MM/YYYY'));
  }
  onChange(date) {
    this.props.input.onChange(date.format('DD/MM/YYYY'))
  }

  onFocusChange({ focused }) {
    this.setState({
      focused,
    })
  }

  render() {
    const { input, meta, ...props } = this.props;
    return (
      <div style={styles}>
        <Label>
          {props.label}
        </Label>
        <SingleDatePicker
          date={moment(input.value, 'DD/MM/YYYY')}
          onDateChange={this.onChange}
          focused={this.state.focused}
          onFocusChange={({ focused }) => this.setState({ focused })}
          {...props}
        />
      </div>
    )
  }
}

export default InputDateRange;