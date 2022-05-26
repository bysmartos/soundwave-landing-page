import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';

import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import facebook from '../images/facebook.svg';
import twitter from '../images/twitter.svg';
import { sizing } from '@mui/system';


export default function Footer() {
  return (
    <>
      <AppBar color="secondary"  elevation={0} position="static" style={{boxShadow: "none"}} sx={{ top: 'auto', bottom: 0 }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-around'}}>
          <Box sx={{ display:'flex',}} >
            <Typography sx={{ fontWeight: 'bold' }} variant="body1" color="white">About Us</Typography>
            <Typography sx={{ fontWeight: 'bold', paddingLeft: 2 }} variant="body1" color="white"> Contact</Typography>
          </Box>
          <Box sx={{ display:'flex', paddingLeft: 2 }} >
          <Box sx={{  display: { xs: 'flex', md: 'flex' }, flexDirection: { xs: 'column', md:'row' }, alignItems: { xs: 'center' }}} >
                  <img className='rrss'  src={twitter} alt="" />
                  <Typography sx={{ fontWeight: 'bold',paddingLeft: 1 }} variant="body1" color="white">Twitter</Typography>
              </Box>
              <Box sx={{ display: { xs: 'flex', md: 'flex' }, paddingLeft: 2, flexDirection: { xs: 'column',md:'row' }, alignItems: { xs: 'center' }}} >
                  <img className='rrss' src={facebook} alt="" />
                  <Typography sx={{ fontWeight: 'bold', paddingLeft: 1 }} variant="body1" color="white">Facebook</Typography>
              </Box>
              
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}