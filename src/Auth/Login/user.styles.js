import styled from "styled-components";

export const Parent = styled.div`
  background-color: blue;
  /* width: 100vw; */
  /* height: 100vh; */
  display: flex;
  justify-content: space-evenly;
  padding: 2%;
  .Login {
    background-color: yellow;
  }
  .Poster{
    background-color: green;
  }
  
`;

export const LoginHeading = styled.div`
  background-color: aqua;
  /* width: 100vw;
  height: 100vh; */
  .title{
    font-size: 30px;
  }
  .description{
    font-size: 20px;
  }
  
`;

export const Horizontalline = styled.h3`
            display: flex;
            flex-direction: row;
            ::before,::after{
              content: "";
            flex: 1 1;
            border-bottom: 2px solid #000;
            margin: auto;
            }
`;



export const Input = styled.input`
  outline: 0;
border-width: 0 0 2px;
border-color: blue;
:focus{
  border-color: green
}     
`;
