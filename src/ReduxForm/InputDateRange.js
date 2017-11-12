import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';

class InputDateRange extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      startDate: moment('12/11/2016', 'DD/MM/YYYY'),
      endDate: moment('12/11/2018', 'DD/MM/YYYY')
    }
  }

  render() {
    const { input, meta, ...props } = this.props;
    return (
      <div>
        <DateRangePicker
          startDate={this.state.startDate}
          endDate={this.state.endDate}
          onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })}
          focusedInput={this.state.focusedInput}
          onFocusChange={focusedInput => this.setState({ focusedInput })}
        />
      </div>
    )
  }
}

export default InputDateRange;