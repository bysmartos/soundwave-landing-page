import React from 'react'
import {List, ListItem, Fragment, Typography} from '@mui/material'
import charts from '../images/microphone.svg'
import album from '../images/albums.svg'
import more from '../images/more.svg';
import {styled}  from '@mui/material' 



const StyledListItem = styled(ListItem)(({ theme }) => ({
  backgroundColor: '#202027',
  width:'6rem',
  height: '6rem',
  alignItems: 'center',
  display: 'flex',

}));
export const DiscoverList = () => {
  return (
    <>
    <List sx={{ display:'flex', justifyContent:'flex-start',paddingBottom: '1rem' }}>
    <StyledListItem sx={{ display:'flex', marginRight:'1rem', flexDirection: 'column', justifyContent:'center', alignContent: 'center' }}>
    <img className='logosDiscover' src={charts} alt="" />
    <Typography color='white' variant="body1" >Charts</Typography>

    </StyledListItem>
    <StyledListItem  sx={{ display:'flex', marginRight:'1rem', flexDirection: 'column', justifyContent:'center', alignContent: 'center'  }}>
        <img className='logosDiscover' src={album} alt="" />
        <Typography color='white' variant="body1" >Albums</Typography>

    </StyledListItem>
    <StyledListItem sx={{ display:'flex', flexDirection: 'column', justifyContent:'center', alignContent: 'center' }} >
        <img className='logosDiscover' src={more} alt="" />
        <Typography color='white' variant="body1" >More</Typography>

    </StyledListItem>
    </List>
    </>
  )
}


