import * as React from "react";
import styled from "styled-components";
import techs from "../common/techs";

export default function Skills() {
  const SkillsContainer = styled.div`
    
  `;
  return (<>
    {techs.map(tech => (<>
      <div className="icon"><img src={tech.imageUrl}></img></div>
      <h3 className="name">{tech.name}</h3>
      <div className="bar">{tech.skill}</div>
    </>))}

  </>)
}