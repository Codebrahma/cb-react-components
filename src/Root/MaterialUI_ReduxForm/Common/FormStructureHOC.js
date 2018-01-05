import React from 'react';

import pick from 'lodash/pick';
import omit from 'lodash/omit';

// Props which are definitely going to get consumed
const consumedDownProps = [
  'input',
  'meta',
  'wrapperDivStyle',
  'labelStyle',
  'inputDivStyle',
  'removeFormLayout',
];

export const FormStructureHOC = (Component) => {
  return class WrapperComponent extends React.Component {
    render() {
      // Get Props which are going to get consumed
      const consumableProps = pick(this.props, consumedDownProps);

      // Get Props which may be passable
      const passableProps = omit(this.props, consumedDownProps);
      console.log('passable props', passableProps);
      if (consumableProps.removeFormLayout) {
        return (
          <Component
            {...consumableProps.input}
            {...passableProps}
          />
        )
      } else {
        return (
          <div style={consumableProps.wrapperDivStyle}>
            <label style={consumableProps.labelStyle}>
              {passableProps.label}
            </label>
            <div style={consumableProps.inputDivStyle}>
              <Component
                {...passableProps}
                {...consumableProps.input} 
              />
            </div>
          </div>
        );
      }
    }
  }
}