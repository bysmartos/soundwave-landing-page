import * as React from 'react';
import { Box, Toolbar, AppBar } from '@mui/material';
import FooterNavMenu from './FooterNavMenu';
import FooterRRSS from './FooterRRSS';


export default function Footer() {
  return (
    <>
      <AppBar color="secondary"    position='static' style={{boxShadow: "none"}} sx={{ top: 'auto', bottom: 0 }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-around'}}>
          <Box sx={{ display:'flex',}} >
            <FooterNavMenu/>
          </Box>
          <Box sx={{ display:'flex', paddingLeft: 2 }} >
            <FooterRRSS/>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}