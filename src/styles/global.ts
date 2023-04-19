import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`  
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-size: 14px;
  }
  
  body {
    font-family: Inter, sans-serif;
    font-synthesis: none;
    line-height: 1.5;
    font-weight: 400;
    margin: 0;
  }
`;
