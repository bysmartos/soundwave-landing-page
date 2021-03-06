import React from 'react';
import {styled} from '@mui/material'
import { Box } from '@mui/material';


const Circle2styled = styled(Box)(({ theme }) => ({
    borderRadius: '50%',
    backgroundColor: '#3457b21a',
    zIndex: '-1',
    position: 'absolute',

    [theme.breakpoints.down('sm')]: {
        width: '100px',
        height: '100px',
        top:'14vh',
        left: '29vw' ,
        },
        
    [theme.breakpoints.up('sm')]: {
        width: '280px',
        height: '280px',
        top:'20vh',
        left: '26vw' ,
    },

    [theme.breakpoints.up('xl')]: {
        width: '500px',
        height: '500px',
        top:'12vh',
        left: '31vw' ,

    },
    
}));

const Circle2 = () => {
    return ( 
        <Circle2styled />
     );
}
 
export default Circle2;