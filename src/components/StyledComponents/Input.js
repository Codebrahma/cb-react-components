import styled from 'styled-components';

export default styled.input.attrs({
	type: props => props.type || 'text'		
})`
	color: ${props => props.style && props.style.color ? props.style.color: 'white'};
	background-color: blue;
	width: auto;
	height: auto;
	margin: 0 auto;
	padding: .5rem 1rem;
	border: 1px solid transparent;
	border-radius: .25rem;
	border-color: blue;
	font-weight: 400;
	font-size: 1rem;
	line-height: 1.25;
	text-align: center;
`;