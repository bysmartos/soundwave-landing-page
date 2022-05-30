import React from 'react';
import { Box,Link,MenuItem, styled } from '@mui/material';

const pages = ['Discover', 'Join']



const StyledLink = styled(Link)(({ theme }) => ({
  '&:hover': {
    color: '#ADADAD',
  },
  color: 'white',
  textDecoration: 'none',
  fontSize: '1rem'

}));




const NavbarMenu = () => {
 
    return ( 
    <>
        <Box sx={{   display: { xs: 'flex', md: 'flex' },  }}>
            {pages.map((page, index) => (
                <MenuItem key={index} sx={{ my: 2, color: 'white', }} > 
                    <StyledLink variant="body2" href={`#${page}`}>{page}</StyledLink> 
                </MenuItem>
            ))}
        </Box> 
      </>
     );
}  
export default NavbarMenu;