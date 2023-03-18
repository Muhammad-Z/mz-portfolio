
import { Box, Container, Grid, Typography } from "@mui/material";
import * as React from "react";
import styled from "styled-components";
import techs from "../common/techs";
import CustomizedProgressBars from "./CustomizedProgressBars";

export default function Skills() {
  const Img = styled.img`
      width: 50px;
      height: fit-content;
  `;
  return (<>
    <Typography variant="h1">Skills</Typography>
    <Grid container spacing={2} alignItems="center" >
      {techs.map(tech => (<React.Fragment key = {tech.name}>
        <Grid item xs={4}>
          <Img src={tech.imageUrl}></Img>
          <h3 /* className="name" */>{tech.name}</h3>
        </Grid>
        <Grid item xs={8}>
          <CustomizedProgressBars value={tech.skill}></CustomizedProgressBars>
        </Grid>
      </React.Fragment>))}

    </Grid>
  </>)
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