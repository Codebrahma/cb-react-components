import { isPlainObject } from 'lodash';

// defaultStyles - Styles Object from Styled Component
// customReactStyles - styles passed from React components

// both defaultStyles and customReactStyles should use camelCase styling
const cssPropsSpreader = (defaultStyles, customReactStyles = {}) => {
  const customStyles = isPlainObject(customReactStyles) ? customReactStyles : {};

  return {
    ...defaultStyles,
    ...customStyles
  };
}

export default cssPropsSpreader;
