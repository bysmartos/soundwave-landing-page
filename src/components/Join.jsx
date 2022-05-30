import React from 'react'
import Footer from './Footer';
import { Box,Typography,styled } from '@mui/material';
import Login from './JoinLogin';
import Circle4 from './Circle4';
import Circle5 from './Circle5';



  const StyledTypography = styled(Typography)(({ theme }) => ({
    color: '#BC3A80',
   
  }));

  

const Join = () => {
    return ( 
    <div className='Joinout'>
        <Circle4 />
        <Circle5 />
        <Box  id='Join'sx={{  display:'flex', justifyContent: 'center', flexWrap: 'wrap'}} >
            <Box className='JoinBox'  sx={{ display: 'flex', alignItems:'center', flexDirection: { xs: 'column', md: 'row' }}}>
                  <Box sx={{paddingRight:{ md: '2rem', xl: '6rem' },padding:{ xs: '2rem' }, display:'flex', flexWrap: 'wrap' }}>
                      <Typography sx={{ fontWeight: '900' }}fontSize='3.6rem'  variant="body1" color="white">Join the&nbsp;</Typography>
                      <StyledTypography  sx={{ fontWeight: '900' }} fontSize='3.6rem' variant="body1" > fun.</StyledTypography>
                  </Box>
                  <Box >
                    <Login/>
                  </Box>
            </Box>
        </Box>
        <Footer/>
    </div>
     );
}
 
export default Join;