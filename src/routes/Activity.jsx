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
import DetailsCard from "../components/DetailsCard.jsx";
import { Link } from 'react-router-dom';
import CustomButton, { VARIANTES_BUTTON } from '../components/CustomButton';


const participants = [
  {
    id: "1",
    name: "Ursula Valenzuela Martín",
    dni: "80802020Z",
    gender: "Mujer",
    birthDate: "03/05/1998",
    phoneNumber: "627894821",
    botonVerMas: <Link to="/actividad/2">Ver más</Link>,
    description: "Hola" 
  },
  {
    id: "2",
    name: "Juan Gómez García",
    dni: "80802025Z",
    gender: "Hombre",
    birthDate: "18/01/1971",
    phoneNumber: "698248513",
    botonVerMas: <Link to="/actividad/2">Ver más</Link>,
    description: "Hola" 
  },
  {
    id: "3",
    name: "Mario Pérez López",
    dni: "80802028Z",
    gender: "Hombre",
    birthDate: "15/11/1982",
    phoneNumber: "669875202",
    botonVerMas: <Link to="/actividad/2">Ver más</Link>, 
    description: "Hola" 
  },
  {
    id: "4",
    name: "Esteban Vázquez Bautista",
    dni: "80802021Z",
    gender: "Fluido",
    birthDate: "20/02/1995",
    phoneNumber: "633252254",
    botonVerMas: <Link to="/actividad/2">Ver más</Link>,    
    description: "Hola" 
  }, 
    
]



function Activity() {
  const ParticipantsList = new CustomList(participants)
  let objetoTablaParticipantes = ParticipantsList.parseToTable(
    ["Id", "Nombre", "DNI", "Sexo","Fecha Nacimiento", "Teléfono", "Ver detalles"],
    ["id", "name", "dni", "gender", "birthDate", "phoneNumber", "botonVerMas"],
    ["Descripcion"],
    ["description"]
    )


  
  return (
    <Box>
        <CustomButton onClick={()=> {console.log()}} text={"Eliminar usuario de actividad"} variantButton={VARIANTES_BUTTON.RED}/>
        <BasicTable objetoTabla = {objetoTablaParticipantes}  maxHeight={"60vh"}></BasicTable>
      </Box>
    );
}

export default Activity;