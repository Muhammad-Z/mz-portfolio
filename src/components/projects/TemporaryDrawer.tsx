import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import projects from './projects';
import { Link } from '@mui/material';
import styled from 'styled-components';
import techs from '~components/common/techs';
import ArrowBack from '@mui/icons-material/ArrowBack';
import { GitHub } from '@mui/icons-material';
import LaunchIcon from '@mui/icons-material/Launch';

const Img = styled.img`
  width: 100%;
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

export default function TemporaryDrawer({ state, setState }: { state: number, setState: Function }) {
  const project = projects[state];
  const toggleDrawer =
    (open: string | null) =>
     /*  (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
          event.type === 'keydown' &&
          ((event as React.KeyboardEvent).key === 'Tab' ||
            (event as React.KeyboardEvent).key === 'Shift')
        ) {
          return;
        }  */
        setState(open);

  const list = () => (
    <Box
      sx={{ width: "34rem", height: "100%", overflow: "scroll", /* transition: "all 0.3s linear 0s",
      willChange: "opacity, transform", */
/*       animationName: "fadeLeft",
      animationDuration: "0.5s",
      animationFillMode: "both", */
      }}
      role="presentation"
    >
      <List>
        <ListItemButton onClick={() => toggleDrawer(null)}>
          <ListItemIcon>
            <ArrowBack />
          </ListItemIcon>
          <ListItemText>
            Back to projects
          </ListItemText></ListItemButton>
        <Divider />
      </List>

      <List>
        <ListItem>
          <ListItemText primary={project.name}
            primaryTypographyProps={{ variant: "h2", paddingBottom: "0 !important" }}
            secondary={project.brief}
            secondaryTypographyProps={{ variant: "h4" }} />
        </ListItem>
        <ListItem>
          <Techs>
            {project.technologyUsed.map(tech =>
              <span key={tech}>{techs[tech].name}</span>)}
          </Techs>
        </ListItem>
        <ListItem>
          <ListItemText primary={project.description} />
        </ListItem>
        <ListItem>
          <Img src={project.desktopThumbnailUrl} />
        </ListItem>
      </List>
      <List>
        <Divider variant="middle" />
        <ListItem>
          <ListItemButton>
            <LaunchIcon />
            <Link href={project.liveSiteLink} target="blank">Go to project</Link>
          </ListItemButton>
          <ListItemButton>
            <GitHub />
            <Link href={project.sourceLink}>Source Code</Link>
          </ListItemButton>
        </ListItem>
        {/*   ))} */}
      </List>
    </Box >
  );

  return (
    <Drawer
      anchor='right'
      open={true}
      onClose={() => toggleDrawer(null)}
    >
      {list()}
    </Drawer>
  );
}