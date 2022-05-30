import React from 'react'
import {Box, Typography} from "@mui/material"
import { DiscoverList } from './DiscoverList';


const DiscoverTextAndListBox = () => {
    return ( 
    <Box sx={{paddingRight:{ md: '2rem' },paddingLeft:{ xs: '2rem' }, display:'flex', flexDirection:'column', }}>
        <Typography fontSize='2.8rem' sx={{ fontWeight: 500 }} variant="h1" color="white">Discover new music</Typography>
            <Box>
                <DiscoverList />
            </Box>
        <Typography   sx={{ paddingBottom:'1.4rem', paddingRight:'1rem'}} fontSize='1rem' variant="body1" color="white">By joining you can benefit by listening to the latest albums released.</Typography>
    </Box>
     );
}
 
export default DiscoverTextAndListBox;