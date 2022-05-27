import React from 'react'
import Footer from './Footer';
import {Box} from "@mui/material"
import { Typography } from '@mui/material';
import { Fragment } from '@mui/material';
import covers from '../images/covers.jpg'
import { DiscoverList } from './DiscoverList';


const Discover = () => {
    return ( 
        <>
       
        <Box sx={{  display:'flex', justifyContent: 'center', flexWrap: 'wrap',}} >
            <Box className='discoverBox'>
                <Box sx={{paddingRight:'2rem', display:'flex', flexDirection:'column', }}>
                    <Typography fontSize='3.4rem' sx={{ fontWeight: 500, paddingBottom:'1.4rem' }} variant="h1" color="white">Discover new music</Typography>
                        <Box>
                        <DiscoverList />
                        </Box>
                   <Typography   sx={{ paddingBottom:'1.4rem', paddingRight:'1rem'}} fontSize='1rem' variant="body1" color="white">By joining you can benefit by listening to the latest albums released.</Typography>
                </Box>
                <Box >
                    <Box >
                      <img className='imgDiscover' src={covers} alt="" />
                    </Box>
                </Box>
            </Box>
        </Box>
        
<Footer/>
</>
)}
 
export default Discover;