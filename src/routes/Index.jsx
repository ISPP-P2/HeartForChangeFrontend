import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import { TopBar } from '../components/TopBar';
import Sidebar, { SidebarVoluntario } from '../components/Sidebar';
import AutorizedRoutes from './authorized/AuthorizedRoutes';
import LogoNavBar from '../components/LogoNavBar';
import IndexRoutes from './authorizedVolunteer/IndexRoutes';
import { useAuthUser } from 'react-auth-kit';

const drawerWidth = 200;



export default function Index({ window } ) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const auth = useAuthUser()

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleClose = () => {
    setMobileOpen(false);
  };

  const drawer = (
    <div>
      <Toolbar />
      {auth().rol === "ONG" ? <Sidebar handleClose={handleDrawerToggle}/> : <SidebarVoluntario handleClose={handleClose}/> }
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <TopBar handleDrawerToggle={handleDrawerToggle}/>
      <Box
            component="nav"
            sx={{ 
              width: { sm: drawerWidth }, flexShrink: { sm: 0 },
              "& .MuiToolbar-root": {
                minHeight: "1em",
              }
              }}>
            <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
           
          sx={{
            background: "rgb(0,0,0,0.1)",
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            '& .MuiPaper-root': {
              background: "rgb(255,137,49)",
              background:" linear-gradient(173deg, rgba(255,137,49,1) 0%, rgba(255,137,49,1) 20%, rgba(255,182,81,1) 100%)",
            }
          }}>
          <LogoNavBar />
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            '& .MuiPaper-root': {
              background: "rgb(255,137,49)",
              background:" linear-gradient(173deg, rgba(255,137,49,1) 0%, rgba(255,137,49,1) 20%, rgba(255,182,81,1) 100%)",
            }
          }}
          open>
          <LogoNavBar height={"3rem"}/>
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}>
        <Toolbar />
        {auth().rol === "ONG" ?  <AutorizedRoutes /> : <IndexRoutes/>}
      </Box>
    </Box>
    
    );
}


