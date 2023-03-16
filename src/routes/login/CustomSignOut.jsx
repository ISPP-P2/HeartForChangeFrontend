import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import React from 'react'
import { useSignOut } from 'react-auth-kit'

import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';
export const CustomSignOut = () => {
    const signOut = useSignOut()
    const navigate = useNavigate()

    return (
      <ListItem  sx={{
        color: "white",
        height: "3rem",
        justifySelf: "end",
        filter: "drop-shadow(1px 1px 1px rgba(0,0,0,0.1))",
        "& .MuiTypography-root":{
          fontSize: "0.95rem"
        }
          }} disablePadding>
          <ListItemButton onClick={()=> {
                navigate("/")
                signOut()
            }}>
              <ListItemIcon sx={{
                color: "white",
                fontSize: "1.5rem",
                marginRight: "0.5rem"
              }}>
                    <LogoutIcon />
              </ListItemIcon>
  
              <ListItemText primary={"Cerrar sesión"} sx={{  
                fontSize: "1px"
              }}/>
          </ListItemButton>
      </ListItem>
    )
  }