import { Box } from "@mui/material";
import moment from "moment/moment";
import { useState } from "react";
import { useAuthUser } from "react-auth-kit";
import { useQuery } from "react-query";
import { getActivitiesAPI } from "../../../api/actividades/api";
import BasicModal from "../../../components/BasicModal";
import BasicTableNoDescription from "../../../components/BasicTableNoDescription";
import { VARIANTES_BUTTON } from "../../../components/CustomButton";
import CustomError from "../../../components/CustomError";
import CustomFlex from "../../../components/CustomFlex";
import CustomReloading from "../../../components/CustomReloading";
import { CustomList } from "../../../static/user";


const ParsedActivity = (activities, id) => {
    if(activities.length === 0 || activities === null){
        return []
    }

    return  activities.filter((e)=> e.id === id).map((activity) => {
        return {
            ...activity,
            dateParsed: moment(activity.date).format("DD/MM/YYYY"),
            certificateParsed: activity.certificate ? "Sí" : "No"
        }
    })
}


function ActivityListByVolunteer({id}) {

    return (
      <CustomFlex direction={"row"}>
            <Box flexBasis={"fit-content"}>
                <ListData id={id}/>
            </Box>
    </CustomFlex>
    )
}

export default ActivityListByVolunteer


const ListData = ({id}) => {
    const user = useAuthUser();
    const query = useQuery(["QUERY_VOLUNTEERS_DETAILS_ACTIVITIES", id],() => getActivitiesAPI(user().token),{
        retry: 2,
        refetchOnWindowFocus: false,
    });
  
    if(query.isLoading){
        return <CustomReloading />
    }
  
    if(query.isError){
        return <CustomError onClick={()=> query.refetch()}/>
    }
  
  
    if(query.data.length === 0){
        return <CustomError onClick={()=> query.refetch()}/>
    }
  
    const BeneficiarieList = new CustomList(ParsedActivity(query.data, id))
    let objetoTabla = BeneficiarieList.parseToTableBasic(
      ["Nombre","Coordinador","Lugar","Certificado", "Fecha", "Nº Participantes","Observaciones", "Asistencia"],
      ["name","coordinator","place","certificateParsed", "dateParsed", "numParticipants","observations"])
        
    return (
        <BasicModal
            widthButton={"10rem"}
            variant={VARIANTES_BUTTON.ORANGE}
            text={"Actividades"}
            title={"Actividades del voluntario"}
            body={<BasicTableNoDescription objetoTabla = {objetoTabla}  maxHeight={"80vh"} maxWidth={"85vw"} />}/>
    )
}