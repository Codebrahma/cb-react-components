import styled from 'styled-components';
import cssPropsSpreader from '../../lib/cssPropsSpreader.js';

const defaultInputCssProps = {

};

export default styled.input.attrs({
  type: 'checkbox',
  
})`
  background-color: #fafafa;
  border: 1px solid #cacece;
  box-shadow: 0 1px 2px rgba(0,0,0,0.05), inset 0px -15px 10px -12px rgba(0,0,0,0.05);
  padding: 9px;
  border-radius: 3px;
  display: inline-block;
  position: relative;
  appearance: none;
  &:checked {
    background-color: ${props => props.checkedColor ? props.checkedColor : '#72edff'};
    color: #99a1a7;
  };
  &:focus {
    outline: none;
  }
`;