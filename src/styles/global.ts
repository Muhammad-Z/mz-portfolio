import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  #__next {
   /*  width: 65%;
    margin: 0 auto; */
    min-height: 100vh;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
  }
  
  .layout {
    /* background-color: white;
    border: 3px solid gray; */
    /* margin: 1rem; */
   /*  padding: 1rem; */
    position: relative;
    background: white;
    padding: 0rem 1rem 1rem 1rem;
    margin: 2rem;
    
  }
    main:before {
  content: "";
  position: absolute;
  top: -1rem;
  left: -1rem;
  display: block;
  background-color: #ffffff;
  background-image: linear-gradient(45deg, transparent 49%, #aaaaff 50%, transparent 51%);
  background-size: 5px 5px;
  right: -1rem;
  bottom: -1rem;
  z-index: -1;
  }

  h2 {
    text-shadow: 2px 2px 10px #5499FF;
    padding-bottom: 0.67em !important;
  }
  `;