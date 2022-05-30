import React from 'react';
import { Box,Button, Typography, styled } from '@mui/material';


const StyledButton = styled(Button)(({ theme }) => ({
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
  
  const TextBoxStyled = styled(Box)(({ theme }) => ({
    display:'flex',  
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
        paddingRight: '1rem',
        paddingLeft: '2rem',
        height: '100vh',
    },
    [theme.breakpoints.up('sm')]: {
        paddingLeft: '0rem',
        height: '90vh',
    },
    [theme.breakpoints.up('xl')]: {
        paddingLeft: '10rem',
        height: '90vh',
        },
    
  }));
  
    

const HPTextBox = () => {
    return ( 
<TextBoxStyled >
    <Box sx={{  display: { xs: 'flex', md: 'flex' }, flexDirection: 'column',  flexWrap: 'wrap', paddingTop: {  md: '6rem', xl: '0rem' }, paddingLeft: {  md: '6rem', xl: '0rem' }}}>
        <Typography fontSize='3.4rem' sx={{ fontWeight: 500, paddingBottom:'1.4rem' }} variant="h1" color="white">Feel The Music</Typography>
        <Typography   sx={{ paddingBottom:'1.4rem' }} fontSize='1.2rem' variant="body1" color="white">Stream over 20 thousand songs with one click</Typography>
        <StyledButton variant="contained"  >Join Now</StyledButton>
    </Box>
</TextBoxStyled>

     );
}
 
export default HPTextBox;