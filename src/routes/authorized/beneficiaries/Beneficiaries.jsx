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






function Beneficiaries() {




  const beneficiariosConBoton = React.useMemo(() => beneficiarios.map((usuario) => {
    return {
      ...usuario,
      button: <ToolList usuario={usuario} handleEliminar={()=> {}} />
    };
  }), [beneficiarios]);


  const BeneficiariesList = new CustomList(beneficiariosConBoton)
  let objetoTabla = BeneficiariesList.parseToTable(
    ["Id", "Nombre de usuario", "Nombre","Apellido", "Email","Edad","Rol","Avatar", "Ver Detalles"], 
    ["id","username", "name", "surname", "email", "age","role","avatarImage", "button"],
    ["Actividades Realizadas", "Fecha"],
    ["nombreActividad", "fechaActividad"]
    )

    const mobile = useMediaQuery('(min-width:600px)')
  
  return (
      <CustomFlex direction={"column"}>
          <CustomFlex direction={"row"}>
            <CustomCardMini 
                  title='Beneficiarios registrados'
                  iconD={<CustomLink to="/añadir/beneficiario"><CustomButton text={"Añadir"} /></CustomLink>}
                  totalNumber="100"/>
          </CustomFlex>
            <BasicTable objetoTabla = {objetoTabla} maxHeight={"60vh"} ></BasicTable>
      </CustomFlex>
    );
}

export default Beneficiaries;



const ToolList = ({usuario, handleEliminar}) => {
  return (
    <CustomFlex justifyContent={"space-evenly"} direction={"row"}>
      <CustomLink to={`/beneficiario/${usuario.id}`}>
          <SearchIcon />
        </CustomLink>
      <BasicModal title={"Eliminar"} heightButton={"1rem"} widthButton={"2rem"} variant={VARIANTES_BUTTON.RED} text={<DeleteForeverIcon />}/>
    </CustomFlex>
  )

}