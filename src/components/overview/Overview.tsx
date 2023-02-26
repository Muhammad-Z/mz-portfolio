import * as React from "react";
import styled from "styled-components";
import Technologies from "./Technologies";
import Typography from '@mui/material/Typography';

export default function Overview() {

  
  return (<div>
    <Typography variant="h1">
      Hello!
    </Typography>
    <p>
      My name is Muhammad, I'm a front-end Developer based in Syria.
      I have developed my cool websites and applications
      I like so and so....
    </p>
    <Typography variant="h2">Technologies I use</Typography>
   
      <Technologies />

  </div>)
}