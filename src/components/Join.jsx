import React from 'react'
import Footer from './Footer';
import { Box } from '@mui/material';
import { Typography } from '@mui/material';


const Join = () => {
    return ( 
    <>
        <Box sx={{  display:'flex', justifyContent: 'center'}}>
            <Box className='joinPage'>
                <Box className='joincontainertext' sx={{display: { xs: 'none', md: 'flex'}}}>
                <Typography   sx={{ paddingBottom:'1.4rem' }} fontSize='1.2rem' variant="body1" color="white">Join the</Typography>
                <Typography   sx={{ paddingBottom:'1.4rem' }} fontSize='1.2rem' variant="body1" color="white">fun.</Typography>
                </Box>
                <Box className='formContainer'sx={{ paddingRight:{xs:'1rem'}, paddingLeft:{xs:'2rem'} }}>
                    <Box sx={{  display: { xs: 'flex', md: 'flex' }, flexDirection: 'column',  flexWrap: 'wrap'}}>
                    </Box>
                </Box>
            </Box>
        </Box>
        <Footer/>
    </>
     );
}
 
export default Join;