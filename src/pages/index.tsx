import * as React from "react";
import styled from "styled-components";
import Technologies from "../components/overview/Technologies";
import Typography from '@mui/material/Typography';
import { Grow, Slide } from "@mui/material";

export default function Overview() {
  const [checked, setChecked] = React.useState(false);
  const containerRef = React.useRef(null);

  React.useEffect(() => {
    setChecked(true);
  }, [])


  return (<div className="lol">
    <section ref={containerRef}>
    <Grow
          in={checked}
          style={{ transformOrigin: '0 0 0' }}
          timeout={1000}
        >
      <Typography variant="h1">
        Hello!
      </Typography>
      </Grow>
           <Slide direction="up" in={checked} container={containerRef.current}
           style={{ transitionDelay: checked ? '500ms' : '0ms' }}> 
            
        <Typography>
          My name is Muhammad, I'm a front-end Developer based in Syria.
          I have developed my cool websites and applications
          I like so and so....
        </Typography>
        </ Slide>
    </section>
    <section>
      <Typography variant="h2">Technologies I use</Typography>
      <Technologies />
    </section>
  </div>)
}