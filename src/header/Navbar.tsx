import styled from "styled-components";
import * as React from "react";
import Link from 'next/link'

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

 & a {
  color: white;
 }

 &:hover {
   font-weight: bold;
   text-shadow: -1px -1px 1px #E0245E, 1px -1px 1px #E0245E, -1px 1px 1px #E0245E, 1px 1px 2px #E0245E;
 }
`

export default function Navbar() {
 

/* 
text-shadow: -1px -1px 1px #E0245E, 1px -1px 1px #E0245E, -1px 1px 1px #E0245E, 1px 1px 2px #E0245E;
font-weight: bold;
 */

  return (<Nav>
    <Ul>
      <Li><Link href="/">Overview</Link></Li>
      <Li><Link href="/skills">Skills</Link></Li>
      <Li><Link href="/projects">Projects</Link></Li>
      <Li><Link href="/contacts">Contacts</Link></Li>
    </Ul>
  </Nav>)
}
