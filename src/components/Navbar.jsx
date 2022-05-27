import React from 'react';
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import logo from '../images/logo.png'
import { spacing } from '@mui/system';
import { Box } from '@mui/material';
import { Menu, MenuItem } from '@mui/material';
import Button from '@mui/material/Button';
import { styled } from '@mui/material';
import {useScrollTrigger} from '@mui/material';
import {Slide} from '@mui/material';
import PropTypes from 'prop-types';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';


const pages = ['Discover', 'Join'];


const ColorAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: '#202027',

}));

// function HideOnScroll(props){
//   const  {children}  = props;
//   const trigger = useScrollTrigger();
//   return (
//     <Slide appear={false} direction="down" in={!trigger}>
//       {children}
//     </Slide>
//   );
// }

// HideOnScroll.propTypes = {
//   children: PropTypes.element.isRequired,
 
// };



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
    <>
        <ColorAppBar  position='fixed'  elevation={0}  sx={{ flexWrap: 'wrap' }} style={{boxShadow: "none"}}>
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-around'}}>
            <Box className='logoNavbar' sx={{ display: 'flex'}} >
            <img className= 'logo' src={logo}  alt="logo" />
            <Typography  fontSize='1.2rem' sx={{ display: 'flex', alignItems: 'center',  paddingLeft: 2, }} variant="h6" color='white'>
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
        </ColorAppBar>
      </>
     );
}  
export default Navbar;