import styled from 'styled-components';

export default styled.label`
    margin: ${({ margin }) => margin ? margin : '0px 0px'};
    padding: ${({ padding }) => padding ? padding : '0px 0px'};
    min-width: ${({ minWidth }) => minWidth ? minWidth : '150px'};
    display: inline-block;
    background: ${({ background }) => background ? background : 'yellow'}
`