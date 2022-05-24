import React, {Fragment} from 'react';
import {AppBar,Toolbar,Typography,} from '@mui/material';
import  logo from '../images/logo.png'
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';

const pages = ['Discover', 'Join'];
const Navbar2 = () => {
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
        <>
        <AppBar display='flex' align="center" color="transparent" elevation={0} position='static'>
            <Toolbar>
            <img sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} className='logo' src={logo} alt='logo'/>
                <Typography variant="body-1"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex' },
              flexGrow: 1,
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'white',
              textDecoration: 'none',
            }}  >
                    Soundwave
                </Typography>
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, alignSelf: 'flex-end' }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
            </Toolbar>
        </AppBar>
        </>
     );
}
 

export default Navbar2;