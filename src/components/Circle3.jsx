import React from 'react';
import {styled} from '@mui/material'
import { Box } from '@mui/material';


const Circle3styled = styled(Box)(({ theme }) => ({
    [theme.breakpoints.up('sm')]: {
    borderRadius: '100% 0 0',
	backgroundColor: '#3457b21a',
	zIndex: '-1',
    position: 'absolute',
	width: '400px',
    height: '400px',
    top: '36vh',
    left: '70vw',
    },
    [theme.breakpoints.down('sm')]: {
        borderRadius: '100% 0 0',
        backgroundColor: '#3457b21a',
        zIndex: '-1',
        position: 'absolute',
        width: '140px',
        height: '140px',
        top: '84vh',
        left: '58vw',
        }

  }));

const Circle3 = () => {
    return ( 
        <Circle3styled />
     );
}
 
export default Circle3;