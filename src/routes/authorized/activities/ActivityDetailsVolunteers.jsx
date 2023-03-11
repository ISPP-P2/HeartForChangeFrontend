import * as React from 'react';
import Box from '@mui/material/Box';
import BasicTable from '../../../components/BasicTable';
import CustomCard from '../../../components/CustomCard';
import CustomFlex from '../../../components/CustomFlex';
import { CustomList } from '../../../static/user';
import SearchIcon from '@mui/icons-material/Search';
import CustomButton, { VARIANTES_BUTTON } from '../../../components/CustomButton';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import { useState } from 'react';
import BasicFrom from '../../../components/BasicFrom';
import { FORM_TYPES } from '../../../components/utils/utilsForms';
import CustomLink from '../../../components/CustomLink';
import { Grid, Typography } from '@mui/material';
import BodyWrapper from '../../../components/BodyWrapper';
  


const form = [
  {
      name: "place",
      type: FORM_TYPES.TEXT,
      label: "Lugar",
      value: 'Parque de la Fuensanta'
  }, {
      name: "coordinator",
      type: FORM_TYPES.TEXT,
      label: "Coordinador",
      value: 'Francisco Fernández'
  }, {
      name: "state",
      type: FORM_TYPES.TEXT,
      label: "Finalizada",
      value: "No"
  }, {
      name: "date",
      type: FORM_TYPES.TEXT,
      label: "Fecha de realización",
      value: "22-03-2023"
  }, {
      name: "group",
      type: FORM_TYPES.TEXT,
      label: "Grupo/Individual",
      value: 'Individual'
  }
]


const actividades = [
  {
    id: "1",
    name: "Ursula Valenzuela Martín",
    dni: "80802020Z",
    gender: "Mujer",
    birthDate: "03/05/1998",
    phoneNumber: "666254876",
    botonVerMas: <CustomLink to="/actividad/2">Ver más</CustomLink>,
    description: "Hola" 
  },
  {
    id: "2",
    name: "Juan Gómez García",
    dni: "80802025Z",
    gender: "Hombre",
    birthDate: "18/01/1971",
    phoneNumber: "698754687",
    botonVerMas: <CustomLink to="/actividad/2">Ver más</CustomLink>,
    description: "Hola" 
  },
  {
    id: "3",
    name: "Mario Pérez López",
    dni: "80802028Z",
    gender: "Hombre",
    birthDate: "15/11/1982",
    phoneNumber: "669857438",
    botonVerMas: <CustomLink to="/actividad/2">Ver más</CustomLink>, 
    description: "Hola" 
  },
  {
    id: "4",
    name: "Esteban Vázquez Bautista",
    dni: "80802021Z",
    gender: "Fluido",
    birthDate: "20/02/1995",
    phoneNumber: "611997854",
    botonVerMas: <CustomLink to="/actividad/2">Ver más</CustomLink>,    
    description: "Hola" 
  }, 

]

const actividadesConBoton = actividades.map((actividad) => {
  return {
    ...actividad,
    button: <CustomLink to="/actividad/1"><SearchIcon /></CustomLink>,
  };
});

function ActivityVolunteerDetails() {
  const ActivityList = new CustomList(actividadesConBoton)
  let objetoTabla = ActivityList.parseToTable(
    ["Nombre", "DNI", "Sexo","Fecha Nacimiento", "Teléfono", "Ver detalles"],
    ["name", "dni", "gender", "birthDate", "phoneNumber", "button"],
    ["Descripcion"],
    ["description"]);

  
  return (
  
  <BodyWrapper title={"Actividad: Parque de la Fuensanta"}>
    
    <CustomFlex direction={"column"}>
    <Typography fontWeight={600} color='#999'>Ayudanos a salvar a los lemures rojos</Typography>
      <CustomFlex direction={"column"}>
        <Box>
          <Grid
          display={"grid"}
          gap={"1rem"}
          gridTemplateColumns={"1fr 1fr"}
          gridTemplateRows={"100%"}>
        <BasicFrom 
        form={form} 
        width={"-webkit-fill-available"} 
        readOnly={true}
        handleSubmitForm={(values) => console.log(values)}
        /> 
          <Grid
              display={"grid"}
              justifyContent={"center"}
              marginLeft={"2rem"}
              gridTemplateColumns={"1fr 1fr"}>    
                <CustomCard
                  title='Solicitud para apuntarse'
                  iconD={<PeopleOutlineIcon color='disabled' />}
                  buttonSidebar={<CustomButton text={"Apuntarse"}  
                  iconD={<ArrowForwardIcon sx={{marginLeft: "0rem"}}/>} 
                  variantButton={VARIANTES_BUTTON.GREEN}/>}/> 
                <CustomCard
                  title='Salir de la actividad'
                  iconD={<PeopleOutlineIcon color='disabled' />}
                  buttonSidebar={<CustomButton text={"Salir"}  
                  iconD={<ArrowForwardIcon sx={{marginLeft: "1rem"}}/>} 
                  variantButton={VARIANTES_BUTTON.RED}/>}/>
          </Grid> 
        </Grid> 
        </Box>
        
      </CustomFlex>
        <Box sx={{marginTop:"5rem"}}>
          <BasicTable objetoTabla = {objetoTabla}  maxHeight={"60vh"}></BasicTable>
        </Box>
      </CustomFlex>
      </BodyWrapper>
    );
}

export default ActivityVolunteerDetails;