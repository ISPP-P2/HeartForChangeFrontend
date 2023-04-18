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
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { useState } from 'react';
import BodyWrapper from '../../../components/BodyWrapper';
import CustomReloading from '../../../components/CustomReloading';
import CustomError from '../../../components/CustomError';
import { CustomNotistackContext } from '../../../context/CustomNotistack';
import moment from 'moment';






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
          <Listado data={query.data} query={query}/>
      </CustomFlex>
    </BodyWrapper>
    );
}

export default Beneficiaries;



const Listado = ({data, query}) => { 
  const user = useAuthUser();
  const {setSuccessMsg, setErrorMsg} = React.useContext(CustomNotistackContext)
  const [disableButton, setDisableButton] = React.useState(false)
  const handleDelete = (id, handleClose) => {
    setDisableButton(true)
    deleteBeneficiariesAPI(user().token, id).then(() => {
      handleClose.handleClose()
      query.refetch()
      setSuccessMsg("Subvención eliminada correctamente")
    }).catch((err) => {
      setErrorMsg("Error al eliminar la subvención")
    }).finally(() => {
      setDisableButton(false)
    })
  }

  const [filterValue, setFilterValue] = React.useState('');

  const filteredData = data.filter((item) =>
  item.name.toLowerCase().includes(filterValue.toLowerCase())
  );


  const BeneficiarieList = new CustomList(ParseBenficiario(filteredData, handleDelete, disableButton))

  let objetoTabla = BeneficiarieList.parseToTable(
    ["Nombre", "Primer apellido","Segundo Apellido","Nºdocumento","Genero","Ciudad","Numero","Nacionalidad","Herramientas"], 
    ["name", "firstSurname", "secondSurname","documentNumber","gender","town","telephone","nationality","button"],
    ["Fecha de nacimiento","Correo","Dirección"],
    ["birthday","email","address"]
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



const ToolList = ({beneficiarie, handleDelete, id, disableButton}) => {

  const [handleCloseFunc, setHandleCloseFunc] = React.useState({});

  return (
    <CustomFlex justifyContent={"flex-start"} direction={"row"}>
      <CustomLink to={`/ong/beneficiario/${beneficiarie.id}`}><SearchIcon /></CustomLink>
      <BasicModal setHandleCloseButton={setHandleCloseFunc} title={"¿Estás seguro?"} heightButton={"2.25rem"} body={<Box>
        <Typography>El Beneficiario se eliminará permanentemente</Typography>
        <CustomButton isLoading={disableButton} onClick={()=>handleDelete(id, handleCloseFunc)} text={"Eliminar"} variantButton={VARIANTES_BUTTON.RED} />
        </Box>} variant={VARIANTES_BUTTON.RED} text={<DeleteForeverIcon />}/>
    </CustomFlex>
  )
}


const ParseBenficiario = (data, handleDelete, disableButton) => {
  return data.map((beneficiarie) => {
    return {
      ...beneficiarie,
      gender: beneficiarie.gender === "MALE" ? "Hombre" : "Mujer",
      birthday: moment(`${beneficiarie.birthday[0]}-${beneficiarie.birthday[1]}-${beneficiarie.birthday[2]}`).format("DD/MM/YYYY"),
      button: <ToolList disableButton={disableButton} beneficiarie={beneficiarie} handleDelete={handleDelete} id={beneficiarie.id}/>,
    };
  });
}
