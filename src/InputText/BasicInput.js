import styled from 'styled-components';

export default styled.input.attrs({
	type: props => props.type || 'text'		
})`
    width: ${props => props.style && props.style.width ? props.style.width : '100px'};
    border: ${props => props.style && props.style.border ? props.style.border : '1px solid'};
	color: ${props => props.style && props.style.color ? props.style.color : 'palevioletred'};
	background: ${props => props.style && props.style.background ? props.style.background : 'white'};
	border: 1px solid;
	border-radius: 3px;
`;