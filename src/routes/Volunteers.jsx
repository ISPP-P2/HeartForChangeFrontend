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
import users, { CustomList } from '../static/user'
import { Avatar } from '@mui/material';


const usuarios = [
    {
      nombre: "Mario",
      apellidos: "Mario",
      email: "Mario",
      Edad: "Mario",
    }, {
      nombre: "Mario",
      apellidos: "Mario",
      email: "Mario",
      Edad: "Mario",
    }, {
      nombre: "Mario",
      apellidos: "Mario",
      email: "Mario",
      Edad: "Mario",
    }, {
      nombre: "Mario",
      apellidos: "Mario",
      email: "Mario",
      Edad: "Mario",
    }, {
      nombre: "Mario",
      apellidos: "Mario",
      email: "Mario",
      Edad: "Mario",
    }, {
      nombre: "Mario",
      apellidos: "Mario",
      email: "Mario",
      Edad: "Mario",
    }, {
      nombre: "Mario",
      apellidos: "Mario",
      email: "Mario",
      Edad: "Mario",
    }, {
      nombre: "Mario",
      apellidos: "Mario",
      email: "Mario",
      Edad: "Mario",
    }, {
      nombre: "Mario",
      apellidos: "Mario",
      email: "Mario",
      Edad: "Mario",
    }, {
      nombre: "Mario",
      apellidos: "Mario",
      email: "Mario",
      Edad: "Mario",
    }, {
      nombre: "Mario",
      apellidos: "Mario",
      email: "Mario",
      Edad: "Mario",
    }, {
      nombre: "Mario",
      apellidos: "Mario",
      email: "Mario",
      Edad: "Mario",
    }, {
      nombre: "Mario",
      apellidos: "Mario",
      email: "Mario",
      Edad: "Mario",
    }, {
      nombre: "Mario",
      apellidos: "Mario",
      email: "Mario",
      Edad: "Mario",
    }, {
      nombre: "Mario",
      apellidos: "Mario",
      email: "Mario",
      Edad: "Mario",
    }, {
      nombre: "Mario",
      apellidos: "Mario",
      email: "Mario",
      Edad: "Mario",
    }, {
      nombre: "Mario",
      apellidos: "Mario",
      email: "Mario",
      Edad: "Mario",
    }, {
      nombre: "Mario",
      apellidos: "Mario",
      email: "Mario",
      Edad: "Mario",
    }, {
      nombre: "Mario",
      apellidos: "Mario",
      email: "Mario",
      Edad: "Mario",
    }, {
      nombre: "Mario",
      apellidos: "Mario",
      email: "Mario",
      Edad: "Mario",
    }, {
      nombre: "Mario",
      apellidos: "Mario",
      email: "Mario",
      Edad: "Mario",
    }, {
      nombre: "Mario",
      apellidos: "Mario",
      email: "Mario",
      Edad: "Mario",
    }, {
      nombre: "Mario",
      apellidos: "Mario",
      email: "Mario",
      Edad: "Mario",
    }, {
      nombre: "Mario",
      apellidos: "Mario",
      email: "Mario",
      Edad: "Mario",
    }, {
      nombre: "Mario",
      apellidos: "Mario",
      email: "Mario",
      Edad: "Mario",
    }, {
      nombre: "Mario",
      apellidos: "Mario",
      email: "Mario",
      Edad: "Mario",
    }, {
      nombre: "Mario",
      apellidos: "Mario",
      email: "Mario",
      Edad: "Mario",
    }, {
      nombre: "Mario",
      apellidos: "Mario",
      email: "Mario",
      Edad: "Mario",
    }, {
      nombre: "Mario",
      apellidos: "Mario",
      email: "Mario",
      Edad: "Mario",
    }, {
      nombre: "Mario",
      apellidos: "Mario",
      email: "Mario",
      Edad: "Mario",
    }, {
      nombre: "Mario",
      apellidos: "Mario",
      email: "Mario",
      Edad: "Mario",
    }, {
      nombre: "Mario",
      apellidos: "Mario",
      email: "Mario",
      Edad: "Mario",
    }, {
      nombre: "Mario",
      apellidos: "Mario",
      email: "Mario",
      Edad: "Mario",
    }, {
      nombre: "Mario",
      apellidos: "Mario",
      email: "Mario",
      Edad: "Mario",
    }, {
      nombre: "Mario",
      apellidos: "Mario",
      email: "Mario",
      Edad: "Mario",
    }, {
      nombre: "Mario",
      apellidos: "Mario",
      email: "Mario",
      Edad: "Mario",
    }, {
      nombre: "Mario",
      apellidos: "Mario",
      email: "Mario",
      Edad: "Mario",
    }, {
      nombre: "Mario",
      apellidos: "Mario",
      email: "Mario",
      Edad: "Mario",
    }, {
      nombre: "Mario",
      apellidos: "Mario",
      email: "Mario",
      Edad: "Mario",
    }, {
      nombre: "Mario",
      apellidos: "Mario",
      email: "Mario",
      Edad: "Mario",
    }, {
      nombre: "Mario",
      apellidos: "Mario",
      email: "Mario",
      Edad: "Mario",
    }, {
      nombre: "Mario",
      apellidos: "Mario",
      email: "Mario",
      Edad: "Mario",
    }, {
      nombre: "Mario",
      apellidos: "Mario",
      email: "Mario",
      Edad: "Mario",
    }, {
      nombre: "Mario",
      apellidos: "Mario",
      email: "Mario",
      Edad: "Mario",
    }, {
      nombre: "Mario",
      apellidos: "Mario",
      email: "Mario",
      Edad: "Mario",
    }, {
      nombre: "Mario",
      apellidos: "Mario",
      email: "Mario",
      Edad: "Mario",
    }, {
      nombre: "Mario",
      apellidos: "Mario",
      email: "Mario",
      Edad: "Mario",
    }, {
      nombre: "Mario",
      apellidos: "Mario",
      email: "Mario",
      Edad: "Mario",
    }, {
      nombre: "Mario",
      apellidos: "Mario",
      email: "Mario",
      Edad: "Mario",
    }, {
      nombre: "Mario",
      apellidos: "Mario",
      email: "Mario",
      Edad: "Mario",
    }, {
      nombre: "Mario",
      apellidos: "Mario",
      email: "Mario",
      Edad: "Mario",
    }, {
      nombre: "Mario",
      apellidos: "Mario",
      email: "Mario",
      Edad: "Mario",
    }, {
      nombre: "Mario",
      apellidos: "Mario",
      email: "Mario",
      Edad: "Mario",
    }, {
      nombre: "Mario",
      apellidos: "Mario",
      email: "Mario",
      Edad: "Mario",
    }, {
      nombre: "Mario",
      apellidos: "Mario",
      email: "Mario",
      Edad: "Mario",
    }, {
      nombre: "Mario",
      apellidos: "Mario",
      email: "Mario",
      Edad: "Mario",
    }, {
      nombre: "Mario",
      apellidos: "Mario",
      email: "Mario",
      Edad: "Mario",
    }, {
      nombre: "Mario",
      apellidos: "Mario",
      email: "Mario",
      Edad: "Mario",
    }, {
      nombre: "Mario",
      apellidos: "Mario",
      email: "Mario",
      Edad: "Mario",
    }, {
      nombre: "Mario",
      apellidos: "Mario",
      email: "Mario",
      Edad: "Mario",
    }, {
      nombre: "Mario",
      apellidos: "Mario",
      email: "Mario",
      Edad: "Mario",
    }, {
      nombre: "Mario",
      apellidos: "Mario",
      email: "Mario",
      Edad: "Mario",
    }, {
      nombre: "Mario",
      apellidos: "Mario",
      email: "Mario",
      Edad: "Mario",
    }, {
      nombre: "Mario",
      apellidos: "Mario",
      email: "Mario",
      Edad: "Mario",
    }, {
      nombre: "Mario",
      apellidos: "Mario",
      email: "Mario",
      Edad: "Mario",
    }, {
      nombre: "Mario",
      apellidos: "Mario",
      email: "Mario",
      Edad: "Mario",
    }, {
      nombre: "Mario",
      apellidos: "Mario",
      email: "Mario",
      Edad: "Mario",
    }, {
      nombre: "Mario",
      apellidos: "Mario",
      email: "Mario",
      Edad: "Mario",
    }, {
      nombre: "Mario",
      apellidos: "Mario",
      email: "Mario",
      Edad: "Mario",
    }, {
      nombre: "Mario",
      apellidos: "Mario",
      email: "Mario",
      Edad: "Mario",
    }, {
      nombre: "Mario",
      apellidos: "Mario",
      email: "Mario",
      Edad: "Mario",
    }, {
      nombre: "Mario",
      apellidos: "Mario",
      email: "Mario",
      Edad: "Mario",
    }, {
      nombre: "Mario",
      apellidos: "Mario",
      email: "Mario",
      Edad: "Mario",
    }, {
      nombre: "Mario",
      apellidos: "Mario",
      email: "Mario",
      Edad: "Mario",
    }, {
      nombre: "Mario",
      apellidos: "Mario",
      email: "Mario",
      Edad: "Mario",
    }, {
      nombre: "Mario",
      apellidos: "Mario",
      email: "Mario",
      Edad: "Mario",
    }, {
      nombre: "Mario",
      apellidos: "Mario",
      email: "Mario",
      Edad: "Mario",
    }, {
      nombre: "Mario",
      apellidos: "Mario",
      email: "Mario",
      Edad: "Mario",
    }, {
      nombre: "Mario",
      apellidos: "Mario",
      email: "Mario",
      Edad: "Mario",
    }, {
      nombre: "Mario",
      apellidos: "Mario",
      email: "Mario",
      Edad: "Mario",
    }, {
      nombre: "Mario",
      apellidos: "Mario",
      email: "Mario",
      Edad: "Mario",
    }, {
      nombre: "Mario",
      apellidos: "Mario",
      email: "Mario",
      Edad: "Mario",
    }, {
      nombre: "Mario",
      apellidos: "Mario",
      email: "Mario",
      Edad: "Mario",
    }, {
      nombre: "Mario",
      apellidos: "Mario",
      email: "Mario",
      Edad: "Mario",
    }, {
      nombre: "Mario",
      apellidos: "Mario",
      email: "Mario",
      Edad: "Mario",
    }, {
      nombre: "Mario",
      apellidos: "Mario",
      email: "Mario",
      Edad: "Mario",
    }
]



function Volunteers() {
  const UsuarioList = new CustomList(usuarios)
  let objetoTabla = UsuarioList.parseToTable(
    ["Nombre", "Apellidos", "Email", "Edad"], 
    ["nombre", "apellidos", "email", "Edad"],
    ["DetallesDeNombre", "DetallesDeEmail"],
    ["nombre", "apellidos"]
    )


  
  return (
    <Box>
        <CustomCard title="Volunteers" quantity={users.length}> </CustomCard>
        <BasicTable objetoTabla = {objetoTabla}  maxHeight={"60vh"}></BasicTable>
      </Box>
    );
}

export default Volunteers;