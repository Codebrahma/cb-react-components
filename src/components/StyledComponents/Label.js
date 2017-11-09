import styled from 'styled-components';

export default styled.label`
    margin: ${props => props.style && props.style.margin ? props.style.margin : '0px 0px'};
    padding: ${props => props.style && props.style.padding ? props.style.padding : '0px 0px'};
`