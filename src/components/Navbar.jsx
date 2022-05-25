import React from 'react';
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import logo from '../images/logo.png'
import { spacing } from '@mui/system';
import { Box } from '@mui/material';
import { Menu, MenuItem } from '@mui/material';
import Button from '@mui/material/Button';

const pages = ['Discover', 'Join'];

const Navbar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
    return ( 
        <AppBar  color="transparent"  elevation={0} position="fixed" sx={{ paddingTop: 2 }} style={{boxShadow: "none"}}>
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-around'}}>
            <Box className='logoNavbar' sx={{ display: 'flex'}} >
            <img src={logo}  alt="logo" />
            <Typography  sx={{ display: 'flex', alignItems: 'center',  paddingLeft: 2, }} variant="h6" color='white'>
              Soundwave
            </Typography>
            </Box>
            <Box sx={{   display: { xs: 'flex', md: 'flex' },  }}>
            {pages.map((page) => (
              <MenuItem
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', }}
              >
                {page}
              </MenuItem>
            ))}
          </Box>
            
          </Toolbar>
        </AppBar>
     );
}  
export default Navbar;