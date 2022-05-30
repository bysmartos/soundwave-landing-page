import React from 'react';
import { Box} from '@mui/material';
import Circle1 from './Circle1';
import Circle2 from './Circle 2';
import Circle3 from './Circle3';
import HPTextBox from './HPTextBox';
import HPBoxGirlImg from './HPBoxGirlImg';



const HomePage = () => {
    return ( 
        <div className='homePageGeneralDiv'>
            <Circle1/>
            <Circle2/>
            <Circle3/>
            <Box sx={{ display:'flex',   justifyContent: 'center' }}>
                <Box sx={{ display:'flex'}}  >
                    <HPBoxGirlImg/>  
                    <HPTextBox/>
                </Box>
            </Box>
        </div>

     );
}
 
export default HomePage;
