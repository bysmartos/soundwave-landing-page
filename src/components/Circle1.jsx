import React from 'react';
import {styled} from '@mui/material'
import { Box } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';


const Circle1styled = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down('sm')]: {
        borderRadius: '50%',
        backgroundColor: '#bc3a801a',
        zIndex: '-1',
        width: '100px',
        height: '100px',
        position: 'absolute',
        top:'76vh',
        left: '6vw' ,
        },
        [theme.breakpoints.up('sm')]: {
    borderRadius: '50%',
	backgroundColor: '#bc3a801a',
	zIndex: '-1',
	width: '280px',
    height: '280px',
    position: 'absolute',
	top:'40vh',
	left: '10vw' ,
    }
    
  }));


const Circle1 = () => {
    return ( 
        <Circle1styled />
     );
}
 
export default Circle1;