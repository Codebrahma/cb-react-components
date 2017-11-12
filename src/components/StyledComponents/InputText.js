import styled from 'styled-components';
import cssPropsSpreader from '../../lib/cssPropsSpreader.js';

const defaultInputCssProps = {
  "color": "black",
  "backgroundColor": "white",
  "width": "auto",
  "height": "auto",
  "margin": "0 auto",
  "padding": ".5rem 1rem",
  "border": "1px solid transparent",
  "borderRadius": ".25rem",
  "borderColor": "blue",
  "fontWeight": "400",
  "fontSize": "1rem",
  "lineHeight": "1.25",
  "textAlign": "center"
};

export default styled.input.attrs({
	type: 'text'
})`
  ${({customStyles} = props) => cssPropsSpreader(defaultInputCssProps, customStyles)}
`;
