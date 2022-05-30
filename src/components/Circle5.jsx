import React from 'react';
import {styled} from '@mui/material'
import { Box } from '@mui/material';


const Circle5styled = styled(Box)(({ theme }) => ({
    borderRadius: '50%',
    backgroundColor: '#3457b21a',
    zIndex: '-1',
    position: 'absolute',
    [theme.breakpoints.down('sm')]: {
        width: '100px',
        height: '100px',
        top:'-9vh',
        left: '24vw' ,
        },
        
    [theme.breakpoints.up('sm')]: {
        width: '360px',
        height: '360px',
        top:'-26vh',
        left: '16vw' ,
    },

    [theme.breakpoints.up('xl')]: {
        width: '500px',
        height: '500px',
        top:'-16vh',
        left: '20vw' ,
    },
    
}));

const Circle5 = () => {
    return ( 
        <Circle5styled /> 
     );
}
 
export default Circle5;