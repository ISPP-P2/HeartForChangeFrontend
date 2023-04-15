import * as React from 'react';
import Box from '@mui/material/Box';
import BasicTable from '../../../components/BasicTable';
import CustomFlex from '../../../components/CustomFlex';
import { CustomList } from '../../../static/user';
import SearchIcon from '@mui/icons-material/Search';
import CustomCardMini from '../../../components/CustomCardMini';
import CustomLink from '../../../components/CustomLink';
import BasicModal from '../../../components/BasicModal';
import CustomButton, { VARIANTES_BUTTON } from '../../../components/CustomButton';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Typography } from '@mui/material';
import ActivityForm from './ActivityForm';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { useAuthUser } from 'react-auth-kit';
import { useQuery } from 'react-query';
import { deleteActivityAPI, getActivitiesAPI } from '../../../api/actividades/api';
import BodyWrapper from '../../../components/BodyWrapper';
import CustomReloading from '../../../components/CustomReloading';
import CustomError from '../../../components/CustomError';
import { CustomNotistackContext } from '../../../context/CustomNotistack';
import BasicTableNoDescription from '../../../components/BasicTableNoDescription';



function Activities() {
  const user = useAuthUser();
  const [handleDeleteFunc, setHandleDeleteFunc] = React.useState({});
  const {setSuccessMsg, setErrorMsg} = React.useContext(CustomNotistackContext)
  const [disableButton, setDisableButton] = React.useState(false);
  const [filterValue, setFilterValue] = React.useState('');

  const query = useQuery(["QUERY_ACTIVITIES"],() => getActivitiesAPI(user().token),{
    retry: 2,
    refetchOnWindowFocus: false,
  });
 
  if(query.isLoading){
    return <CustomReloading />
  }

  if(query.isError){
    return <CustomError onClick={()=> query.refetch()}/>
  }

  const handleDelete = (id, handleClose) => {
    setDisableButton(true)
    deleteActivityAPI(user().token, id).then(() => {
      handleClose.handleClose()
      query.refetch()
      setSuccessMsg("Subvención eliminada correctamente")
    }).catch((err) => {
      setErrorMsg("Error al eliminar la subvención")
    }).finally(() => {
      setDisableButton(false)
    })
  }
  const filteredData = query.data.filter((item) =>
  item.name.toLowerCase().includes(filterValue.toLowerCase())
  );

  const ActivityList = new CustomList(ParseActivity(filteredData, handleDelete, disableButton));
  let objetoTabla = ActivityList.parseToTableBasic(
    ["Nombre de actividad","Lugar","Coordinador","Fecha","Ver detalles"],
    ["name", "place","coordinator","date", "button"]
    )

  
  return (
    <BodyWrapper title={"Lista de actividades"}>
      <CustomFlex direction={"column"}>
          <CustomFlex direction={"row"}>
              <CustomCardMini
                    title='Nº de actividades'
                    iconD={<BasicModal setHandleCloseButton={setHandleDeleteFunc} title={"Añadir actividad"} text={"Añadir"} body={
                    <ActivityForm handleClose={handleDeleteFunc}  query={query}/>}/>}
                    totalNumber={query.data.length}/>
            </CustomFlex>
        <Box display={"flex"} flexDirection={"column"} gap={'1rem'}>
          <Box>
                <TextField
              id="input-with-icon-textfield"
              label="Nombre del Beneficiario"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              variant="standard"  
              value={filterValue}
              onChange={(e) => setFilterValue(e.target.value)}
            />
          </Box>
          <BasicTableNoDescription objetoTabla = {objetoTabla}  maxHeight={"60vh"} />
        </Box>
        
        </CustomFlex> 
      </BodyWrapper>
    );
}

export default Activities;


const ToolList = ({actividad, handleDelete, id, disableButton}) => {

  const [handleCloseFunc, setHandleCloseFunc] = React.useState({});

  return (
    <CustomFlex justifyContent={"flex-start"} direction={"row"}>
      <CustomLink  to={`/ong/actividad/${id}`}>
        <SearchIcon />
      </CustomLink>
      <BasicModal  setHandleCloseButton={setHandleCloseFunc} title={"¿Estás seguro?"} heightButton={"2.25rem"} body={<Box>
        <Typography>El actividad se eliminará permanentemente</Typography>
        <CustomButton isLoading={disableButton} onClick={()=>handleDelete(id, handleCloseFunc)} text={"Eliminar"}  variantButton={VARIANTES_BUTTON.RED} />
        </Box>} variant={VARIANTES_BUTTON.RED}  text={<DeleteForeverIcon />}
        />
    </CustomFlex>
  )

}


const ParseActivity = (data, handleDelete, disableButton) => {
  return data.map((actividad) => {
    return {
      ...actividad,
      button: <ToolList  actividad={actividad} disableButton={disableButton} handleDelete={handleDelete}  id={actividad.id} />,
    };
  });
}