import * as React from "react";
import Header from "./header/Header";
import Main from "./main/Main";
import Footer from "./footer/Footer";
import GlobalStyle from "./styles/global";

export default () => (
  <>
    <GlobalStyle />
    <Header />
    <Main />
    <Footer />
  </>
);
