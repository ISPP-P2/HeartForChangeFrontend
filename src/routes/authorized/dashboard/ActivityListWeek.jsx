import { useState } from "react";
import { useAuthUser } from "react-auth-kit";
import { getAllAppointmentAPI } from "../../../api/beneficiario/appointment/api";
import { useQuery } from "react-query";
import moment from "moment";
import CustomReloading from "../../../components/CustomReloading";
import CustomError from "../../../components/CustomError";
import { CustomList } from "../../../static/user";
import { Box, Typography } from "@mui/material";
import BasicTableNoDescription from "../../../components/BasicTableNoDescription";
import CustomFlex from "../../../components/CustomFlex";
import CustomLink from "../../../components/CustomLink";
import SearchIcon from '@mui/icons-material/Search';
import { getActivitiesAPI } from "../../../api/actividades/api";


export const ActivityListWeek = () => {

    const user = useAuthUser();
    const [activities, setActivities] = useState(null);


    const query = useQuery(["QUERY_ACTIVITIES"],() => getActivitiesAPI(user().token),{
      retry: 2,
      onSuccess: (data) => {
         setActivities(data.filter((activity) => {
                return moment(activity.date).isBetween(moment(), moment().add(7, 'days'), null, '[]');
            }))
        },
      refetchOnWindowFocus: false,
    });
    if(query.isLoading || activities === null){
      return <CustomReloading />
    }
  
    if(query.isError){
        return <CustomError onClick={()=> query.refetch()}/>
    }
    
    const ActivityList = new CustomList(ParseActivity(activities));
    let objetoTabla = ActivityList.parseToTableBasic(
        ["Nombre de actividad","Lugar","Coordinador","Fecha","Ver detalles"],
        ["name", "place","coordinator","date", "button"]
    )


    return (
        <Box height={"40vh"}>
            <Typography component={"h1"} fontSize={"2rem"} fontWeight={"550"} color={"#686868"} marginBottom={'1rem'}>
                Próximas actividades
            </Typography>
            <BasicTableNoDescription objetoTabla = {objetoTabla}  maxHeight={"40vh"} />
        </Box>
    )
}


const ParseActivity = (activities) => {
    return activities.map((activity) => {
        return {
            ...activity,
            date: moment(activity.date).format("DD/MM/YYYY HH:mm"),
            button: <ToolList id={activity.id}/>
        }
    })
}

const ToolList = ({id}) => {
    return (
      <CustomFlex justifyContent={"flex-start"} direction={"row"}>
        <CustomLink  to={`/ong/actividad/${id}`}>
          <SearchIcon />
        </CustomLink>
      </CustomFlex>
    )
  }

