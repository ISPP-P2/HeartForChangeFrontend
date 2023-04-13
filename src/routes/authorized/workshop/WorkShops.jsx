import * as React from 'react';
import CustomFlex from '../../../components/CustomFlex';
import { CustomList } from '../../../static/user';
import CustomCardMini from '../../../components/CustomCardMini';
import BasicModal from '../../../components/BasicModal';
import { useAuthUser } from 'react-auth-kit';
import { useQuery } from 'react-query';
import BodyWrapper from '../../../components/BodyWrapper';
import CustomReloading from '../../../components/CustomReloading';
import CustomError from '../../../components/CustomError';
import { CustomNotistackContext } from '../../../context/CustomNotistack';
import BasicTableNoDescription from '../../../components/BasicTableNoDescription';
import { getWorkshopsAPI } from '../../../api/beneficiario/workshop';
import WorkShopForm from './WorkShopForm';
import CustomLink from '../../../components/CustomLink';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

import SearchIcon from '@mui/icons-material/Search';
import { Box, Typography } from '@mui/material';
import CustomButton, { VARIANTES_BUTTON } from '../../../components/CustomButton';


function WorkShops() {
  const user = useAuthUser();
  const [handleDeleteFunc, setHandleDeleteFunc] = React.useState({});
  const {setSuccessMsg, setErrorMsg} = React.useContext(CustomNotistackContext)
  const query = useQuery(["QUERY_WORKSHOP"],() => getWorkshopsAPI(user().token),{
    retry: 2,
    refetchOnWindowFocus: false,
  });
 
  if(query.isLoading){
    return <CustomReloading />
  }

  if(query.isError){
    return <CustomError onClick={()=> query.refetch()}/>
  }

  

  const ActivityList = new CustomList(parseTaller(query.data));
  let objetoTabla = ActivityList.parseToTableBasic(
    ["Nombre del taller","Lugar","Coordinador","Fecha","Ver detalles"],
    ["name", "place","coordinator","date", "button"]
  )

  
  return (
    <BodyWrapper title={"Lista de talleres"}>
      <CustomFlex direction={"column"}>
          <CustomFlex direction={"row"}>
              <CustomCardMini
                    title='Nº de talleres'
                    iconD={<BasicModal 
                      setHandleCloseButton={setHandleDeleteFunc} 
                      title={"Añadir taller"} 
                      text={"Añadir"}
                      body={<WorkShopForm handleClose={handleDeleteFunc} query={query}/>}
                      />}
                    totalNumber={query.data.length}/>
            </CustomFlex>
         <BasicTableNoDescription objetoTabla = {objetoTabla}  maxHeight={"60vh"} />
        </CustomFlex> 
      </BodyWrapper>
    );
}

export default WorkShops;


const ToolList = ({actividad, handleDelete, id}) => {
  const [handleCloseFunc, setHandleCloseFunc] = React.useState({});

  return (
    <CustomFlex justifyContent={"flex-start"} direction={"row"}>
      <CustomLink  to={`/ong/taller/${id}`}>
        <SearchIcon />
      </CustomLink>
      <BasicModal  setHandleCloseButton={setHandleCloseFunc} title={"¿Estás seguro?"} heightButton={"2.25rem"} body={<Box>
        <Typography>El actividad se eliminará permanentemente</Typography>
        <CustomButton onClick={()=>handleDelete(id, handleCloseFunc)} text={"Eliminar"}  variantButton={VARIANTES_BUTTON.RED} />
        </Box>} variant={VARIANTES_BUTTON.RED}  text={<DeleteForeverIcon />}
        />
    </CustomFlex>
  )
}


const parseTaller = (data) => {
    return data.map((taller) => {
        
        return {  
            ...taller,  
            button:<ToolList actividad={taller} handleDelete={()=> {}} id={taller.id}/>
          };
    })
          
}