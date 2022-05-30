import React from 'react';
import {styled} from '@mui/material'
import { Box } from '@mui/material';

const Circle1styled = styled(Box)(({ theme }) => ({
    borderRadius: '50%',
    backgroundColor: '#bc3a801a',
    zIndex: '-1',
    [theme.breakpoints.down('sm')]: {
        width: '100px',
        height: '100px',
        position: 'absolute',
        top:'83vh',
        left: '4vw' ,
    },
    [theme.breakpoints.up('sm')]: {
        width: '260px',
        height: '260px',
        position: 'absolute',
        top:'44vh',
        left: '3vw' ,
    },
    [theme.breakpoints.up('xl')]: {
        width: '500px',
        height: '500px',
        position: 'absolute',
        top:'30vh',
        left: '5vw' ,
        },
    
  }));


const Circle1 = () => {
    return (
        <Circle1styled />
     );
}
 
export default Circle1;