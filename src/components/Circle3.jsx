import React from 'react';
import {styled} from '@mui/material'
import { Box } from '@mui/material';


const Circle3styled = styled(Box)(({ theme }) => ({
    borderRadius: '100% 0 0',
	backgroundColor: '#3457b21a',
	zIndex: '-1',
    position: 'absolute',
	width: '400px',
    height: '400px',
    top: '36vh',
    left: '70vw',


  }));

const Circle3 = () => {
    return ( 
        <Circle3styled sx={{display: { xs: 'none', md: 'inline'}}}/>
     );
}
 
export default Circle3;