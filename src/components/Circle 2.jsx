import React from 'react';
import {styled} from '@mui/material'
import { Box } from '@mui/material';


const Circle2styled = styled(Box)(({ theme }) => ({
    borderRadius: '50%',
	backgroundColor: '#3457b21a',
	zIndex: '-1',
    position: 'absolute',
	width: '280px',
    height: '280px',
	top:'22vh',
	left: '30vw' ,

  }));

const Circle2 = () => {
    return ( 
        <Circle2styled sx={{display: { xs: 'none', md: 'inline'}}}/>
        
     );
}
 
export default Circle2;