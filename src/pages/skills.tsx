
import { Box, Container, Grid } from "@mui/material";
import * as React from "react";
import styled from "styled-components";
//import useOnScreen from "~components/skills/useOnScreen";
import techs from "../components/common/techs";
import CustomizedProgressBars from "../components/skills/CustomizedProgressBars";

const Img = styled.img`
width: 50px;
height: fit-content;
`;

export default function Skills() {

  return (<Grid container spacing={2} alignItems="center" sx={{ overflow: "scroll" }}>
    {techs.map(tech => <React.Fragment key={tech.name}>
      <Grid item xs={10}>
        <Img src={tech.imageUrl}></Img>
        <h3 className="name">{tech.name}</h3>
        <CustomizedProgressBars value={tech.skill}></CustomizedProgressBars>
      </Grid>
    </React.Fragment>)}
  </Grid>)
}


/* <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: "wrap" }}>
    {techs.map(tech => (<Box sx={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: '2rem',
      flexBasis: "100%"
    }}>
      <div>
      <Img src={tech.imageUrl}></Img>
      <h3 className="name">{tech.name}</h3>
      </div>
      <CustomizedProgressBars value={tech.skill}></CustomizedProgressBars>
    </Box>))}

  </Box>) */