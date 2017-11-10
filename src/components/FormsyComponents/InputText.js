import React from 'react';
import Formsy from 'formsy-react';

import Input from '../ReactComponents/Input.js';

class InputText extends React.Component {
  constructor(props) {
    super(props);

    this.changeValue = this.changeValue.bind(this);
  }
  
  changeValue(e) {
    this.props.setValue(e.currentTarget.value);
  }
  
  render() {
    return (
      <div>
        <Input 
          type="text" 
          onChange={this.changeValue} 
          {...this.props}
          value={this.props.getValue()}
          />
      </div>
    );
  }
}

export default InputText;