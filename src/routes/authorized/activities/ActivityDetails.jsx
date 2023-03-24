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
import { getActivityAPI, getVolunteersByActivityAPI, updateActivityAPI } from "../../../api/actividades/api";
import CustomReloading from '../../../components/CustomReloading';
import CustomError from '../../../components/CustomError';

const form = [
    {
        name: "name",
        type: FORM_TYPES.TEXT,
        label: "Nombre de la actividad",
        icon: <BadgeIcon />,
        validation: Yup.string("Deber ser una cadena de caracteres")
        .min(2, "Tiene haber al menos dos caracteres")
        .max(20, "No puede tener más de 20 caracteres")
        .required("Este campo es obligatorio"),

    }, 
   
    {
        name: "place",
        type: FORM_TYPES.TEXT,
        label: "Lugar",
        validation: Yup.string("Deber ser una cadena de caracteres")
        .required("Este campo es obligatorio"),
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
        validation: Yup.boolean().required("Este campo es obligatorio"),
    },
    {
        name: "date",
        type: FORM_TYPES.DATE,
        label: "Fecha",
        validation: Yup.date("Deber ser una fecha"),
        validation: Yup.date()
        .required("Este campo es obligatorio"),
    },
    {
        name: "coordinator",
        type: FORM_TYPES.TEXT,
        label: "Coordinador",
        validation: Yup.string("Deber ser una cadena de caracteres")
        .required("Este campo es obligatorio"),
                        
        icon: <EmojiPeopleIcon />,
    },
    {
        name: "incidences",
        type: FORM_TYPES.TEXT,
        label: "Incidencias",
        validation: Yup.string("Deber ser una cadena de caracteres"),
    },{
        name: "numParticipants",
        type: FORM_TYPES.NUMBER,
        label: "Numero de participantes",
        validation: Yup.number("Deber ser una cadena de caracteres").min(0, "El número de participantes debe ser mayor o igual a 0"),
    },
]

const ToolList = ({usuario, id}) => {
  return (
    <CustomFlex justifyContent={"flex-start"} direction={"row"}>
      <CustomLink  to={`/ong/voluntario/${id}`}>
        <SearchIcon />
      </CustomLink>
    </CustomFlex>
  )
  
  }
  

  
  const VoluntarioParser = (data) => {
    if(data!==undefined&&data.length!==0){
      return data.map((volunteer) => {
          return {
            ...volunteer,
            gender: volunteer.gender === "MALE" ? "Hombre" : "Mujer",
            button:<ToolList usuario={volunteer} id={volunteer.id}/>,
          }; 
      });
    }
    return [];
  }

function ActivityDetails() {
  const [readOnlyValue, toggleReadOnly] = useState(true)
  const { id } = useParams()
  const user = useAuthUser();
  const mobile = useMediaQuery('(min-width:1200px)');
  const query = useQuery(["QUERY_ACTIVITY_DETAILS",id],() => getActivityAPI(user().token,id));
  const volunteers = useQuery(["QUERY_ACTIVITY_VOLUNTEERS",id],() => getVolunteersByActivityAPI(user().token,id));

  if(query.isLoading){
    return <CustomReloading />
  }

  if(query.isError){
    return <CustomError onClick={()=> query.refetch()}/>
  }

  const updateActivity = (values) => {
    console.log(values)
    updateActivityAPI(user().token, values, id)
    toggleReadOnly(!readOnlyValue);
  }

  const VolunteerList = new CustomList(VoluntarioParser(volunteers.data))
  let objetoTabla = VolunteerList.parseToTable(
    ["Nombre de usuario","Género", "Email","Herramientas"], 
    ["username", "gender","email", "button"],
    ["Nombre","Primer Apellido", "Segundo Apellido"],
    ["name", "firstSurname","secondSurname"]
  )
  
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
        form={parseActividad(query.data)}
        readOnly={readOnlyValue}
        buttonText={"Confirmar"}
        handleSubmitForm={updateActivity}
        showButton = {!readOnlyValue}
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
                  onClick={() => {toggleReadOnly(!readOnlyValue); console.log(readOnlyValue); }}  
                  iconD={<ArrowForwardIcon sx={{marginLeft: "2rem"}}/>} 
                  variantButton={VARIANTES_BUTTON.BLUE}/>}/> 
                  <CustomCard
                  title='Añadir'
                  iconD={<PeopleOutlineIcon color='disabled'/>}
                  buttonSidebar={<CustomLink to={`/ong/actividad/${id}/asignarVoluntarios`}><CustomButton  text={"Añadir"}  
                  iconD={<ArrowForwardIcon sx={{marginLeft: "2rem"}}/>} 
                  variantButton={VARIANTES_BUTTON.GREEN}/> </CustomLink>}/>  
                <CustomCard
                  title='Finalizar'
                  iconD={<PeopleOutlineIcon color='disabled' />}
                  buttonSidebar={<CustomButton onClick={() => {}} text={"Fin"} 
                  iconD={<ArrowForwardIcon sx={{marginLeft: "2rem"}}/>} 
                  variantButton={VARIANTES_BUTTON.RED}/>}/>
                <CustomCard
                  title='Solicitudes'
                  iconD={<PeopleOutlineIcon color='disabled' />}
                  buttonSidebar={<CustomLink to={`/ong/actividad/${id}/solicitudes`}><CustomButton  text={"Ver"}  
                  iconD={<ArrowForwardIcon sx={{marginLeft: "2rem"}}/>} 
                  variantButton={VARIANTES_BUTTON.PURPLE}/> </CustomLink>}/>
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