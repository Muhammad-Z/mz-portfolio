import * as React from 'react';
import { keyframes, styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import LinearProgress, { linearProgressClasses } from 
'@mui/material/LinearProgress';

const indeterminate1Keyframes = keyframes({
  "0%": {
    width: "auto",
    right: "100%"
  },
  "100%": {
    width :"auto",
   right: "0%"
  }
});

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  width: 300,
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 
800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
  },
  "& .MuiLinearProgress-bar": {
    animation: `${indeterminate1Keyframes} 1.5s linear forwards`
  },
 /*  "& .MuiLinearProgress-bar2Indeterminate": {
    display: "none"
  } */
}));

interface Props {
  value: number;
}
export default function CustomizedProgressBars(props: Props) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <BorderLinearProgress variant="determinate" value={props.value} />
    </Box>
  );
}