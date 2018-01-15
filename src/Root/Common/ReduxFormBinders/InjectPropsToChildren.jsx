import React, { Fragment } from 'react';
import forEach from 'lodash/forEach';
import isObject from 'lodash/isObject';
import isArray from 'lodash/isArray';

const CouldNotLoadComponent = ({ componentName }) => (
  <div>
     Component with name "{componentName}" is not compatible with this library. Please change it.
  </div>
);

/* Gives a cloned child when we give a child, validationConfig and styles */
const giveClonedChild = (child, fieldsValidationConfig, styles) => {
  if (child && child.props && child.props.name) {
    return (
      React.cloneElement(
        child,
        {          
          ...styles,
          validate: (fieldsValidationConfig[child.props.name] || {}).validations,
          warn: (fieldsValidationConfig[child.props.name] || {}).warnings,
          key: child.props.name,
        }
      )
    );  
  } else {
    return child;
  }
}

/* clones a child deeply by recursively altering the props of it */
const deeplyCloneChildren = (formChildren, fieldsValidationConfig, styles) => {
  /* If props has name field then the component is to be cloned */
  if (
    formChildren && 
    formChildren.props && 
    formChildren.props.name && 
    isObject(formChildren.props) && 
    !isArray(formChildren.props)
  ) {
    return giveClonedChild(formChildren, fieldsValidationConfig, styles);
  }

  // Recursively alters the current children level.
  let childrenAtLevel = [];
  const clonedChildren = forEach(formChildren, (eachChild, index) => {
    // Clones each child deeply

    if (eachChild && eachChild.props && eachChild.props.children && typeof eachChild.props.children !== 'string') {
      // If children exists
      if (eachChild.props.children) {
        const deeplyClonedChildren = deeplyCloneChildren(eachChild.props.children, fieldsValidationConfig, styles);
        childrenAtLevel.push(
          React.cloneElement(
            eachChild,
            {
              key: eachChild.props.name,
              children: deeplyClonedChildren,
            }
          )
        );
      } 
    } else {
      const deeplyClonedChildren = giveClonedChild(eachChild, fieldsValidationConfig, styles);
      // If it don't have a children finish at this level
      childrenAtLevel.push(deeplyClonedChildren);
    }
  });
  return childrenAtLevel;
}

const InjectPropsToChildren = (formChildren, fieldsValidationConfig = {}, styles = {}) => {
  const clonedChildren = deeplyCloneChildren(formChildren, fieldsValidationConfig, styles);
  return clonedChildren;
}

export default InjectPropsToChildren;
