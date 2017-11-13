import styled from 'styled-components';
import cssPropsSpreader from '../../lib/cssPropsSpreader.js';

const defaultInputCssProps = {

};

export default styled.select`
  min-width: 200px;
  height: 40px;
  &:focus {
    border: '#72edff'
  }
`;