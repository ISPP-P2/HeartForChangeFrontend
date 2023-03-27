import React from 'react'
import { useAuthUser } from 'react-auth-kit';
import { useQuery } from 'react-query';
import { getActivitiesAPI, getActivitiesDateAPI } from '../../../api/actividades/api';
import CustomReloading from '../../../components/CustomReloading';
import CustomError from '../../../components/CustomError';
import { CustomList } from '../../../static/user';
import BodyWrapper from '../../../components/BodyWrapper'
import BasicTable from '../../../components/BasicTable';
import CustomFlex from '../../../components/CustomFlex';
import CustomLink from '../../../components/CustomLink';
import SearchIcon from '@mui/icons-material/Search';
import BasicModal from '../../../components/BasicModal';
import Box from '@mui/material/Box';
import CustomButton, { VARIANTES_BUTTON } from '../../../components/CustomButton';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import CustomCardMini from '../../../components/CustomCardMini';
import { Typography } from '@mui/material';
import BasicTableNoDescription from '../../../components/BasicTableNoDescription';


function DashboardVolunteers() {
  const user = useAuthUser();
  const query = useQuery(["QUERY_ACTIVITIES"],() => getActivitiesDateAPI(user().token),{
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
    ["Nombre de actividad","Lugar","Coordinador","Fecha","Ver detalles"],
    ["name", "place","coordinator","date", "button"]
    )


  return (
    <BodyWrapper title={"Actividades disponibles"}>
      {query.data.length ===0 ? <Typography variant="h4" component="div" gutterBottom>No hay actividades</Typography>:<BasicTableNoDescription objetoTabla = {objetoTabla}  maxHeight={"60vh"} />}
    </BodyWrapper>
  )
}

export default DashboardVolunteers


const ParseActivity = (data) => {
  return data.map((actividad) => {
    return {
      ...actividad,
      button: <ToolList  actividad={actividad}  id={actividad.id} />,
    };
  });
}

const ToolList = ({actividad, handleDelete, id}) => {

  const [handleCloseFunc, setHandleCloseFunc] = React.useState({});

  return (
    <CustomFlex justifyContent={"flex-start"} direction={"row"}>
      <CustomLink  to={`/vol/actividad/${id}`}>
        <SearchIcon />
      </CustomLink>
    </CustomFlex>
  )

}