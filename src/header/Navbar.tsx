import styled from "styled-components";
import * as React from "react";

export default function Navbar() {
  const Nav = styled.nav`
   height: fit-content;
   background-color: #5499FF;
   border-radius: inherit;
   `;
  const Ul = styled.ul`
    height: 4rem;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
  `;
  const Li = styled.li`
    cursor: pointer;
    list-style-type: none;
    color: white;
    text-shadow: 1px 1px 3px black;
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
