import React from 'react'
import { useParams } from 'react-router-dom'
import { addBeneficiaryToWorkshopAPI, getAttendancesByTaskId, getWorkshopByIdAPI } from '../../../api/beneficiario/workshop';
import { CustomNotistackContext } from '../../../context/CustomNotistack';
import { useAuthUser } from 'react-auth-kit';
import { useQuery } from 'react-query';
import { CustomList } from '../../../static/user';
import BasicTableNoDescription from '../../../components/BasicTableNoDescription';
import CustomReloading from '../../../components/CustomReloading';
import CustomError from '../../../components/CustomError';
import BodyWrapper from '../../../components/BodyWrapper';
import CustomFlex from '../../../components/CustomFlex';
import { Autocomplete, Grid, TextField, Typography, useMediaQuery } from '@mui/material';
import { WorkShop_Form } from './WorkShopForm';
import BasicFrom from '../../../components/BasicFrom';
import CustomCard from '../../../components/CustomCard';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import CustomButton, { VARIANTES_BUTTON } from '../../../components/CustomButton';

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CustomLink from '../../../components/CustomLink';
import { getBeneficiariesAPI } from '../../../api/beneficiario/api';
import BasicTable from '../../../components/BasicTable';
function WorkShopDetails() {

    const { id } = useParams()
    const user = useAuthUser();
    const {setSuccessMsg, setErrorMsg} = React.useContext(CustomNotistackContext)
    const query = useQuery(["QUERY_WORKSHOP", id],() => getWorkshopByIdAPI(user().token, id),{
      retry: 2,
      refetchOnWindowFocus: false,
    });

    
    const mobile = useMediaQuery('(min-width:1200px)');

    const [readOnlyValue, toggleReadOnly] = React.useState(true);
   
    if(query.isLoading){
        return <CustomReloading />
      }

    if(query.isError){
        return <CustomError onClick={()=> query.refetch()}/>
    }

    if(query.data.type !== "TALLER"){
        query.remove()
        setErrorMsg("Error al cargar")
        navigate("/ong/talleres")
    }

    const updateActivity = (data) => { 
        console.log(data)
    }
    const attendances_query = useQuery(["QUERY_WORKSHOP_ATTENDANCES"], () => getAttendancesByTaskId(user().token, id),{
        retry: 2,
        refetchOnWindowFocus: false,
    });

  return (
    <BodyWrapper title={
        
        <CustomFlex justifyContent={"space-between"}>
        {`Detalles de la actividad ${id}`}
        <CustomButton variantButton={VARIANTES_BUTTON.GREEN2} onClick={() => {toggleReadOnly(!readOnlyValue)}} text="EDITAR DATOS" />
        </CustomFlex>
       } >
    <CustomFlex direction={"column"}>
      <CustomFlex direction={mobile ? "column" : "row"}>
        <Grid
        display={"grid"}
        gap={"1rem"}
        > 
            <BasicFrom 
            form={parseTaller(query.data)}
            readOnly={readOnlyValue}
            buttonText={"Confirmar"}
            handleSubmitForm={updateActivity}
            showButton = {!readOnlyValue}
            />     
        
            <BeneficiariosBusqueda taskId={id} attendancesQuery={attendances_query}/>
            
            <BeneficiariosTable query={attendances_query} />
        </Grid> 
      </CustomFlex>
    </CustomFlex>
    </BodyWrapper>
  )
}

export default WorkShopDetails



const parseTaller = (taller) => {
    return WorkShop_Form.map((item) => {
      return { ...item, value: taller[item.name] };
    });
  }


const BeneficiariosBusqueda = ({taskId, attendancesQuery}) => {
    const user = useAuthUser();
    const query = useQuery(["QUERY_BENEFICIARIES"],() => getBeneficiariesAPI(user().token),{
        retry: 2,
        refetchOnWindowFocus: false,
      });

    const [value, setValue] = React.useState(null);
    const [isLoading, setIsLoading] = React.useState(false);
    const [inputValue, setInputValue] = React.useState('');
    const {setSuccessMsg, setErrorMsg} = React.useContext(CustomNotistackContext)

    if(query.isLoading || attendancesQuery.isLoading){
    return <CustomReloading />
    }

    if(query.isError || attendancesQuery.isError){
        return <CustomError onClick={()=> {
            query.refetch()
            attendancesQuery.refetch()
        }}/>
    }

    

  
    const addBeneficiary = () => {
        if(value === null){
            setErrorMsg("No se ha seleccionado ningún beneficiario")
            return
        }

        if(attendancesQuery.data.find((beneficiario) => beneficiario.id === value.value.id)){
            setErrorMsg("El beneficiario ya está añadido")
            return
        }


        setIsLoading(true)
        addBeneficiaryToWorkshopAPI(user().token, taskId, value.value.id)
        .then((res) => {
            setSuccessMsg("Beneficiario añadido correctamente")
            setIsLoading(false)
        })
        .catch((err) => {
            setErrorMsg("Error al añadir beneficiario")
            setIsLoading(false)
        })


    }


    return (
        <CustomFlex align='center'>
            <Autocomplete
        disablePortal
        onChange={(event, newValue) => {
            setValue(newValue);
          }}
          inputValue={inputValue}
          onInputChange={(event, newInputValue) => {
            setInputValue(newInputValue);
          }}
        options={query.data.map((beneficiario) => {return {label : `${beneficiario.firstSurname} ${beneficiario.secondSurname},${beneficiario.name}`, value: beneficiario}})}
        isOptionEqualToValue={(option, value) => value.id === option.id}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Añadir beneficiario" />}
        />
        {isLoading ? <CustomReloading /> : <CustomButton onClick={addBeneficiary} variantButton={VARIANTES_BUTTON.GREEN2} text="AÑADIR"/>}
        </CustomFlex>
       
    )

}



const BeneficiariosTable = ({query}) => {
    const user = useAuthUser();
  

    if(query.isLoading){
        return <CustomReloading />
    }

    if(query.isError){
        return <CustomError onClick={()=> query.refetch()}/>
    }

        
    console.log(query)
    const BeneficiaryList = new CustomList(query.data)
    let objetoTabla = BeneficiaryList.parseToTableBasic(
      ["Nombre","Género", "Email","Herramientas"], 
      ["name", "gender","email", "button"]
    )
    return (
        <BasicTableNoDescription objetoTabla = {objetoTabla}  maxHeight={"60vh"}></BasicTableNoDescription>
    )

}