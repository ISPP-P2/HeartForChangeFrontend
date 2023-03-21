import * as React from 'react';
import BasicTable from '../../../components/BasicTable';
import CustomFlex from '../../../components/CustomFlex';
import { CustomList } from '../../../static/user';
import { Box } from '@mui/system';
import CircularProgress from '@mui/material/CircularProgress';
import CustomCardMini from '../../../components/CustomCardMini';
import SearchIcon from '@mui/icons-material/Search';
import CustomLink from '../../../components/CustomLink';
import CustomButton, { VARIANTES_BUTTON } from '../../../components/CustomButton';
import BasicModal from '../../../components/BasicModal';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useAuthUser } from 'react-auth-kit';
import { deleteBeneficiariesAPI, getBeneficiariesAPI } from '../../../api/beneficiario/api';
import { useQuery } from 'react-query';
import { Typography} from '@mui/material';
import BodyWrapper from '../../../components/BodyWrapper';
import CustomReloading from '../../../components/CustomReloading';
import CustomError from '../../../components/CustomError';
import { CustomNotistackContext } from '../../../context/CustomNotistack';






function Beneficiaries() {

  const user = useAuthUser();
  const query = useQuery(["QUERY_BENEFICIARIES"],() => getBeneficiariesAPI(user().token),{
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
    <BodyWrapper title={"Lista de beneficiarios"}>
      <CustomFlex direction={"column"}>
          <CustomFlex direction={"row"}>
            <CustomCardMini 
                  title='Nº de beneficiarios'
                  iconD={<CustomLink to="/ong/beneficiario/añadir"><CustomButton text={"Añadir"} /></CustomLink>}
                  totalNumber={query.data.length}/>
          </CustomFlex>
          <Listado data={query.data} />
      </CustomFlex>
    </BodyWrapper>
    );
}

export default Beneficiaries;



const Listado = ({data}) => { 
  const user = useAuthUser();
  const {setSuccessMsg, setErrorMsg} = React.useContext(CustomNotistackContext)
  const handleDelete = (id, handleClose) => {
    deleteBeneficiariesAPI(user().token, id).then(() => {
      handleClose.handleClose()
      query.refetch()
      setSuccessMsg("Subvención eliminada correctamente")
    }).catch((err) => {
      setErrorMsg("Error al eliminar la subvención")
    })
  }

  if(data.length === 0){
    return <Typography variant="h4" component="div" gutterBottom>
            No hay Beneficiarios
        </Typography>
  }


  const BeneficiarieList = new CustomList(ParseBenficiario(data, handleDelete))
  let objetoTabla = BeneficiarieList.parseToTable(
    ["Nombre", "Primer apellido","Segundo Apellido","Nºdocumento","Genero","Ciudad","Numero","Nacionalidad","Herramientas"], 
    ["name", "firstSurname", "secondSurname","documentNumber","gender","town","telephone","nationality","button"],
    ["Fecha de nacimiento","correo","Dirección"],
    ["birthday","email","address"]
    )
    return (
        <BasicTable objetoTabla = {objetoTabla}  maxHeight={"80vh"} maxWidth={"85vw"} ></BasicTable>
    )

}



const ToolList = ({beneficiarie, handleDelete, id}) => {

  const [handleCloseFunc, setHandleCloseFunc] = React.useState({});

  return (
    <CustomFlex justifyContent={"flex-start"} direction={"row"}>
      <CustomLink to={`/ong/beneficiario/${beneficiarie.id}`}><SearchIcon /></CustomLink>
      <BasicModal setHandleCloseButton={setHandleCloseFunc} title={"¿Estás seguro?"} heightButton={"1.5rem"} body={<Box>
        <Typography>El Beneficiario se eliminará permanentemente</Typography>
        <CustomButton onClick={()=>handleDelete(id, handleCloseFunc)} text={"Eliminar"} variantButton={VARIANTES_BUTTON.RED} />
        </Box>} variant={VARIANTES_BUTTON.RED} text={<DeleteForeverIcon />}/>
    </CustomFlex>
  )
}


const ParseBenficiario = (data, handleDelete) => {
  return data.map((beneficiarie) => {
    return {
      ...beneficiarie,
      gender: beneficiarie.gender === "MALE" ? "Hombre" : "Mujer",
      button: <ToolList beneficiarie={beneficiarie} handleDelete={handleDelete} id={beneficiarie.id}/>,
    };
  });
}
