import * as React from 'react';
import { styled,Link } from '@mui/material';




const StyledLink = styled(Link)(({ theme }) => ({
  '&:hover': {
    color: '#ADADAD',
  },
  textDecoration: 'none',
  fontWeight: 'bold',
  color:"white"

}));

export default function FooterNavMenu() {
  return (
    <>
        <StyledLink variant="body1" href='' >
            About Us
        </StyledLink>
        <StyledLink sx={{ paddingLeft: 2 }} variant="body1" href=''>
            Contact
        </StyledLink>
        
    </>
  );
}