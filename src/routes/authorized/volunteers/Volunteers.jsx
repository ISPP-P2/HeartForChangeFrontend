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
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { deleteVolunteerAPI, getVolunteersAPI } from '../../../api/voluntarios/api';
import BodyWrapper from '../../../components/BodyWrapper';
import CustomError from '../../../components/CustomError';
import CustomReloading from '../../../components/CustomReloading';
import { useContext, useState } from 'react';
import { CustomNotistackContext } from '../../../context/CustomNotistack';
import BasicTableNoDescription from '../../../components/BasicTableNoDescription';

const Listado = ({data, query}) => {
  const {setSuccessMsg, setErrorMsg} = useContext(CustomNotistackContext)
  const [disableButton, setDisableButton] = useState(false)
  const user = useAuthUser();
  const handleDelete = (id, handleClose) => {
    setDisableButton(true)
    deleteVolunteerAPI(user().token, id).then(
      (response) => {
          query.refetch()
          setSuccessMsg("Voluntario eliminado correctamente")
          handleClose.handleClose()
      }
    ).catch((error) => {
        setErrorMsg("Error al eliminar el voluntario")
        handleClose.handleClose()
    }).finally(() => setDisableButton(false));
  }



  const [filterValue, setFilterValue] = useState('');

  const filteredData = data.filter((item) =>
  item.name.toLowerCase().includes(filterValue.toLowerCase())
  );
  const VolunteersList = new CustomList(VoluntarioParser(filteredData, handleDelete, disableButton))

  
  let objetoTabla = VolunteersList.parseToTableBasic(
    ["Nombre de usuario", "Nombre","Primer Apellido", "Segundo Apellido","Género", "Email","Herramientas"], 
    ["username", "name", "firstSurname","secondSurname", "gender","email", "button"]
  )

  return (
    <Box display={"flex"} flexDirection={"column"} gap={'1rem'}>
    <Box>
          <TextField
        id="input-with-icon-textfield"
        label="Nombre del voluntario"
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
      <BasicTableNoDescription objetoTabla = {objetoTabla}  maxHeight={"80vh"} maxWidth={"85vw"} />
      </Box>
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
          <Listado data={query.data} query={query}/>
      </CustomFlex>
    </BodyWrapper>
    );
}

export default Volunteers;



const ToolList = ({usuario, handleDelete, id, disableButton}) => {

  const [handleClose, setHandleClose] = useState({})

  return (
    <CustomFlex justifyContent={"flex-start"} direction={"row"}>
      <CustomLink  to={`/ong/voluntario/${id}`}>
        <SearchIcon />
      </CustomLink>
      <BasicModal setHandleCloseButton={setHandleClose} title={"¿Estás seguro?"} heightButton={"2.25rem"} body={<Box>
        <Typography>El voluntario se eliminará permanentemente</Typography>
        <CustomButton onClick={()=>handleDelete(id, handleClose)} isLoading={disableButton} text={"Eliminar"} variantButton={VARIANTES_BUTTON.RED} />
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


const VoluntarioParser = (data, handleDelete, disableButton) => {
  return data.map((usuario) => {
    return {
      ...usuario,
      gender: usuario.gender === "MALE" ? "Hombre" : "Mujer",
      rolAccount: RolAccountParser(usuario.rolAccount),
      button:<ToolList usuario={usuario} handleDelete={handleDelete} disableButton={disableButton} id={usuario.id}/>,
    };
  });
}