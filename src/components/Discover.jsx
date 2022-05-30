import React from 'react'
import Footer from './Footer';
import {Box, styled} from "@mui/material"
import covers from '../images/covers.jpg'
import DiscoverTextAndListBox from './DiscoverTextAndListBox';


const DiscoverBoxStyled = styled(Box)(({ theme }) => ({
    display:'flex',  
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
        height: '77vh',
    },

    [theme.breakpoints.up('sm')]: {
        height: '100vh',
    },

  }));

const Discover = () => {
    return ( 
    <>
        <Box id='Discover' sx={{  display:'flex', justifyContent: 'center', flexWrap: 'wrap', alignItems:'center'}} >
            <DiscoverBoxStyled   sx={{  flexDirection: { xs: 'column', md: 'row' }, marginTop: {xs:'2rem'}, marginRight: {xs:'1rem'}}}>
                <DiscoverTextAndListBox/>
                <Box >
                    <Box >
                    <img className='imgDiscover' src={covers} alt="" />
                    </Box>
                </Box>
            </DiscoverBoxStyled>
        </Box>
        
        <Footer/>
    </>
)}
 
export default Discover;