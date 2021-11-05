// Write your Character component here
import styled from 'styled-components';
import React from 'react';

const StyledDiv = styled.div `
h1{
    color: blue;
}
`


function Character ({info}){
    return (
    <StyledDiv>
  <h1>Character name: {info.name}</h1>
    </StyledDiv>
    )
}

export default Character;