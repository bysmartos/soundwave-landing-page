import React from 'react';
import {styled} from '@mui/material'
import { Box } from '@mui/material';


const Circle4styled = styled(Box)(({ theme }) => ({
    borderRadius: '50%',
    backgroundColor: '#bc3a801a',
    zIndex: '-1',
    position: 'absolute',
    [theme.breakpoints.down('sm')]: {
        width: '100px',
        height: '100px',
        top:'72vh',
        left: '-3vw' ,
        },
    [theme.breakpoints.up('sm')]: {
        width: '460px',
        height: '460px',
        top:'32vh',
        left: '-8vw',
    },
    [theme.breakpoints.up('xl')]: {
        width: '780px',
        height: '780px',
        top:'26vh',
        left: '-10vw' ,
        },
    
  }));


const Circle4 = () => {
    return (
        <Circle4styled />
     );
}
 
export default Circle4;