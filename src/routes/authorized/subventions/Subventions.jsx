import Box from '@mui/material/Box';
import BasicTable from '../../../components/BasicTable';
import { CustomList } from '../../../static/activity'
import CustomCardMini from '../../../components/CustomCardMini';
import CustomFlex from '../../../components/CustomFlex';
import CustomLink from '../../../components/CustomLink';
import BasicModal from '../../../components/BasicModal';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { Typography } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import CustomButton, { VARIANTES_BUTTON } from '../../../components/CustomButton';
import SubventionForm from './SubventionForm';
import { useQuery } from 'react-query';
import { deleteSubvencioAPI, getSubventions } from '../../../api/subvenciones/api';
import { useAuthUser } from 'react-auth-kit';
import { useContext, useState } from 'react';
import { CustomNotistackContext } from '../../../context/CustomNotistack';
import BodyWrapper from '../../../components/BodyWrapper';
import CustomReloading from '../../../components/CustomReloading';
import CustomError from '../../../components/CustomError';


function Subventions() {

  const user = useAuthUser();
  const [handleDelete, setHandleDelete] = useState({});

  const query = useQuery(["QUERY_SUBVENTIONS"],() => getSubventions(user().token),{
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
    <BodyWrapper title={"Lista de subvenciones"}>
    <CustomFlex direction={"column"}>
          <CustomFlex direction={"row"}>
              <CustomCardMini
                    title='Nº de subvenciones'
                    iconD={<BasicModal setHandleCloseButton={setHandleDelete}  title={"Añadir subvención"} text={"Añadir"} body={<SubventionForm  handleClose={handleDelete} query={query} />}/>}
                    totalNumber={query.isError ? 0 : query.data.length}/>
          </CustomFlex>
        <Listado query={query} />
    </CustomFlex>
    </BodyWrapper>
    );
}


export default Subventions;

const Listado = ({query}) => {

  const user = useAuthUser();
  const {setSuccessMsg, setErrorMsg} = useContext(CustomNotistackContext)
 
  const handleDelete = (id, handleClose) => {
    deleteSubvencioAPI(user().token, id).then(() => {
      handleClose.handleClose()
      query.refetch()
      setSuccessMsg("Subvención eliminada correctamente")
    }).catch((err) => {
      setErrorMsg("Error al eliminar la subvención")
    })
  }


  

  if(query.data.length === 0){
    return <Typography variant="h4" component="div" gutterBottom>
            No hay subvenciones
        </Typography>
  }

  const [filterValue, setFilterValue] = useState('');
  const filteredData = query.data.filter((item) =>
  item.justification.toLowerCase().includes(filterValue.toLowerCase())
  );
  const SubventionList = new CustomList(ParseSubvention(filteredData, handleDelete))
  let objetoTabla = SubventionList.parseToTable(
    ["Nombre", "Gubernamental","Estado","Privada/Pública","Eliminar"], 
    ["justification", "gubernamental", "state","privateGrant","button"],
    ["Cantidad (€)"],
    ["amount"]
    )

    return (
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
        <BasicTable objetoTabla = {objetoTabla}  maxHeight={"80vh"} maxWidth={"85vw"} ></BasicTable>
        </Box>
    )

}

const ParseSubvention = (subvencions, handleDelete) => {
  return subvencions.map((subvencion) => {
    return {
      ...subvencion,
      gubernamental: subvencion.gubernamental ? "Sí" : "No",
      state: StateParser(subvencion.state),
      privateGrant: subvencion.privateGrant ? "Privada" : "Pública",
      button: <ToolList subvencion={subvencion} handleDelete={handleDelete} id={subvencion.id}/>,
    };
  });
}

const StateParser = (state) => {
    if(state == "REQUESTED"){
      return "Pendiente"
    } 
    if(state == "ACCEPTED"){
      return "Aceptada"
    } 
    if(state == "DENIED"){
      return "Denegada"
    } 
    if(state == "REFORMULATION"){
      return "Reformulada"
    } 
    return "Error"
}


const ToolList = ({subvencion, handleDelete, id}) => {
  const [handleCloseFunc, setHandleCloseFunc] = useState({});

  return (
    <CustomFlex justifyContent={"flex-start"} direction={"row"}>
      <CustomLink to={`/ong/subvencion/${subvencion.id}`}><SearchIcon /></CustomLink>
      <BasicModal setHandleCloseButton={setHandleCloseFunc} title={"¿Estás seguro?"} heightButton={"2.25rem"} body={<Box>
        <Typography>La subvención se eliminará permanentemente</Typography>
        <CustomButton onClick={()=>handleDelete(id, handleCloseFunc)} text={"Eliminar"} variantButton={VARIANTES_BUTTON.RED} />
        </Box>} variant={VARIANTES_BUTTON.RED} text={<DeleteForeverIcon />}/>
    </CustomFlex>
  )
}