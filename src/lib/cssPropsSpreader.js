import * as _ from 'lodash';

// defaultStyles - Styles Object from Styled Component
// customReactStyles - styles passed from React components

// both defaultStyles and customReactStyles should use camelCase styling
const cssPropsSpreader = (defaultStyles, customReactStyles = {}) => {
  const customStyles = _.isPlainObject(customReactStyles) ? customReactStyles : {};
  const defaultStyleKeys = _.keys(defaultStyles);
  const customStyleKeys = _.keys(customStyles);
  const cssPropKeys = _.uniq([...defaultStyleKeys, ...customStyleKeys]);

  const cssProps = {};
  _.forEach(cssPropKeys, (key) => {
    cssProps[key] = _.isNil(customStyles[key]) ? defaultStyles[key] : customStyles[key]
  });
  return cssProps;
}

export default cssPropsSpreader;
