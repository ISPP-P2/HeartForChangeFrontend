import * as React from 'react';
import Box from '@mui/material/Box';
import BasicTable from '../../../components/BasicTable';
import CustomCard from '../../../components/CustomCard';
import CustomFlex from '../../../components/CustomFlex';
import { CustomList } from '../../../static/user';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import CustomButton, { VARIANTES_BUTTON } from '../../../components/CustomButton';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import { useState } from 'react';
import { Grid } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import BasicFrom from '../../../components/BasicFrom';
import { FORM_TYPES } from '../../../components/utils/utilsForms';
  


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
    botonVerMas: <Link to="/actividad/2">Ver más</Link>,
    description: "Hola" 
  },
  {
    id: "2",
    name: "Juan Gómez García",
    dni: "80802025Z",
    gender: "Hombre",
    birthDate: "18/01/1971",
    phoneNumber: "698754687",
    botonVerMas: <Link to="/actividad/2">Ver más</Link>,
    description: "Hola" 
  },
  {
    id: "3",
    name: "Mario Pérez López",
    dni: "80802028Z",
    gender: "Hombre",
    birthDate: "15/11/1982",
    phoneNumber: "669857438",
    botonVerMas: <Link to="/actividad/2">Ver más</Link>, 
    description: "Hola" 
  },
  {
    id: "4",
    name: "Esteban Vázquez Bautista",
    dni: "80802021Z",
    gender: "Fluido",
    birthDate: "20/02/1995",
    phoneNumber: "611997854",
    botonVerMas: <Link to="/actividad/2">Ver más</Link>,    
    description: "Hola" 
  }, 

]

const actividadesConBoton = actividades.map((actividad) => {
  return {
    ...actividad,
    button: <Link to="/actividad/1"><SearchIcon /></Link>,
  };
});

function ActivityDetails() {
  const ActivityList = new CustomList(actividadesConBoton)
  let objetoTabla = ActivityList.parseToTable(
    ["Id", "Nombre", "DNI", "Sexo","Fecha Nacimiento", "Teléfono", "Ver detalles"],
    ["id", "name", "dni", "gender", "birthDate", "phoneNumber", "button"],
    ["Descripcion"],
    ["description"]);

  
  return (
    <CustomFlex direction={"column"}>
      <CustomFlex direction={"column"}>
      <CustomCard title="Ayudanos a salvar a los lemures rojos" quantity={actividades.length}> </CustomCard>
      
        <Box>
        <Grid
      display={"grid"}
      gap={"1rem"}
      gridTemplateColumns={"1fr 2fr"}
      gridTemplateRows={"100%"}>
        <BasicFrom 
        form={form} 
        columns={1}   
        width={"auto"} 
        readOnly={true}
        handleSubmitForm={(values) => console.log(values)}
        /> 
          <CustomFlex direction={"column"} align={"flex-end"}>        
          <Grid
              display={"grid"}
              gap={"1rem"}
              gridTemplateColumns={"100%"}
              gridTemplateRows={"1fr 1fr"}>    
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
          </CustomFlex> 
        </Grid> 
        </Box>
        
      </CustomFlex>

      <CustomFlex direction={"row"}>
        <CustomCard title="Usuarios que han participado en la actividad" quantity={actividades.length}> </CustomCard>
      </CustomFlex>
        <BasicTable objetoTabla = {objetoTabla}  maxHeight={"60vh"}></BasicTable>
      </CustomFlex>
    );
}

export default ActivityDetails;