import React, {Component} from 'react';
import Form from './Demo.jsx';
import DemoWithout from './DemoWithout.jsx';
import map from 'lodash/map';
import { Button, Header, Icon, Modal } from 'semantic-ui-react'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { modalOpen: false }

    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleOpen (data) {
    console.log('data: ', data);
    this.setState({ 
      data, 
      modalOpen: true 
    })
  }

  handleClose () {
    this.setState({
      modalOpen: false,
    })
  }

  render() {
    return (
      <div>
        <Form
          name="demo" 
          onSubmit={this.handleOpen}
        />
        <Modal
          open={this.state.modalOpen}
          onClose={this.handleClose}
          basic
          size='small'
        >
          <Modal.Content>
            {
              map(this.state.data, (value, key) => {
                return (
                  <div>
                    {key} : {`${value}`}
                  </div>
                )
              })
            }
          </Modal.Content>
          <Modal.Actions>
            <Button color='green' onClick={this.handleClose} inverted>
              <Icon name='checkmark' /> Got it
            </Button>
          </Modal.Actions>
        </Modal>
      </div>
    )
  }
}

export default App;
