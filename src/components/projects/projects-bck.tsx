import * as React from "react";
import styled from "styled-components";
import techs from "../components/common/techs";
import projects from "../components/projects/projects";
import { Typography } from "@mui/material";

const Img = styled.img`
float: right;
width: 100px;
`

const ProjectTitle = styled.div`
/* === HEADING STYLE #2 === */
& h3 {
text-transform: capitalize;
}
& h3:before {
position: absolute;
left: 0;
bottom: 0;
width: 60px;
height: 2px;
content: "";
background-color: #E0245E;
}

& h3 span {
font-size: 13px;
font-weight: 500;
text-transform: uppercase;
letter-spacing: 4px;
line-height: 3em;
padding-left: 0.25em;
color: rgba(0, 0, 0, 0.4);
padding-bottom: 10px;
}

h3 {
position: relative;
padding: 0;
margin: 0;
font-family: "Raleway", sans-serif;
font-weight: 300;
font-size: 40px;
color: #080808;
-webkit-transition: all 0.4s ease 0s;
-o-transition: all 0.4s ease 0s;
transition: all 0.4s ease 0s;
}

h3 span {
display: block;
font-size: 0.5em;
line-height: 1.3;
}
h3 em {
font-style: normal;
font-weight: 600;
}

img {
width: 2rem;
height: 2rem;
}

`

export default function Projects() {

  return (<>
    <section>
      <Typography variant="h1">Projects</Typography>
      {projects.map(project => <React.Fragment key={project.name}>
        <ProjectTitle>
          <h3>{project.name}
            <span>{project.brief}</span>
          </h3>
          {project.technologyUsed.map(tech => <img key={tech} src={techs[tech].imageUrl} />)}
        </ProjectTitle>

        <a href="">Live Site</a> <b />
        <a href="">Source Code</a>

        <p>{project.description}</p>
      </React.Fragment>)}
    </section>
    <img></img>
    <img></img>
    <p></p>
    <div /* className="used-techs" */></div>
  </>)
}