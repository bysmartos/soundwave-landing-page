import React from 'react'
import {List, ListItem, Fragment, Typography} from '@mui/material'
import charts from '../images/microphone.svg'
import album from '../images/albums.svg'
import more from '../images/more.svg';

export const DiscoverList = () => {
  return (
    <>
    <List sx={{ display:'flex' }}>
    <ListItem sx={{ display:'flex', flexDirection: 'column' }}>
    <img src={charts} alt="" />
    <Typography variant="body1" color="initial">Charts</Typography>

    </ListItem>
    <ListItem sx={{ display:'flex', flexDirection: 'column' }}>
        <img src={album} alt="" />
        <Typography variant="body1" color="initial">Albums</Typography>

    </ListItem>
    <ListItem sx={{ display:'flex', flexDirection: 'column' }} >
        <img src={more} alt="" />
        <Typography variant="body1" color="initial">More</Typography>

    </ListItem>
    </List>
    </>
  )
}


