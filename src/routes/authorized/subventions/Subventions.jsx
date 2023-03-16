import Box from '@mui/material/Box';
import BasicTable from '../../../components/BasicTable';
import { CustomList } from '../../../static/activity'
import CustomCardMini from '../../../components/CustomCardMini';
import CustomFlex from '../../../components/CustomFlex';
import BasicModal from '../../../components/BasicModal';
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


function Subventions() {

  const user = useAuthUser();

  const query = useQuery(["QUERY_SUBVENTIONS"],() => getSubventions(user().token));
  
  console.log(query)


  const [handleDelete, setHandleDelete] = useState({});
  console.log(handleDelete)
  return (
    <BodyWrapper title={"Lista de subvenciones"}>
    <CustomFlex direction={"column"}>
          <CustomFlex direction={"row"}>
              <CustomCardMini
                    title='Nº de subvenciones'
                    iconD={<BasicModal setHandleCloseButton={setHandleDelete}  title={"Añadir subvención"} text={"Añadir"} body={<SubventionForm  handleClose={handleDelete} query={query} />}/>}
                    totalNumber={query.isSuccess ? query.data.length : 0}/>
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


  if(query.isLoading){
    return <Typography variant="h4" component="div" gutterBottom>
            Cargando...
        </Typography>
  }

  if(query.isError){
    return <Typography variant="h4" component="div" gutterBottom>
           {query.error}
        </Typography>
  }

  if(query.data.length === 0){
    return <Typography variant="h4" component="div" gutterBottom>
            No hay subvenciones
        </Typography>
  }




  const SubventionList = new CustomList(ParseSubvention(query.data, handleDelete))
  let objetoTabla = SubventionList.parseToTable(
    ["Nombre", "Gubernamental","Estado","Privada/Pública","Eliminar"], 
    ["justification", "gubernamental", "state","privateGrant","button"],
    ["Cantidad"],
    ["amount"]
    )

    return (
        <BasicTable objetoTabla = {objetoTabla}  maxHeight={"80vh"} maxWidth={"85vw"} ></BasicTable>
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
      <BasicModal setHandleCloseButton={setHandleCloseFunc} title={"¿Estás seguro?"} heightButton={"1.5rem"} body={<Box>
        <Typography>La subvención se eliminará permanentemente</Typography>
        <CustomButton onClick={()=>handleDelete(id, handleCloseFunc)} text={"Eliminar"} variantButton={VARIANTES_BUTTON.RED} />
        </Box>} variant={VARIANTES_BUTTON.RED} text={<DeleteForeverIcon />}/>
    </CustomFlex>
  )
}