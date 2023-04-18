import { useParams } from "react-router-dom";
import * as React from 'react';
import BasicTable from "../../../components/BasicTable";
import BodyWrapper from "../../../components/BodyWrapper";
import CustomButton, { VARIANTES_BUTTON } from "../../../components/CustomButton";
import CustomFlex from "../../../components/CustomFlex";
import { CustomList } from '../../../static/user';
import CustomLink from "../../../components/CustomLink";
import { useQuery } from "react-query";
import { acceptAttendancesAPI, denyAttendancesAPI, getStateByVolunteerAndActivity, getVolunteersByActivityAPI } from "../../../api/actividades/api";
import { useAuthUser } from "react-auth-kit";
import { Box, Typography } from "@mui/material";
import { useState } from 'react';
import BasicModal from "../../../components/BasicModal";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { CustomNotistackContext } from "../../../context/CustomNotistack";
import CheckIcon from '@mui/icons-material/Check';
import CustomReloading from "../../../components/CustomReloading";
import CustomError from "../../../components/CustomError";




const ToolList = ({usuarioId}) => {
  const [handleCloseFunc, setHandleCloseFunc] = useState({});
  const {id} = useParams("id");
  const {setSuccessMsg, setErrorMsg} = React.useContext(CustomNotistackContext)
  const user = useAuthUser();
  const [disableButton, setDisableButton] = React.useState(false);

  const query = useQuery(["QUERY_PERSON_ATTENDANTE",id, usuarioId],() => getStateByVolunteerAndActivity(user().token, usuarioId, id),{
    retry: 2,
    refetchOnWindowFocus: false,
  });

  if(query.isLoading){
    return <CustomReloading />
  }

  if(query.isError){
    return <CustomError onClick={()=> query.refetch()}/>
  }


  const handleAccept = (id, handleClose) => {
    setDisableButton(true)
    acceptAttendancesAPI(user().token, id).then(() => {
      handleClose.handleClose()
      query.refetch()
      setSuccessMsg("Solicitud aceptada correctamente")
    }).catch((err) => {
      setErrorMsg("Error al aceptar la solicitud")
    }).finally(() => {
      setDisableButton(false)
    })
  }

  const handleDeny = (id, handleClose) => {
    setDisableButton(true)
    denyAttendancesAPI(user().token, id).then(() => {
      handleClose.handleClose()
      query.refetch()
      setSuccessMsg("Solicitud rechazada correctamente")
    }).catch((err) => {
      setErrorMsg("Error al rechazar la solicitud")
    }).finally(() => {
      setDisableButton(false)
    })
  }
  return (
    <CustomFlex justifyContent={"space-between"}>
      <CustomFlex>
        <Typography>{!query.isError ? query.data.state : "Hubo un error" }</Typography>
      </CustomFlex>
      <CustomFlex justifyContent={"flex-start"} direction={"row"}>
      { query.data.state !== "ACEPTADA" ? <BasicModal  setHandleCloseButton={setHandleCloseFunc} title={"¿Estás seguro?"} heightButton={"2.25rem"} body={<Box>
          <Typography>La solicitud se aceptará</Typography>
          <CustomButton isLoading={disableButton} onClick={()=>handleAccept(query.data.id, handleCloseFunc)} text={"Aceptar"}  variantButton={VARIANTES_BUTTON.GREEN} />
          </Box>} variant={VARIANTES_BUTTON.GREEN }text={<CheckIcon />}
          /> : null}
         { query.data.state !== "DENEGADA" ?<BasicModal  setHandleCloseButton={setHandleCloseFunc} title={"¿Estás seguro?"} heightButton={"2.25rem"} body={<Box>
          <Typography>La solicitud se rechazará</Typography>
          <CustomButton isLoading={disableButton} onClick={()=>handleDeny(query.data.id, handleCloseFunc)} text={"Rechazar"}  variantButton={VARIANTES_BUTTON.RED} />
          </Box>} variant={VARIANTES_BUTTON.RED}  text={<DeleteForeverIcon />}
          />: null}
      </CustomFlex>
    </CustomFlex>

  )
}

const AttendanceParser = (data) => {
  if(data!==undefined&&data.length!==0){
      return data.map((person) => {
        return {
            ...person,
            toolList: <ToolList usuarioId={person.id} />
          };
    
    });
  }

  return [];
  
}

function Attendances() {
    const {id} = useParams();
    const user = useAuthUser();
    const {setSuccessMsg, setErrorMsg} = React.useContext(CustomNotistackContext)
    const attendances = useQuery(["QUERY_ACTIVITY_ATTENDANCES",id],() => getVolunteersByActivityAPI(user().token,id),{
      retry: 2,
      refetchOnWindowFocus: false,
    });
  

    const ActivityList = new CustomList(AttendanceParser(attendances.data))
    let objetoTabla = ActivityList.parseToTable(
    ["Nombre de usuario","Género", "Email","Herramientas"], 
    ["username", "gender","email", "toolList"],
    ["Nombre","Primer Apellido", "Segundo Apellido"],
    ["name", "firstSurname","secondSurname"])

    if(attendances.isLoading){
      return <CustomReloading />
    }

    if(attendances.isError){
      return <CustomError onClick={()=> attendances.refetch()}/>
    }
      
    return (
      <BodyWrapper title={`Aceptar Solicitudes`}>
        <CustomFlex direction={"column"}>
          <BasicTable objetoTabla = {objetoTabla}  maxHeight={"60vh"}></BasicTable>
        </CustomFlex>
      </BodyWrapper>
      );
    }
  export default Attendances;