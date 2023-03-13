import * as React from 'react';
import Box from '@mui/material/Box';
import BasicTable from '../../../components/BasicTable';
import CustomCard from '../../../components/CustomCard'
import { CustomList } from '../../../static/activity'
import CustomCardMini from '../../../components/CustomCardMini';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import CustomFlex from '../../../components/CustomFlex';
import BasicModal from '../../../components/BasicModal';
import { Typography, useMediaQuery } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import CustomButton, { VARIANTES_BUTTON } from '../../../components/CustomButton';
import SubventionForm from './SubventionForm';
import { axiosWithToken } from '../../../api/auth/axios';
import { useQuery } from 'react-query';
import { deleteSubvencioAPI, getSubventions } from '../../../api/subvenciones/api';
import { useAuthUser } from 'react-auth-kit';
import { useMemo } from 'react';


function Subventions() {

  const user = useAuthUser();
  const query = useQuery(["QUERY_SUBVENTIONS"],() => getSubventions(user().token));
  
  console.log(query)

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


  return (
    <CustomFlex direction={"column"}>
          <CustomFlex direction={"row"}>
              <CustomCardMini
                    title='Nº de subvenciones'
                    iconD={<BasicModal  title={"Añadir subvención"} text={"Añadir"} body={<SubventionForm   />}/>}
                    totalNumber={query.data.length}/>
          </CustomFlex>
        <Listado data={query.data} />
    </CustomFlex>
    );
}


export default Subventions;



const ToolList = ({subvencion, handleDelete, id}) => {
  return (
    <CustomFlex justifyContent={"flex-start"} direction={"row"}>
      <BasicModal title={"¿Estás seguro?"} heightButton={"1.5rem"} body={<Box>
        <Typography>La subvención se eliminará permanentemente</Typography>
        <CustomButton onClick={()=>handleDelete(id)} text={"Eliminar"} variantButton={VARIANTES_BUTTON.RED} />
        </Box>} variant={VARIANTES_BUTTON.RED} text={<DeleteForeverIcon />}/>
    </CustomFlex>
  )
}

const Listado = ({data}) => {

  const user = useAuthUser();
  const handleDelete = (id) => {
    deleteSubvencioAPI(user().token, id)
    location.reload()
  }


  if(data.length === 0){
    return <Typography variant="h4" component="div" gutterBottom>
            No hay subvenciones
        </Typography>
  }

  const subvencionesConBoton = useMemo(() => {
    return data.map((subvencion) => {
      return {
        ...subvencion,
        gubernamental: subvencion.gubernamental ? "Sí" : "No",
        state: StateParser(subvencion.state),
        privateGrant: subvencion.privateGrant ? "Privada" : "Pública",
        button: <ToolList subvencion={subvencion} handleDelete={handleDelete} id={subvencion.id}/>,
      };
    });
  }, [data])

  const SubventionList = new CustomList(subvencionesConBoton)
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