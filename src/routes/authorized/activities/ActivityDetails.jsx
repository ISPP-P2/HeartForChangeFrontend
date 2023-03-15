import * as React from 'react';
import Box from '@mui/material/Box';
import BasicTable from '../../../components/BasicTable';
import CustomCard from '../../../components/CustomCard';
import CustomFlex from '../../../components/CustomFlex';
import { CustomList } from '../../../static/user';
import { Link, useParams } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import CustomButton, { VARIANTES_BUTTON } from '../../../components/CustomButton';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import { useState } from 'react';
import { Grid, Typography } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import BasicFrom from '../../../components/BasicFrom';
import { FORM_TYPES } from '../../../components/utils/utilsForms';
import BodyWrapper from '../../../components/BodyWrapper';
import CustomLink from '../../../components/CustomLink';
import PlaceIcon from '@mui/icons-material/Place';
import BadgeIcon from '@mui/icons-material/Badge';
import CelebrationIcon from '@mui/icons-material/Celebration';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import * as Yup from 'yup';
import { useAuthUser } from 'react-auth-kit';
import { useQuery } from 'react-query';
import { getActivityAPI } from "../../../api/actividades/api";

const form = [
    {
        name: "name",
        type: FORM_TYPES.TEXT,
        label: "Nombre de la actividad",
        icon: <BadgeIcon />,
        validation: Yup.string("Deber ser una cadena de caracteres")
                        .min(2, "Tiene haber al menos dos caractere")
                        .required("No puede estar vacido"),

    }, 
    {
        name: "type",
        type: FORM_TYPES.SELECT,
        label: "Tipo",
        list: [
            {
                label: "Curso",
                value: "CURSO"
            }, {
                label: "Actividad",
                value: "ACTIVIDAD"
            }, {
                label: "Taller",
                value: "TALLER"
            },
        ],
        icon: <CelebrationIcon />,
    },

    {
        name: "place",
        type: FORM_TYPES.TEXT,
        label: "Lugar",
        validation: Yup.string("Deber ser una cadena de caracteres")
                        .min(2, "Tiene haber al menos dos caractere")
                        .required("No puede estar vacido"),
        icon: <PlaceIcon />,
    },
    {
        name: "certificate",
        type: FORM_TYPES.SELECT,
        label: "Certificados",
        list: [
            {
                label: "No",
                value: false
            }, {
                label: "Sí",
                value: true
            },
        ],
    },
    {
        name: "date",
        type: FORM_TYPES.DATE,
        label: "Fecha",
        validation: Yup.date("Deber ser una fecha"),
    },
    {
        name: "coordinator",
        type: FORM_TYPES.TEXT,
        label: "Coordinador",
        validation: Yup.string("Deber ser una cadena de caracteres")
                        .min(2, "Tiene haber al menos dos caractere"),
        icon: <EmojiPeopleIcon />,
    },
    {
        name: "teacher",
        type: FORM_TYPES.TEXT,
        label: "Profesor",
        validation: Yup.string("Deber ser una cadena de caracteres"),
    },{
        name: "incidences",
        type: FORM_TYPES.TEXT,
        label: "Incidencias",
        validation: Yup.string("Deber ser una cadena de caracteres"),
    },{
        name: "numParticipants",
        type: FORM_TYPES.NUMBER,
        label: "Numero de participantes",
        validation: Yup.number("Deber ser una cadena de caracteres"),
    },
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

function ActivityDetails() {
  const { id } = useParams()
  const user = useAuthUser();
  const query = useQuery(["QUERY_ACTIVITY_DETAILS",id],() => getActivityAPI(user().token,id));
  

  if(query.isLoading){
    return <Typography variant="h4" component="div" gutterBottom>
            Cargando...
        </Typography>
  }

  if(query.isError){
    return <Typography variant="h4" component="div" gutterBottom>
           {query.error}
        </Typography>
  }

  const ActivityList = new CustomList(actividadesConBoton)
  let objetoTabla = ActivityList.parseToTable(
    ["Nombre", "DNI", "Sexo","Fecha Nacimiento", "Teléfono", "Ver detalles"],
    ["name", "dni", "gender", "birthDate", "phoneNumber", "button"],
    ["Descripcion"],
    ["description"]);
    

  const mobile = useMediaQuery('(min-width:1200px)');
  
  return (
    <BodyWrapper title={`Detalles de la actividad ${id}`} >
    <CustomFlex direction={"column"}>
      <Typography fontWeight={600} color='#999'>Ayudanos a salvar a los lemures rojos</Typography>
      <CustomFlex direction={mobile ? "column" : "row"}>
        <Grid
        display={"grid"}
        gap={"1rem"}
        gridTemplateColumns={mobile ? "1fr 1fr":"1fr"}
        gridTemplateRows={mobile ? "100%":"1fr"}> 
        <BasicFrom 
        form={parseActividad(query)}
        readOnly={true}
        handleSubmitForm={(values) => console.log(values)}
        />     
          <Grid
              display={"grid"}
              gap={"1rem"}
              gridTemplateColumns={mobile ? "1fr 1fr":"100%"}
              gridTemplateRows={mobile ? "1fr 1fr":"1fr 1fr 1fr 1fr" }>  
                <CustomCard
                  title='Editar actividad'
                  iconD={<PeopleOutlineIcon color='disabled' />}
                  buttonSidebar={<CustomButton text={"Editar"}  
                  iconD={<ArrowForwardIcon sx={{marginLeft: "2rem"}}/>} 
                  variantButton={VARIANTES_BUTTON.BLUE}/>}/> 
                  <CustomCard
                  title='Añadir'
                  iconD={<PeopleOutlineIcon color='disabled'/>}
                  buttonSidebar={<CustomLink to={`/actividad/${id}/asignarVoluntarios`}><CustomButton  text={"Añadir"}  
                  iconD={<ArrowForwardIcon sx={{marginLeft: "2rem"}}/>} 
                  variantButton={VARIANTES_BUTTON.GREEN}/> </CustomLink>}/>  
                <CustomCard
                  title='Finalizar'
                  iconD={<PeopleOutlineIcon color='disabled' />}
                  buttonSidebar={<CustomButton onClick={() => {}} text={"Finalizar"}  
                  iconD={<ArrowForwardIcon sx={{marginLeft: "2rem"}}/>} 
                  variantButton={VARIANTES_BUTTON.RED}/>}/>
                <CustomCard
                  title='Solicitudes'
                  iconD={<PeopleOutlineIcon color='disabled' />}
                  buttonSidebar={<CustomButton text={"Ver"}  
                  iconD={<ArrowForwardIcon sx={{marginLeft: "2rem"}}/>} 
                  variantButton={VARIANTES_BUTTON.PURPLE}/>}/>
          </Grid> 
        </Grid> 
      </CustomFlex>
        <BasicTable objetoTabla = {objetoTabla}  maxHeight={"60vh"}></BasicTable>
      </CustomFlex>
      </BodyWrapper>
    );
}

const parseActividad = (actividad) => {
  return form.map((item) => {
    return { ...item, value: actividad[item.name] };
  });
}


export default ActivityDetails;