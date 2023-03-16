import { AppBar, Avatar, Toolbar } from "@mui/material"
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import users from "../static/user";
import { useAuthUser } from "react-auth-kit";

const drawerWidth = 200;
export const TopBar = ({ handleDrawerToggle }) => {

  const user = useAuthUser();
  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
        background: "rgb(255,137,49)",
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
        <div style={{ display: 'flex', justifyContent: 'flex-end', flexGrow: 1, color: "white", fontWeight: 600, marginRight: "1rem" }}>
          <Typography variant="h6" noWrap component="div" alignItems="right">
            Bienvenido, {user().username}
          </Typography>
        </div>
       

      </Toolbar>

    </AppBar>
  )
}