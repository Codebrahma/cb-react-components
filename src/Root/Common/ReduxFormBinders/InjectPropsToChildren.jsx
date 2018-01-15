import React, { Fragment } from 'react';

const CouldNotLoadComponent = ({ componentName }) => (
  <div>
     Component with name "{componentName}" is not compatible with this library. Please change it.
  </div>
);

const deeplyCloneChildren = (formChildren, fieldsValidationConfig, styles) => {
  return formChildren;
}

const giveClonedChild = (child, fieldsValidationConfig, styles) => (
  React.cloneElement(
    child,
    {
      ...styles,
      validate: (fieldsValidationConfig[child.props.name] || {}).validations,
      warn: (fieldsValidationConfig[child.props.name] || {}).warnings,
    }
  )
);

const InjectPropsToChildren = (formChildren, fieldsValidationConfig = {}, styles = {}) => {
  const clonedChildren = deeplyCloneChildren(formChildren, fieldsValidationConfig, styles);
  return React.Children.map(clonedChildren, (child) => {
    if (child.type && child.props.name) {
      return child;
    } else if (child.props.name) {
      return (
        <CouldNotLoadComponent
          componentName={child.props.name}
        />
      );
    }
  });
}

export default InjectPropsToChildren;
