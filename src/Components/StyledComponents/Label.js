import styled from 'styled-components';
import cssPropsSpreader from '../../lib/cssPropsSpreader.js';

const defaultLabelCssProps = {
  margin: '0px 0px',
  padding: '0px 0px',
  minWidth: '150px',
  color: 'black',
  fontSize: '20px',
  fontFamily: 'latosemibold',
  display: 'inline-block'
};

export default styled.label`
  ${({customStyles} = props) => cssPropsSpreader(defaultLabelCssProps, customStyles)}
`
