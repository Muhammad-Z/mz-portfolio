import * as React from "react";
import styled from "styled-components";
import Contact from "../components/contact/Contact";
import Overview from "../components/overview/Overview";
import Projects from "../components/projects/Projects";
import Skills from "../components/skills/Skills";

export default function Main() {
  const MainContainer = styled.main`
  background-color: #F8F8F8;
  padding: 1rem;
  `;

  return (<MainContainer>
    <Overview />
    <Skills />
    <Projects />
    <Contact />
  </MainContainer>)
}