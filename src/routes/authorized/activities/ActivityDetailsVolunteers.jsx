import * as React from 'react';
import Box from '@mui/material/Box';
import BasicTable from '../../../components/BasicTable';
import CustomCard from '../../../components/CustomCard';
import CustomFlex from '../../../components/CustomFlex';
import { useAuthUser } from 'react-auth-kit';
import { CustomNotistackContext } from '../../../context/CustomNotistack';
import CustomError from '../../../components/CustomError';
import { useQuery } from 'react-query';
import CustomReloading from '../../../components/CustomReloading';
import { getActivityAPI, getStateByTaskId, quitAttendancesAPI, saveAttendancesAPI } from '../../../api/actividades/api';
import { Link, useParams } from 'react-router-dom';
import BadgeIcon from '@mui/icons-material/Badge';
import * as Yup from 'yup';
import PlaceIcon from '@mui/icons-material/Place';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';

import { CustomList } from '../../../static/user';
import CustomButton, { VARIANTES_BUTTON } from '../../../components/CustomButton';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import BasicFrom from '../../../components/BasicFrom';
import { FORM_TYPES } from '../../../components/utils/utilsForms';
import CustomLink from '../../../components/CustomLink';
import { Grid, Typography } from '@mui/material';
import BodyWrapper from '../../../components/BodyWrapper';
import { StateComponent } from '../../authorizedVolunteer/MyList/MyActivities';
  


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


function ActivityVolunteerDetails() {
  
  const user = useAuthUser();
  const { id } = useParams()
  const query = useQuery(["QUERY_ACTIVITY_DETAILS",id],() => getActivityAPI(user().token,id));


  

  const [refetchState, setRefetchState] = React.useState(false);
  
 
  if(query.isLoading){
    return <CustomReloading />
  }

  if(query.isError){
    return <CustomError onClick={()=> query.refetch()}/>
  }
  return (
  
  <BodyWrapper title={`Actividad: ${query.data.name}` }>
    <StateComponent setRefetch={setRefetchState}  actividadId={id} />
    <CustomFlex direction={"column"}>
    <Typography fontWeight={600} color='#999'>DESCRIPCION</Typography>
      <CustomFlex direction={"column"}>
        <Box>
          <Grid
          display={"grid"}
          gap={"1rem"}
          gridTemplateColumns={"1fr 1fr"}
          gridTemplateRows={"100%"}>
        <BasicFrom 
        form={parseActividad(query.data)} 
        width={"-webkit-fill-available"} 
        readOnly={true}
        handleSubmitForm={(values) => console.log(values)}
        /> 
         <ButtonWrap actividadId={id} queryDetails={refetchState}/>
        </Grid> 
        </Box>
        
      </CustomFlex>
      
      </CustomFlex>
      </BodyWrapper>
    );
}

export const ButtonWrap = ({actividadId, queryDetails}) => {

  const user = useAuthUser();
  const query = useQuery(["QUERY_STATE", actividadId],() => getStateByTaskId(user().token, actividadId),{
    retry: 2,
    refetchOnWindowFocus: false,
  });

  if(query.isLoading){
    return <CustomReloading />
  }


  if(query.isError){
    return <CustomError onClick={()=> query.refetch()}/>
  }

  const makeAttendace = (id) =>{
    saveAttendancesAPI(user().token,id).then(
      (res) => {
        query.refetch();
        queryDetails.queryRefetch();
      }
    );
  }


  const quitAttendance = () => {
    quitAttendancesAPI(user().token, actividadId).then(
      (res) => {
        query.refetch();
        queryDetails.queryRefetch();
      }
    ).catch(
      (err) => {
        console.log(err)
      }
    )
  }
  return (

    <Grid
    display={"grid"}
    justifyContent={"center"}
    marginLeft={"2rem"}
    gridTemplateColumns={"1fr 1fr"}> 
            {query.data.state === "NO_SOLICITADA" ? <CustomCard
                  title='Solicitud para apuntarse'
                  iconD={<PeopleOutlineIcon color='disabled' />}
                  buttonSidebar={<CustomButton text={"Apuntarse"}  
                  onClick={()=>makeAttendace(actividadId)}
                  iconD={<ArrowForwardIcon sx={{marginLeft: "0rem"}}/>} 
                  variantButton={VARIANTES_BUTTON.GREEN}/>}/> : null}
            {query.data.state === "ACEPTADA" ?  <CustomCard
                  title='Salir de la actividad'
                  iconD={<PeopleOutlineIcon color='disabled' />}
                  buttonSidebar={<CustomButton text={"Salir"}
                  onClick={()=>quitAttendance()}  
                  iconD={<ArrowForwardIcon sx={{marginLeft: "1rem"}}/>} 
                  variantButton={VARIANTES_BUTTON.RED}/>}/> : null}
    </Grid> 
     
  )

}




const parseActividad = (actividad) => {
  return form.map((item) => {
    return { ...item, value: actividad[item.name] };
  });
}


export default ActivityVolunteerDetails;