import * as React from "react";
import techs from "./techs" ;

export default function Technologies() {


  return (<>
    {
      techs.map(tech => 
        <>
          <img src={tech.imageUrl}></img>
          <h2>{tech.name}</h2>
          <p>{tech.brief}</p>
          <p>{tech.description}</p>
        </>
      )
    }
  </>)
}