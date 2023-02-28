import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  #root {
    width: 65%;
    margin: 0 auto;
    min-height: 100vh;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
  }
  
  section {
    background-color: white;
    border: 3px solid gray;
    margin: 1rem;
    padding: 1rem;
  }

  h2 {
    text-shadow: 2px 2px 10px #5499FF;
    padding-bottom: 0.67em !important;
  }
  `;