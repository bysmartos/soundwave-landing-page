import * as React from 'react';
import { styled,Link,Box } from '@mui/material';
import facebook from '../images/facebook.svg';
import twitter from '../images/twitter.svg';



const StyledLink = styled(Link)(({ theme }) => ({
  '&:hover': {
    color: '#ADADAD',
  },
  textDecoration: 'none',
  fontWeight: 'bold',
  color:"white"

}));

export default function FooterRRSS() {
  return (
    <>
        <Box sx={{  display: { xs: 'flex', md: 'flex' }, flexDirection: { xs: 'column', md:'row' }, alignItems: { xs: 'center' }}} >
            <img className='rrss'  src={twitter} alt="" />
            <StyledLink sx={{ paddingLeft: 1 }} variant="body1" href=''>Twitter</StyledLink>
        </Box>
        <Box sx={{ display: { xs: 'flex', md: 'flex' }, paddingLeft: 2, flexDirection: { xs: 'column',md:'row' }, alignItems: { xs: 'center' }}} >
            <img className='rrss' src={facebook} alt="" />
            <StyledLink sx={{ paddingLeft: 1 }} variant="body1" href=''>Facebook</StyledLink>
        </Box>
        
    </>
  );
}