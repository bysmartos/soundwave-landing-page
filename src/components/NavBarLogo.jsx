import React from 'react';
import logo from '../images/logo.png'
import { Box, Typography } from '@mui/material';

const NavbarLogo = () => {
 
    return ( 
    <>
        <Box sx={{ display: 'flex', alignContent: 'center', alignItems: 'center'}} >
            <img className= 'logo' src={logo}  alt="logo" />
            <Typography  fontSize='1.2rem' sx={{ display: 'flex', alignItems: 'center',  paddingLeft: 2, }} variant="h6" color='white'>
                Soundwave
            </Typography>
        </Box>   
    </>
     );
}  
export default NavbarLogo;