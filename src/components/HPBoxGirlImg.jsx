import React from 'react';
import { Box, styled } from '@mui/material';
import girl from '../images/landing-page-girl.png'



const BoxgirlImg = styled(Box)(({ theme }) => ({
    height:'100vh',
	display: 'flex',
	alignItems: 'flex-end',
    [theme.breakpoints.down('sm')]: {
        display:'none'
    },
        
    [theme.breakpoints.up('sm')]: {
        display: 'flex'
    },
}));
    
const HPBoxGirlImg = () => {
    return ( 
        <BoxgirlImg >
            <img className='girl' src={girl} alt="landing-page-girl" />
        </BoxgirlImg>
     );
}
 
export default HPBoxGirlImg;