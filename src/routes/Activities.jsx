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

const actividades = [
    {
      id: "1",
      name: "Ayudanos a salvar a los lemures rojos",
      description: "Se realizará en el campo verde de la fuensanta donde les llevaremos mangos a todos los lemúres rojos de la zona. Todo el mundo es bienvenido a esta actividad",
      type: "Ayuda",
      location: "Parque de la Fuensanta",
      capacity: "100",
      date: "22-03-2023",
      moreDetails: <Link to="/actividad/2">Ver más</Link>
    },
    {
      id: "2",
      name: "Actividad de recaudación de fondos",
      description: "Haced donaciones a ES1920956412998266421815, muchas gracias.",
      type: "Recaudación",
      location: "España",
      capacity: "Ilimitada",
      date: "2023",
      moreDetails: <Link to="/actividad/2">Ver más</Link>
    },
    {
      id: "3",
      name: "Actividad de prueba",
      description: "Una actividad de prueba",
      type: "Prueba",
      location: "Sevilla",
      capacity: "3",
      date: "05-03-2023",
      moreDetails: <Link to="/actividad/2">Ver más</Link>
    },
    {
      id: "4",
      name: "Concierto benéfico Roaming in my Head",
      description: "Necesitaremos personas con conocimiento relativo a gestión de espectáculos en directo.",
      type: "Técnico",
      location: "Sevilla",
      capacity: "12",
      date: "14-03-2023",
      moreDetails: <Link to="/actividad/2">Ver más</Link>
    }, 
    
]



function Activities() {
  const ActivityList = new CustomList(actividades)
  let objetoTabla = ActivityList.parseToTable(
    ["Id", "Nombre de actividad", "Tipo","Lugar", "Capacidad","Fecha","Ver detalles"], 
    ["id", "name", "type", "location","capacity","date","moreDetails"],
    ["Descripcion"],
    ["description"]
    )


  
  return (
    <Box>
        <CustomCard title="Actividades" quantity={actividades.length}> </CustomCard>
        <BasicTable objetoTabla = {objetoTabla}  maxHeight={"60vh"}></BasicTable>
      </Box>
    );
}

export default Activities;