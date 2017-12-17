import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import MaterialUI from './Demo/MaterialUI';
import SemanticUI from './Demo/SemanticUI';

const Demo = ({ activeItem }) => {
  const onSubmit = (values) => {
    console.log('submit is ', values);
  }
  return activeItem === 'material' ? (
    <MaterialUI
      name='DemoForm'
      onSubmit={onSubmit}
    />
  ) : (
    <SemanticUI
      name='DemoForm'
      onSubmit={onSubmit}
    />
  )
}

export default class MenuExampleBasic extends Component {
  state = { activeItem: 'material' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

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
        activeItem={activeItem}
      />
    </div>
      
    )
  }
}