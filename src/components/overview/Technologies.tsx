import * as React from "react";
import styled from "styled-components";
import techs from "../common/techs";

export default function Technologies() {
  interface ContainerProps {
    readonly left?: boolean;
  }
  const Container = styled.div<ContainerProps>`
   width: ${(props) => props.left ? "30%" : "70%"};
   ${props =>
      props.left && `
    display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  & > img {
    width: inherit;
    height: fit-content;
    flex-shrink: 1;
    flex-grow: 1;
  }`
    }

  `
  const TechsPanel = styled.div`
    height: 400px;
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    justify-content: stretch;
  `




  return (<TechsPanel>
    <Container left>
      {
        techs.map(tech =>
          <img src={tech.imageUrl}></img>
        )
      }
    </Container>
    <Container>
      Hello
    </Container>

  </TechsPanel>)
}