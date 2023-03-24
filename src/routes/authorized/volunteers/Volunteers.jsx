import users, { CustomList } from '../../../static/user'
import Box from '@mui/material/Box';
import CustomFlex from '../../../components/CustomFlex';
import BasicTable from '../../../components/BasicTable';
import CustomCardMini from '../../../components/CustomCardMini';
import SearchIcon from '@mui/icons-material/Search';
import CustomLink from '../../../components/CustomLink';
import CustomButton, { VARIANTES_BUTTON } from '../../../components/CustomButton';
import BasicModal from '../../../components/BasicModal';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useAuthUser } from 'react-auth-kit';
import { useQuery } from 'react-query';
import { Typography, useMediaQuery } from '@mui/material';
import { deleteVolunteerAPI, getVolunteersAPI } from '../../../api/voluntarios/api';
import BodyWrapper from '../../../components/BodyWrapper';
import CustomError from '../../../components/CustomError';
import CustomReloading from '../../../components/CustomReloading';
import { useContext, useState } from 'react';
import { CustomNotistackContext } from '../../../context/CustomNotistack';

const Listado = ({data}) => {
  const {setSuccessMsg, setErrorMsg} = useContext(CustomNotistackContext)

  const user = useAuthUser();
  const handleDelete = (id, handleClose) => {
    deleteVolunteerAPI(user().token, id).then(
      (response) => {
          setSuccessMsg("Voluntario eliminado correctamente")
          handleClose.handleClose()
      }
    ).catch((error) => {
        setErrorMsg("Error al eliminar el voluntario")
        handleClose.handleClose()
    });
  }


  if(data.length === 0){
    return <Typography variant="h4" component="div" gutterBottom>
            No hay voluntarios
        </Typography>
  }


  const VolunteersList = new CustomList(VoluntarioParser(data, handleDelete))
  let objetoTabla = VolunteersList.parseToTable(
    ["Nombre de usuario", "Nombre","Primer Apellido", "Segundo Apellido","Género", "Email","Herramientas"], 
    ["username", "name", "firstSurname","secondSurname", "gender","email", "button"],
    ["Actividades Realizadas", "Fecha"],
    ["nombreActividad", "fechaActividad"]
  )

    return (
        <BasicTable objetoTabla = {objetoTabla}  maxHeight={"80vh"} maxWidth={"85vw"} ></BasicTable>
    )

}


function Volunteers() {

  const user = useAuthUser();
  const query = useQuery(["QUERY_VOLUNTEERS"],() => getVolunteersAPI(user().token),{
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
    <BodyWrapper title={"Lista de voluntarios"}>
      <CustomFlex direction={"column"}>
         <CustomFlex  direction={"row"}>
            <CustomCardMini 
                  title='Nº de voluntarios'
                  iconD={<CustomLink to="/ong/voluntario/añadir"><CustomButton  text={"Añadir"} /></CustomLink>}
                  totalNumber={query.data.length}/>
          </CustomFlex>
          <Listado data={query.data} />
      </CustomFlex>
    </BodyWrapper>
    );
}

export default Volunteers;



const ToolList = ({usuario, handleDelete, id}) => {

  const [handleClose, setHandleClose] = useState({})

  return (
    <CustomFlex justifyContent={"flex-start"} direction={"row"}>
      <CustomLink  to={`/ong/voluntario/${id}`}>
        <SearchIcon />
      </CustomLink>
      <BasicModal setHandleCloseButton={setHandleClose} title={"¿Estás seguro?"} heightButton={"2.25rem"} body={<Box>
        <Typography>El voluntario se eliminará permanentemente</Typography>
        <CustomButton onClick={()=>handleDelete(id, handleClose)} text={"Eliminar"} variantButton={VARIANTES_BUTTON.RED} />
        </Box>} variant={VARIANTES_BUTTON.RED} text={<DeleteForeverIcon />}/>
    </CustomFlex>
  )

}


const RolAccountParser = (rolAccount) => {
  if(rolAccount == "ONG"){
    return "ONG"
  } 
  if(rolAccount == "VOLUNTEER"){
    return "Voluntario"
  } 
  if(rolAccount == "BENEFICIARY"){
    return "Beneficiario"
  } 
  return "Error"
}


const VoluntarioParser = (data, handleDelete) => {
  return data.map((usuario) => {
    return {
      ...usuario,
      gender: usuario.gender === "MALE" ? "Hombre" : "Mujer",
      rolAccount: RolAccountParser(usuario.rolAccount),
      button:<ToolList usuario={usuario} handleDelete={handleDelete} id={usuario.id}/>,
    };
  });
}