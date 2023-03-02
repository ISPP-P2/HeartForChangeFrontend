import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'
import InboxIcon from '@mui/icons-material/MoveToInbox';


function Sidebar() {

  return (
    <List>
        <ListItem disablePadding>
            <ListItemButton>
                <ListItemIcon>
                    <InboxIcon />
                </ListItemIcon>
                <ListItemText primary={"Dashboard"}/>
            </ListItemButton>
        </ListItem>
    </List>
  )
}

export default Sidebar


