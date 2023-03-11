import * as React from 'react';
import Box from '@mui/material/Box';
import BasicTable from '../../../components/BasicTable';
import CustomCard from '../../../components/CustomCard';
import CustomFlex from '../../../components/CustomFlex';
import { CustomList } from '../../../static/user';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import CustomCardMini from '../../../components/CustomCardMini';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import CustomLink from '../../../components/CustomLink';
import BasicModal from '../../../components/BasicModal';

export const actividades = [
    {
      id: 1,
      name: "Ayúdanos a salvar a los lemures rojos",
      description: "Se realizará en el campo verde de la fuensanta donde les llevaremos mangos a todos los lemúres rojos de la zona. Todo el mundo es bienvenido a esta actividad",
      type: "Ayuda",
      location: "Parque de la Fuensanta",
      capacity: "100",
      date: "22-03-2023",
      coordinator: "Pepe Rodriguez",
      finished: "Si",
      group: "INDIVIDUAL"
    },
    {
      id: 2,
      name: "Actividad de recaudación de fondos",
      description: "Haced donaciones a ES1920956412998266421815, muchas gracias.",
      type: "Recaudación",
      location: "España",
      capacity: "Ilimitada",
      date: "2023",
      coordinator: "Alberto Martin",
      finished: "Si",
      group: "INDIVIDUAL"

    },
    {
      id: 3,
      name: "Actividad de prueba",
      description: "Una actividad de prueba",
      type: "Prueba",
      location: "Sevilla",
      capacity: "3",
      date: "05-03-2023",
      coordinator: "Juan Pablo",
      finished: "Si",
      group: "INDIVIDUAL"
    },
    {
      id: 4,
      name: "Concierto benéfico Roaming in my Head",
      description: "Necesitaremos personas con conocimiento relativo a gestión de espectáculos en directo.",
      type: "Técnico",
      location: "Sevilla",
      capacity: "12",
      date: "14-03-2023",
      coordinator: "Mario Pérez Coronel",
      finished: "Si",
      group: "GRUPO"
    },
]

const actividadesConBoton = actividades.map((actividad) => {
  return {
    ...actividad,
    button: <CustomLink to={`/actividad/${actividad.id}`}><SearchIcon /></CustomLink>,
  };
});




function Activities() {
  const ActivityList = new CustomList(actividadesConBoton)
  let objetoTabla = ActivityList.parseToTable(
    ["Id", "Nombre de actividad", "Tipo","Lugar", "Capacidad","Fecha","Ver detalles"],
    ["id", "name", "type", "location","capacity","date", "button"],
    ["Descripcion"],
    ["description"]   
    )


  
  return (
    <CustomFlex direction={"column"}>
        <CustomFlex direction={"row"}>
            <CustomCardMini
                  title='Activades'
                  iconD={<BasicModal title={"Añadir actividad"} text={"Añadir"} body={<></>}/>}
                  totalNumber="100"/>
          </CustomFlex>
        <BasicTable objetoTabla = {objetoTabla}  maxHeight={"60vh"}></BasicTable>
      </CustomFlex>
    );
}

export default Activities;