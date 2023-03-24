import { useParams } from "react-router-dom";
import * as React from 'react';
import BasicTable from "../../../components/BasicTable";
import BodyWrapper from "../../../components/BodyWrapper";
import CustomButton, { VARIANTES_BUTTON } from "../../../components/CustomButton";
import CustomFlex from "../../../components/CustomFlex";
import { CustomList } from '../../../static/user';
import CustomLink from "../../../components/CustomLink";
import { useQuery } from "react-query";
import { acceptAttendancesAPI, denyAttendancesAPI, getVolunteersByActivityAPI } from "../../../api/actividades/api";
import { useAuthUser } from "react-auth-kit";
import { Box, Typography } from "@mui/material";
import { useState } from 'react';
import BasicModal from "../../../components/BasicModal";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { CustomNotistackContext } from "../../../context/CustomNotistack";
import CheckIcon from '@mui/icons-material/Check';





function Attendances() {
    const {id} = useParams("id");
    const user = useAuthUser();
    const {setSuccessMsg, setErrorMsg} = React.useContext(CustomNotistackContext)
    const attendances = useQuery(["QUERY_ACTIVITY_ATTENDANCES",id],() => getVolunteersByActivityAPI(user().token,id));
    console.log(attendances.data)
  
    const ToolList = ({usuario, id}) => {
        const [handleCloseFunc, setHandleCloseFunc] = useState({});
    
        return (
        <CustomFlex justifyContent={"flex-start"} direction={"row"}>
          <BasicModal  setHandleCloseButton={setHandleCloseFunc} title={"¿Estás seguro?"} heightButton={"2.25rem"} body={<Box>
            <Typography>La solicitud se aceptará</Typography>
            <CustomButton onClick={()=>handleAccept(id, handleCloseFunc)} text={"Aceptar"}  variantButton={VARIANTES_BUTTON.GREEN} />
            </Box>} variant={VARIANTES_BUTTON.GREEN }text={<CheckIcon />}
            />
          <BasicModal  setHandleCloseButton={setHandleCloseFunc} title={"¿Estás seguro?"} heightButton={"2.25rem"} body={<Box>
            <Typography>La solicitud se rechazará</Typography>
            <CustomButton onClick={()=>handleDeny(id, handleCloseFunc)} text={"Rechazar"}  variantButton={VARIANTES_BUTTON.RED} />
            </Box>} variant={VARIANTES_BUTTON.RED}  text={<DeleteForeverIcon />}
            />
        </CustomFlex>
        )
    }

    const StateParser = (state) => {
      console.log(state)
      if(state == "ESPERA"){
        return "ESPERA"
      } 
      if(state == "ACEPTADA"){
        return "ACEPTADA"
      } 
      if(state == "DENEGADA"){
        return "DENEGADA"
      }
      if(state == "CANCELADA"){
        return "CANCELADA"
      } 
      return "Error"
    }

    const AttendanceParser = (data) => {

      if(data!==undefined&&data.length!==0){
        return data.map((attendance) => {
          return {
              ...attendance,
              state:StateParser(attendance.state),
              button:<ToolList usuario={attendance} id={attendance.id}/>,
            };
      
      });
      }
    
      return [];
      
    }
    const ActivityList = new CustomList(AttendanceParser(attendances.data))
    let objetoTabla = ActivityList.parseToTable(
      ["Id","Aceptar/Denegar"],
      ["id","button"],
      ["Estado"],
      ["state"]
      )

      const handleAccept = (id, handleClose) => {
        acceptAttendancesAPI(user().token, id).then(() => {
          handleClose.handleClose()
          attendances.refetch()
          setSuccessMsg("Solicitud aceptada correctamente")
        }).catch((err) => {
          setErrorMsg("Error al aceptar la solicitud")
        })
      }
    
      const handleDeny = (id, handleClose) => {
        denyAttendancesAPI(user().token, id).then(() => {
          handleClose.handleClose()
          attendances.refetch()
          setSuccessMsg("Solicitud rechazada correctamente")
        }).catch((err) => {
          setErrorMsg("Error al rechazar la solicitud")
        })
      }
        
     

      
    return (
      <BodyWrapper title={`Aceptar Solicitudes ${id}`}>
        <CustomFlex direction={"column"}>
          <BasicTable objetoTabla = {objetoTabla}  maxHeight={"60vh"}></BasicTable>
        </CustomFlex>
      </BodyWrapper>
      );
    }
  export default Attendances;