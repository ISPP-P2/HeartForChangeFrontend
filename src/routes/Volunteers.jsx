import * as React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import { TopBar } from '../components/TopBar';
import Sidebar from '../components/Sidebar';
import AutorizedRoutes from './authorized/AuthorizedRoutes';
import BasicTable from '../components/BasicTable';
import CustomCard from '../components/CustomCard'
import users from '../static/user'
import { Avatar } from '@mui/material';

import AccessibilityTwoToneIcon from '@mui/icons-material/AccessibilityTwoTone';

const drawerWidth = 240;





function Volunteers() {
  const objetoTabla = {
    header: ["Avatar","Nombre", "Apellidos", "Email", "Edad"],
    items: [[<Avatar src="https://randomuser.me/api/portraits/women/22.jpg" sx={{width: 56, height: 56 }}/>,"Mario","Rey","mariorey@gmail.com","23"]],
    details: {
      header: ["Date","ActivityName"],
      items: [["22-03-2023","Paintball"],]
    }
  }

  return (
    <Box>
        
        <CustomCard title="Volunteers" quantity={users.length}> </CustomCard>
        <BasicTable objetoTabla = {objetoTabla}></BasicTable>
      </Box>


    
    );
}

export default Volunteers;