import * as React from 'react';
import BasicTable from '../../../components/BasicTable';
import CustomFlex from '../../../components/CustomFlex';
import { CustomList } from '../../../static/user';
import SearchIcon from '@mui/icons-material/Search';
import CustomCardMini from '../../../components/CustomCardMini';
import CustomLink from '../../../components/CustomLink';
import { Typography } from '@mui/material';
import { useAuthUser } from 'react-auth-kit';
import { useQuery } from 'react-query';
import { getMyActivitiesAPI, getStateByTaskId } from '../../../api/actividades/api';
import BodyWrapper from '../../../components/BodyWrapper';
import CustomReloading from '../../../components/CustomReloading';
import CustomError from '../../../components/CustomError';
import { CustomNotistackContext } from '../../../context/CustomNotistack';



function MyActivities() {
  const user = useAuthUser();
  const query = useQuery(["QUERY_ACTIVITIES"],() => getMyActivitiesAPI(user().token),{
    retry: 2,
    refetchOnWindowFocus: false,
  });
 
  if(query.isLoading){
    return <CustomReloading />
  } 

  if(query.isError){
    return <CustomError onClick={()=> query.refetch()}/>
  }


  const ActivityList = new CustomList(ParseActivity(query.data));
  let objetoTabla = ActivityList.parseToTable(
    ["Nombre de actividad","Lugar","Coordinador","Fecha","Estado","Ver detalles"],
    ["name", "place","coordinator","date","state", "button"],
    ["Observaciones"],
    ["observations"]   
    )

  
  return (
    <BodyWrapper title={"Lista de actividades"}>
      <CustomFlex direction={"column"}>
          <CustomFlex direction={"row"}>
              <CustomCardMini
                    title='Nº de actividades'
                    totalNumber={query.data.length}/>
            </CustomFlex>
        {query.data.length ===0 ? <Typography variant="h4" component="div" gutterBottom>No estás apuntado a ninguna actividad</Typography>
        :<BasicTable objetoTabla = {objetoTabla}  maxHeight={"60vh"}></BasicTable>}
        </CustomFlex> 
      </BodyWrapper>
    );
}

export default MyActivities;


const ToolList = ({actividad, id}) => {


  return (
    <CustomFlex justifyContent={"flex-start"} direction={"row"}>
      <CustomLink  to={`/vol/actividad/${id}`}>
        <SearchIcon />
      </CustomLink>
    </CustomFlex>
  )

}

export const StateComponent = ({actividadId}) => {

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

  
  return (
      <Typography>{!query.isError ? query.data.state : "Hubo un error" }</Typography>
  )

}

const ParseActivity = (data) => {
  return data.map((actividad) => {
    return {
      ...actividad,
      state:<StateComponent actividadId={actividad.id}/>,
      button: <ToolList  actividad={actividad}  id={actividad.id} />,
    };
  });
}