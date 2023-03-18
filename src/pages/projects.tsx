import * as React from "react";
import styled from "styled-components";
import techs from "../components/common/techs";
import projects from "../components/projects/projects";
import { Grid, Typography } from "@mui/material";
import TemporaryDrawer from "~components/projects/TemporaryDrawer";

const ProjectContainer = styled.div`
margin: 0px 0px 1.5em;
position: relative;
cursor: pointer;
object-fit: cover;
background-color: var(--button-index);
background-position: center center;
background-repeat: no-repeat;
overflow: hidden;
padding: 1.4rem 2rem;
display: flex;
align-items: flex-end;
border-radius: 9px;
break-inside: avoid;

&::before {
content: "";
pointer-events: none;
display: block;
position: absolute;
inset: 0px;
z-index: -1;
background: radial-gradient(circle, white 10%, whitesmoke 11%, whitesmoke 100%);
  }

  &::after {
    content: "";
pointer-events: none;
position: absolute;
z-index: 1;
inset: 0px;
  }

   &:hover:after {
  background-image: linear-gradient(rgba(0, 0, 0, 0.1) 10%, rgba(0, 0, 0, 0.3) 80%);
  } 

  &::selection {
  background: var(--token);
  color: rgb(255, 255, 255);
  }

  & img {
    width: 100% !important;
    height: 100% !important;
    position: absolute;
    left: 0px !important;
    top: 0px !important;
    object-fit: cover;
    border-style: none;
  }

  & > div {
    z-index: 3;
  opacity: 0;
  transform: translateY(10%);
  transition: opacity 300ms ease-in-out 0s, transform 300ms ease-in-out 0s;

  &:hover {
    opacity: 1;
    transform: translateY(0);
  }
  }

  * {
    color: white;
  }

`

const Techs = styled.p`
    flex-wrap: wrap !important;
    margin-top: 0;
    margin-bottom: 1rem;

  & span {
  background: rgb(105, 104, 105);
  padding: 4px 10px;
  border-radius: 50px;
  text-transform: capitalize;
  font-size: 11px;
  margin-right: 6px;
  color: rgb(255, 255, 255);
  font-weight: 500;
  }
`

const OverlayDiv = styled.div`
  & h3, & span {
    text-shadow: 2px 2px 2px black;
  }
`



export default function Projects() {
  const [sideDrawer, setSideDrawer] = React.useState<number | null>(null);
  const handleProjectClick = (e: React.MouseEvent) => {
    const dataset = (e.currentTarget as HTMLElement).dataset
    if (typeof dataset !== "undefined" && typeof dataset.index === "string")
      setSideDrawer(parseInt(dataset.index));
  }

  return (<>
      {sideDrawer !== null && <TemporaryDrawer state={sideDrawer} setState={setSideDrawer} />}
      <Typography variant="h1">Projects</Typography>
      <Grid container>

        {projects.map((project, index) => <Grid className="project-container" item key={project.name}>
          <ProjectContainer data-index={index} onClick={handleProjectClick}>
          <img src={project.desktopThumbnailUrl}></img>
            <OverlayDiv>
                <Typography variant="h3">{project.name}
                </Typography>
                <Techs>
                  {project.technologyUsed.map(tech =>
                    <span key={tech}>{techs[tech].name}</span>)}
                </Techs>
              <div >
              <a href="">Live Site</a> <b />
              <a href="">Source Code</a>
              </div>
            </OverlayDiv>
          </ProjectContainer>
        </Grid>)}
      </Grid>
  </>)
}