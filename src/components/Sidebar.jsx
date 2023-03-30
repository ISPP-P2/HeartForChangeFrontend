import {Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'
import BubbleChartIcon from '@mui/icons-material/BubbleChart';
import FaceIcon from '@mui/icons-material/Face';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { useLocation, useNavigate } from 'react-router-dom';
import CustomFlex from './CustomFlex';
import PrivacyTipIcon from '@mui/icons-material/PrivacyTip';


function Sidebar({handleClose}) {
  return (
    <>
      <List>
          <ButtonSideBoard text={"Página principal"} href={"/ong"} handleClose={handleClose} icon={<BubbleChartIcon sx={{color: 'white'}}/>}/>
          <SecondaryText text={"Registros"} />
          <ButtonSideBoard text={"Beneficiarios"} href={"/ong/beneficiarios"} handleClose={handleClose} icon={<FaceIcon sx={{color: 'white'}}/>}/>
          <ButtonSideBoard text={"Voluntarios"} href={"/ong/voluntarios"} handleClose={handleClose} icon={<PeopleAltIcon sx={{color: 'white'}}/>}/>
          <ButtonSideBoard text={"Actividades"} href={"/ong/actividades"} handleClose={handleClose} icon={<FormatListBulletedIcon sx={{color: 'white'}}/>}/>
          <ButtonSideBoard text={"Subvenciones"} href={"/ong/subvenciones"} handleClose={handleClose} icon={<AttachMoneyIcon sx={{color: 'white'}}/>} />
          <SecondaryText text={"Utilidad"} />
          <ButtonSideBoard text={"Privacidad"} href={"/ong/privacidad"} handleClose={handleClose} icon={<PrivacyTipIcon sx={{color: 'white'}}/>} />


      </List>
    </>
  )
}
export default Sidebar

export const  SidebarVoluntario = ({handleClose}) =>  {
  return (
    <>
      <List>
          <ButtonSideBoard text={"Página principal"} href={"/vol"} handleClose={handleClose} icon={<BubbleChartIcon sx={{color: 'white'}}/>}/>
          <SecondaryText text={"Registros"} />
          <ButtonSideBoard text={"Mis actividades"} href={"/vol/activities"} handleClose={handleClose} icon={<FaceIcon sx={{color: 'white'}}/>}/>
      </List>
    </>
  )
}


const SecondaryText = ({text}) => {
  return (
    <ListItemText 
    sx={{
      filter: "drop-shadow(1px 1px 1px rgba(0,0,0,0.4))",
      padding: 0 + "important!",
      marginLeft: "1.5rem",
      color: 'white  important!',
      "& .MuiTypography-root":{
        fontWeight: 500,
        fontSize: "0.9rem",
        padding: 0 + " !important",
        color: 'white !important'
      }
    }} primary={text} />
  )
}

export const ButtonSideBoard = ({text, icon, href, handleClose}) => {
    const navigate = useNavigate()
    const location = useLocation()
    return (
      <ListItem onClick={()=> {
          handleClose()
          navigate(href)
        }} sx={{
          color: "white",
          filter: "drop-shadow(1px 1px 1px rgba(0,0,0,0.1))",
          backgroundColor: location.pathname === href ? "#f28635" : null,
          "& .MuiTypography-root":{
            fontSize: "0.95rem"
          }
      }} disablePadding>
            <ListItemButton>
                <ListItemIcon>
                   {icon}
                </ListItemIcon>
                <ListItemText primary={text} sx={{  
                  fontSize: "1px"
                }}/>
            </ListItemButton>
        </ListItem>
    )
}

