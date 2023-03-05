import {List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'
import BubbleChartIcon from '@mui/icons-material/BubbleChart';
import FaceIcon from '@mui/icons-material/Face';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { useNavigate } from 'react-router-dom';


function Sidebar() {
  return (
    <>
    <List>
        <ButtonSideBoard text={"Página principal"} href={"/"} icon={<BubbleChartIcon sx={{color: 'white'}}/>}/>
        <SecondaryText text={"Registros"} />
        <ButtonSideBoard text={"Beneficiarios"} href={"/beneficiarios"}  icon={<FaceIcon sx={{color: 'white'}}/>}/>
        <ButtonSideBoard text={"Voluntarios"} href={"/voluntarios"} icon={<PeopleAltIcon sx={{color: 'white'}}/>}/>
        <ButtonSideBoard text={"Actividades"} href={"/actividades"} icon={<FormatListBulletedIcon sx={{color: 'white'}}/>}/>
        <ButtonSideBoard text={"Subvenciones"} href={"/subvenciones"}  icon={<AttachMoneyIcon sx={{color: 'white'}}/>} />
    </List>
    </>

  )
}

export default Sidebar
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

const ButtonSideBoard = ({text, icon, href}) => {
    const navigate = useNavigate()

    return (
      <ListItem onClick={()=> navigate(href)} sx={{
          color: "white",
          filter: "drop-shadow(1px 1px 1px rgba(0,0,0,0.1))",
          fontSize: "10%",
          "& .MuiTypography-root":{
            fontSize: "0.85rem"
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

