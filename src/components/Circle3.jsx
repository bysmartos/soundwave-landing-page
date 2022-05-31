import React from 'react';
import {styled} from '@mui/material'
import { Box } from '@mui/material';


const Circle3styled = styled(Box)(({ theme }) => ({
    borderRadius: '100% 0 0',
    backgroundColor: '#3457b21a',
    zIndex: '-1',
    position: 'absolute',
    [theme.breakpoints.down('sm')]: {
        width: '140px',
        height: '140px',
        top: '81vh',
        left: '61vw',
        },
        
    [theme.breakpoints.up('sm')]: {
        width: '20rem',
        height: '20rem',
        top: '50vh',
        left: '74vw',
    },

    [theme.breakpoints.up('xl')]: {
        width: '34rem',
        height: '34rem',
        top: '44vh',
        left: '71vw',
    },
 
  }));

const Circle3 = () => {
    return ( 
        <Circle3styled />
     );
}
 
export default Circle3;