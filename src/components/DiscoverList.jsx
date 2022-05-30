import React from 'react'
import {List, ListItem, styled, Link } from '@mui/material'
import charts from '../images/microphone.svg'
import album from '../images/albums.svg'
import more from '../images/more.svg';



const StyledListItem = styled(ListItem)(({ theme }) => ({
  backgroundColor: '#202027',
  width:'5rem',
  height: '5rem',
  alignItems: 'center',
  display: 'flex',

}));


const StyledLink = styled(Link)(({ theme }) => ({
  '&:hover': {
    color: '#ADADAD',
  },
  textDecoration: 'none',
  fontWeight: 'bold',
  color:"white"

}));


export const DiscoverList = () => {
  return (
    <>
      <List sx={{ display:'flex', justifyContent:'flex-start',paddingBottom: '1rem',paddingTop: '1rem' }}>
        <StyledListItem sx={{ display:'flex', marginRight:'1rem', flexDirection: 'column', justifyContent:'center', alignContent: 'center' }}>
          <img className='logosDiscover' src={charts} alt="" />
          <StyledLink  variant="body1" >Charts</StyledLink>
        </StyledListItem>

        <StyledListItem  sx={{ display:'flex', marginRight:'1rem', flexDirection: 'column', justifyContent:'center', alignContent: 'center'  }}>
            <img className='logosDiscover' src={album} alt="" />
            <StyledLink  variant="body1" >Albums</StyledLink>
        </StyledListItem>

        <StyledListItem sx={{ display:'flex', flexDirection: 'column', justifyContent:'center', alignContent: 'center' }} >
            <img className='logosDiscover' src={more} alt="" />
            <StyledLink  variant="body1" >More</StyledLink>
        </StyledListItem>
        
      </List>
    </>
  )
}


