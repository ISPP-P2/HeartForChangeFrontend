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
import TextField from '@mui/material/TextField';
import { useState } from 'react';

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
    ["description"]   
    );
    
    const [finalizada, setFinalizada] = useState(false);

  
  return (
    <CustomFlex direction={"column"}>
      <CustomFlex direction={"column"}>
        <CustomCard title="Ayudanos a salvar a los lemures rojos" quantity={actividades.length}> </CustomCard>
        <Box>
        <TextField
          disabled
          id="standard-disabled"
          label="Lugar"
          defaultValue="Parque de la Fuensanta"
          variant="standard"
        />          
        <TextField
          disabled
          id="standard-disabled"
          label="Coordinador"
          defaultValue="Francisco Fernández"
          variant="standard"
        />          
        <TextField
          disabled
          id="standard-disabled"
          label="Fecha de realización"
          defaultValue="22-03-2023"
          variant="standard"
        />          
        <TextField
          disabled
          id="standard-disabled"
          label="Finalizada"
          value={finalizada ? "Sí" : "No"}
          variant="standard"
        />          
        <TextField
          disabled
          id="standard-disabled"
          label="Grupo/Individual"
          defaultValue="Individual"
          variant="standard"
        />          

        <CustomFlex>
            <CustomCard
                title='Añadir participante a la actividad'
                iconD={<PeopleOutlineIcon color='disabled' />}
                buttonSidebar={<Link to="/actividad/1/asignarVoluntarios"><CustomButton  text={"Añadir"}  
                iconD={<ArrowForwardIcon sx={{marginLeft: "2rem"}}/>} 
                variantButton={VARIANTES_BUTTON.GREEN}/> </Link>}/>     
            <CustomCard
                title='Dar por finalizada la actividad'
                iconD={<PeopleOutlineIcon color='disabled' />}
                buttonSidebar={<CustomButton onClick={() => {setFinalizada(!finalizada)}} text={"Finalizar"}  
                iconD={<ArrowForwardIcon sx={{marginLeft: "2rem"}}/>} 
                variantButton={VARIANTES_BUTTON.RED}/>}/>   
          </CustomFlex>      
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