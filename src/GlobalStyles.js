import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: Cormorant Infant, sans-serif;
  }
  body {
    margin: 0;
  }
  #root {
    min-width: 380px;
    overflow: auto;
  }
`;
