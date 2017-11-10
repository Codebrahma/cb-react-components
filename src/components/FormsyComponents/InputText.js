import Formsy from 'formsy-react';

class InputText extends React.Component {
  constructor(props) {
    super(props);

  }
  
  changeValue(e) {
    this.setValue(e.currentTarget.value);
  }
  
  render() {
    return (
      <div className={className}>
        <input 
          type="text" 
          onChange={this.changeValue} 
          value={this.getValue()}/>
      </div>
    );
  }
}

export default InputText;