// Write your Character component here
import styled from 'styled-components';
import React from 'react';


//Here I'm creating a dropdown. This is mostly a dropdown template that I got off Google with some personal styling thrown in.
const StyledDiv = styled.div`
*{
    box-sizing: border-box;
    background-repeat: no-repeat;
}

h1{
    color: white;
}

.dropdown {
    position: relative;
    display: inline-block;
  }
  
  .dropdown-content {
    display: none;
    position: absolute;
    background-color: darkblue;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    padding: 12px 16px;
    z-index: 1;
    color: white;

  }
  
  .dropdown:hover .dropdown-content {
    display: block;
  }

  p{
    //  margin: 0.5%;
  }

  span{
      color: blue;
  }
`
//done with styling



//now for the component
function Character ({info}){
    return (
    <StyledDiv>
  <h1>Character name: {info.name}</h1>
        <div className= "dropdown">
            <span>Click For More Info</span>
            <div class="dropdown-content">
                <p>Height: {info.height } </p>
                <p> Gender:{info.gender}</p>
                <p> Mass::{info.mass}</p>
                <p> Birth Year:{info.birth_year}</p>
            </div>
        </div>
    </StyledDiv>
    )
}
//done with component


export default Character;
