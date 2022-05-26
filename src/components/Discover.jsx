import React from 'react'
import Footer from './Footer';
import {Box} from "@mui/material"
import { Typography } from '@mui/material';
import { Fragment } from '@mui/material';
import charts from '../images/microphone.svg'
import album from '../images/albums.svg'
import more from '../images/more.svg';
import { DiscoverList } from './DiscoverList';

const Discover = () => {
    return ( 
        <>
        <Box sx={{  display:'flex', justifyContent: 'center'}} >
            <Box className='discoverBox'>
                <Box >
                    <Typography fontSize='3.4rem' sx={{ fontWeight: 500, paddingBottom:'1.4rem' }} variant="h1" color="white">Discover new music</Typography>
                        <Box>
                        <DiscoverList />
                        </Box>
                   <Typography   sx={{ paddingBottom:'1.4rem' }} fontSize='1.2rem' variant="body1" color="white">By joining you can benefit by listening to the latest albums released.</Typography>
                </Box>
                <Box >
                    <Box >
                      <img src="" alt="" />
                    </Box>
                </Box>
            </Box>
        </Box>
        
<Footer/>
</>
)}
 
export default Discover;