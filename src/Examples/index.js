import React, { Component } from 'react';
import map from 'lodash/map';
import MaterialUI from './Demo/MaterialUI';
import SemanticUI from './Demo/SemanticUI';
import { Button, Header, Image, Modal, Menu } from 'semantic-ui-react'

const ModalWrapper = ({ open, onClose, children }) => {
  console.log('children ', children)
  return (
    <Modal open={open} onClose={onClose}>
      <Modal.Header>Submitted values</Modal.Header>
      <Modal.Content>
        {children}
      </Modal.Content>
    </Modal>
  )
}

class Demo extends React.Component {
  constructor(props) {
    super(props);

  }
  
  render() {
    // if (this.props.showModal) {
    //   return (
    //     <ModalWrapper
    //       open={this.props.modalOpen}
    //     >
    //       {
    //         map(this.props.values, (value, key) => (
    //           <div key={key}>
    //             {key} : {value}
    //           </div>
    //         ))
    //       }
    //     </ModalWrapper>
    //   )
    // } else {
      return this.props.activeItem === 'material' ? (
        <MaterialUI
          name='DemoForm'
          onSubmit={this.props.onSubmit}
        />
      ) : (
        <SemanticUI
          name='DemoForm'
          onSubmit={this.props.onSubmit}
        />
      )
    }
    
  // }
}


  

export default class MenuExampleBasic extends Component {
  constructor(props) {
    super(props);

    this.state = { activeItem: 'material', showModal: false, values: {} };
    this.handleItemClick = this.handleItemClick.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  

  handleItemClick (e, { name }) {
    this.setState({ activeItem: name })
  }

  onSubmit (values) {
    this.setState({ showModal: !this.state.showModal, values })
  } 

  render() {
    const { activeItem } = this.state
    
    if (this.state.showModal) {
      return (
        <div show={this.state.showModal}>
        {
          map(this.state.values, (value, key) => (
            <div key={key}>
              {key} : {`${value}`}
            </div>
          ))
        }
        </div>
      )
    }
    return (
      <div>
      <Menu>
        <Menu.Item
          name='material'
          active={activeItem === 'material'}
          onClick={this.handleItemClick}
        >
          Material UI
        </Menu.Item>

        <Menu.Item
          name='semantic'
          active={activeItem === 'semantic'}
          onClick={this.handleItemClick}
        >
          Semantic UI
        </Menu.Item>

        
      </Menu>
      <Demo
        showModal={this.state.showModal}
        values={this.state.values}
        activeItem={activeItem}
        onSubmit={this.onSubmit}
      />
    </div>
      
    )
  }
}