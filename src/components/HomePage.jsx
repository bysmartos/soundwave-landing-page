import React from 'react';
import { Fragment } from 'react';
import { Box } from '@mui/material';
import { Button } from '@mui/material';
import girl from '../images/landing-page-girl.png'
import { Typography } from '@mui/material';
import {styled}  from '@mui/material' 
import Circle1 from './Circle1';
import Circle2 from './Circle 2';
import Circle3 from './Circle3';


const ColorButton = styled(Button)(({ theme }) => ({
    backgroundColor: '#1762A7',
    '&:hover': {
      backgroundColor: '#2180d8',
    },
    '&:focus': {
        backgroundColor: '#2796ff',
      },
      width: '6rem',
      textTransform: 'none'
  }));


const HomePage = () => {
    return ( 
        <>
        <Box sx={{  display:'flex', justifyContent: 'center'}}>
            <Box className='homePage'>
                <Box className='girlContainer' sx={{display: { xs: 'none', md: 'flex'}}}>
                    <img className='girl' src={girl} alt="landing-page-girl" />
                </Box>
                <Box className='textContainer'sx={{ paddingRight:{xs:'1rem'}, paddingLeft:{xs:'2rem'} }}>
                    <Box sx={{  display: { xs: 'flex', md: 'flex' }, flexDirection: 'column',  flexWrap: 'wrap'}}>
                        <Typography fontSize='3.4rem' sx={{ fontWeight: 500, paddingBottom:'1.4rem' }} variant="h1" color="white">Feel The Music</Typography>
                        <Typography   sx={{ paddingBottom:'1.4rem' }} fontSize='1.2rem' variant="body1" color="white">Stream over 20 thousand songs with one click</Typography>
                        <ColorButton variant="contained"  >Join Now</ColorButton>
                    </Box>
                </Box>
            </Box>
        </Box>
        
        </>

     );
}
 
export default HomePage;
