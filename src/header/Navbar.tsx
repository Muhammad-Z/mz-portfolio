import styled from "styled-components";
import * as React from "react";

export default function Navbar() {
  const Nav = styled.nav`
   height: fit-content;
   padding-bottom: 2rem;
   background-color: #5499FF`;
  const Ul = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  `;
  const Li = styled.li`
    cursor: pointer;
    list-style-type: none;
  `
  return (<Nav>
    <Ul>
      <Li><a>Overview</a></Li>
      <Li><a>Skills</a></Li>
      <Li><a>Projects</a></Li>
      <Li><a>Contacts</a></Li>
    </Ul>
    </Nav>)
}
