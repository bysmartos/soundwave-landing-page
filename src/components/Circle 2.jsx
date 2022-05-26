import React from 'react';
import {styled} from '@mui/material'
import { Box } from '@mui/material';


const Circle2styled = styled(Box)(({ theme }) => ({
    [theme.breakpoints.up('sm')]: {
    borderRadius: '50%',
	backgroundColor: '#3457b21a',
	zIndex: '-1',
    position: 'absolute',
	width: '280px',
    height: '280px',
	top:'22vh',
	left: '30vw' ,
    },
    [theme.breakpoints.down('sm')]: {
        borderRadius: '50%',
        backgroundColor: '#3457b21a',
        zIndex: '-1',
        position: 'absolute',
        width: '100px',
        height: '100px',
        top:'14vh',
        left: '29vw' ,
        }
  }));

const Circle2 = () => {
    return ( 
        <Circle2styled />
        
     );
}
 
export default Circle2;