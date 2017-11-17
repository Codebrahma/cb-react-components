import React from 'react';

import { reduxForm, Field } from 'redux-form';

import {
  Input,
  Checkbox,
  Radio,
  Dropdown,
} from 'semantic-ui-react';

import {
  DatePicker, 
  DatePickerInput
} from 'rc-datepicker';
import omit from 'lodash/omit';
import 'rc-datepicker/lib/style.css';

import map from 'lodash/map';

import styles from './FormBindings/ReduxForm/Components/styles.js';

const options = [{
  key: 'A',
  text: 'A',
  value: 'a',
}, {
  key: 'B',
  text: 'B',
  value: 'b',
}]

const style = {
  formHolderStyle: {
    margin: '40px 200px',
  },
  radioStyle: {
    marginRight: '25px', 
  }
}
class Demo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      isHuman: false,
      category: '',
      selectValue: '',
      toggle: '',
      date: '',
    }

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleIsHumanChange = this.handleIsHumanChange.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
    this.handleSelectValueChange = this.handleSelectValueChange.bind(this);
    this.handleToggleChange = this.handleToggleChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);

  }

  handleFormSubmit(values) {

  }
  
  handleNameChange(e, { value }) {
    this.setState({
      name: value,
    })
  }

  handleIsHumanChange(e, { checked }) {
    this.setState({
      isHuman: checked,
    })
  }

  handleCategoryChange(e, { value }) {
    this.setState({
      category: value,
    })
  }
  
  handleSelectValueChange(e, { value }) {
    this.setState({
      selectValue: value,
    })
  }

  handleToggleChange(e, { checked }) {
    this.setState({
      toggle: checked,
    })
  }

  handleDateChange(e, { value }) {
    this.setState({
      date: value,
    })
  }

  render() {
    const {
      formHolderStyle,
      radioStyle
    } = style;

    const {
      wrapperDivStyle,
      labelStyle,
      inputDivStyle
    } = styles;
    
    return (
      <div style={formHolderStyle}>
        <form>

          <div style={wrapperDivStyle}>
            <label style={labelStyle}>
              Name
            </label>
            <div style={inputDivStyle}>
              <Input
                onChange={this.handleNameChange}
                >
                <input
                />
              </Input>
            </div>
          </div>
          
          <div style={wrapperDivStyle}>
            <label style={labelStyle}>
              Are you a Human ?
            </label>
            <Checkbox
              style={inputDivStyle} 
              onChange={this.handleIsHumanChange}
            />
          </div>
        
        <div style={wrapperDivStyle}>
          <label 
            style={labelStyle}
          >
            Category
          </label>
          <div style={inputDivStyle}>
            {
              map(options, ({ key, text, value }) => {
                return (
                  <Radio
                    key={key}
                    label={text}
                    name={text}
                    value={value}
                    checked={this.state.category === value}
                    onChange={this.handleCategoryChange}
                    style={radioStyle}
                  />
                )
              })
            }
          </div>
        </div>
        
        <div style={wrapperDivStyle}>
          <label
            style={labelStyle}
          >
            Select
          </label>
          <div style={inputDivStyle}>
            <Dropdown 
              value={this.state.selectValue}
              onChange={this.handleSelectValueChange}
            />
          </div>
        </div>
        
        <div style={wrapperDivStyle}>
          <label style={labelStyle}>
            Toggle
          </label>
          <div style={inputDivStyle}>
            <Checkbox
              toggle 
              onChange={this.handleToggleChange}
            >
              <input 
              />
            </Checkbox>
          </div>
        </div>
        
        <div style={wrapperDivStyle}>
          <label
            style={labelStyle}
          > Date
          </label>
          <div style={inputDivStyle}>
            <DatePickerInput
              onChange={this.handleDateChange}
            />  
          </div>
        </div>

        <button 
          onClick={this.handleFormSubmit}
        />
        </form>
      </div>    
    )
  }
}

export default Demo;
