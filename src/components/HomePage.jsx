import React from 'react';
import { Fragment } from 'react';
import { Box } from '@mui/material';
import { Button } from '@mui/material';
import girl from '../images/landing-page-girl.png'
import { Typography } from '@mui/material';



const HomePage = () => {
    return ( 
        <>
        <Box className='homePage' sx={{ top: 'auto', bottom: 0 }}>
            <img className='girl' src={girl} alt="landing-page-girl" />
            {/* <Box>
                <Typography variant="body1" color="white">Feel the music</Typography>
                <Typography variant="body1" color="white">Stream over 20 thousand songs with one click</Typography>
                <Button>Join Now</Button>
            </Box> */}
        </Box>
        </>

     );
}
 
export default HomePage;
