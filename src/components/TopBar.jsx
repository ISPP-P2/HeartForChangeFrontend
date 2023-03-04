import { AppBar, Avatar, Toolbar } from "@mui/material"
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import users from "../static/user";

const drawerWidth = 240;
export const TopBar = ({ handleDrawerToggle }) => {

  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
        background: 'linear-gradient(to right, #FFA500, #FFFFFF)',
      }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
        <div style={{ display: 'flex', justifyContent: 'flex-end', flexGrow: 1, color: "black", marginRight: "1rem" }}>
          <Typography variant="h6" noWrap component="div" alignItems="right">
            Bienvenido, {users[0].name}
          </Typography>
        </div>
        <Avatar
          alt="Remy Sharp"
          src={users[0].avatarImage}
          sx={{ width: 56, height: 56 }}>
        
        </Avatar>

      </Toolbar>

    </AppBar>
  )
}