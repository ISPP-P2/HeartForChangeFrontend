import * as React from 'react';
import { Avatar, Grid, Paper, useMediaQuery } from '@mui/material';
import CustomCard from '../../../components/CustomCard';
import BasicTable from '../../../components/BasicTable';
import CustomFlex from '../../../components/CustomFlex';
import { CustomList } from '../../../static/user';
import FormBeneficiaries from './FormBeneficiaries';
import { Box } from '@mui/system';
import CustomCardMini from '../../../components/CustomCardMini';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import CustomLink from '../../../components/CustomLink';
import CustomButton, { VARIANTES_BUTTON } from '../../../components/CustomButton';
import BasicModal from '../../../components/BasicModal';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { beneficiarios } from './forms';
import { useAuthUser } from 'react-auth-kit';
import { deleteBeneficiariesAPI, getBeneficiariesAPI } from '../../../api/subvenciones/api';
import { useQuery } from 'react-query';
import { Typography} from '@mui/material';
import { useMemo } from 'react';






function Beneficiaries() {

  const user = useAuthUser();
  const query = useQuery(["QUERY_BENEFICIARIES"],() => getBeneficiariesAPI(user().token));
  const mobile = useMediaQuery('(min-width:600px)');
  
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
                  title='Nº de beneficiarios'
                  iconD={<CustomLink to="/beneficiario/añadir"><CustomButton text={"Añadir"} /></CustomLink>}
                  totalNumber={query.data.length}/>
          </CustomFlex>
          <Listado data={query.data} />
      </CustomFlex>
    );
}

export default Beneficiaries;



const ToolList = ({beneficiarie, handleDelete, id}) => {
  return (
    <CustomFlex justifyContent={"flex-start"} direction={"row"}>
      <BasicModal title={"¿Estás seguro?"} heightButton={"1.5rem"} body={<Box>
        <Typography>El Beneficiario se eliminará permanentemente</Typography>
        <CustomButton onClick={()=>handleDelete(id)} text={"Eliminar"} variantButton={VARIANTES_BUTTON.RED} />
        </Box>} variant={VARIANTES_BUTTON.RED} text={<DeleteForeverIcon />}/>
    </CustomFlex>
  )

}


const Listado = ({data}) => {

  const user = useAuthUser();

  const handleDelete = (id) => {
    deleteBeneficiariesAPI(user().token, id)
    location.reload()
  }

  if(data.length === 0){
    return <Typography variant="h4" component="div" gutterBottom>
            No hay Beneficiarios
        </Typography>
  }

  const beneficiariosConBoton = useMemo(() => {
    return data.map((beneficiarie) => {
      return {
        ...beneficiarie,
        doublenationality: beneficiarie.doublenationality ? "Sí" : "No",
        european_citizen_authorization: beneficiarie.european_citizen_authorization ? "Sí" : "No",
        tourist_visa: beneficiarie.tourist_visa ? "Sí" : "No",
        health_card: beneficiarie.health_card ? "Sí" : "No",
        savings_possesion: beneficiarie.savings_possesion ? "Sí" : "No",
        sae_inscription: beneficiarie.sae_inscription ? "Sí" : "No",
        working: beneficiarie.working ? "Sí" : "No",
        computer_knowledge: beneficiarie.computer_knowledge ? "Sí" : "No",
        button: <ToolList beneficiarie={beneficiarie} handleDelete={handleDelete} id={beneficiarie.id}/>,
      };
    });
  }, [data])

  const BeneficiarieList = new CustomList(beneficiariosConBoton)
  let objetoTabla = BeneficiarieList.parseToTable(
    ["Nombre", "Primer apellido","Segundo Apellido","Nºdocumento","Genero","Ciudad","Numero","Nacionalidad"], 
    ["name", "firstSurname", "secondSurname","documentNumber","gender","town","telephone","nationality"],
    ["Fecha de nacimiento","Trabaja","correo","Dirección"],
    ["birthday","working","email","address"]
    )

    return (
        <BasicTable objetoTabla = {objetoTabla}  maxHeight={"80vh"} maxWidth={"85vw"} ></BasicTable>
    )

}