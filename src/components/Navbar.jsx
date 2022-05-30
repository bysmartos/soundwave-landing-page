import React from 'react';
import {styled,AppBar,Toolbar } from '@mui/material';
import NavbarLogo from './NavBarLogo';
import NavbarMenu from './NavBarMenu';


const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: '#202027',

}));


const Navbar = () => {
 
    return ( 
    <>
        <StyledAppBar  position='fixed'  elevation={0}  sx={{ flexWrap: 'wrap' }} style={{boxShadow: "none"}}>
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-around'}}>
            <NavbarLogo/>
            <NavbarMenu/>
          </Toolbar>
        </StyledAppBar>
      </>
     );
}  
export default Navbar;