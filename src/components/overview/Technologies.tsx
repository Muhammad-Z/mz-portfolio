import * as React from "react";
import styled from "styled-components";
import techs from "../common/techs";

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
  cursor: pointer;
 width: 50%;
 height: fit-content;
 flex-shrink: 1;
 /* flex-grow: 1; */
}

img:hover {
 filter: drop-shadow(0 0 0.75rem rgba(84, 153, 255, 0.65));
}`
 }

`;

const TechsPanel = styled.div`
height: 400px;
display: flex;
flex-direction: row;
gap: 0.5rem;
justify-content: stretch;
`;

export default function Technologies() {
  const [selectedTech, setSelectedTech] = React.useState(0);

  function handleTechClick(e: any) {
    console.log(e.target)
    if(e.target.tagName === "IMG") setSelectedTech(e.target.dataset.name);
  }

  return (<TechsPanel>
    <Container left onClick={handleTechClick}>
      {
        techs.map((tech, index) =>
          <img key={tech.name + index} src={tech.imageUrl} data-name={index}></img>
        )
      }
    </Container>
    <Container>
      <p>{techs[selectedTech].description}</p>
    </Container>

  </TechsPanel>)
}