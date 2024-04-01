import { Box, Button, ButtonGroup, Chip, Divider, List, ListItem, ListItemButton, ListItemIcon,ListItemText } from '@mui/material';
import {Home, Inbox} from '@mui/icons-material'
import React from 'react'
import { useLocation } from 'react-router-dom';
import SideBarButtons from './SideBarButtons';



const SideBar = () => {
  
  return (
    <Box flex={2} sx={{display: {xs: "none", sm: 'none', md: 'flex'}}}>
        <Box position='fixed' sx={{width: '250px', display: 'flex', flexDirection:'column', justifyContent: 'center'}}>
        <SideBarButtons/>
        {/* <List>
          <ListItem sx={{boxShadow: '0 0 1px grey', marginBottom: '5px'}}  disablePadding>
            <ListItemButton >
              <ListItemIcon >
                <Inbox color='secondary'/>
              </ListItemIcon>
              <ListItemText sx={{color: 'purple'}} primary="Домой" />
            </ListItemButton>
          </ListItem>
          <ListItem sx={{boxShadow: '0 0 1px grey'}}  disablePadding>
            <ListItemButton >
              <ListItemIcon >
                <Inbox color='secondary'/>
              </ListItemIcon>
              <ListItemText sx={{color: 'purple'}} primary="Домой" />
            </ListItemButton>
          </ListItem>
          </List> */}
        </Box>
    </Box>
  )
}

export default SideBar