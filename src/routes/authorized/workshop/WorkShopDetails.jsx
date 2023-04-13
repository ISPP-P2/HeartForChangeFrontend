import React from 'react'
import { useParams } from 'react-router-dom'
import { addBeneficiaryToWorkshopAPI, deleteBeneficiarieInWorkShopAPI, getAttendancesByTaskId, getWorkshopByIdAPI } from '../../../api/beneficiario/workshop';
import { CustomNotistackContext } from '../../../context/CustomNotistack';
import { useAuthUser } from 'react-auth-kit';
import { useQuery } from 'react-query';
import { CustomList } from '../../../static/user';
import BasicTableNoDescription from '../../../components/BasicTableNoDescription';
import CustomReloading from '../../../components/CustomReloading';
import CustomError from '../../../components/CustomError';
import BodyWrapper from '../../../components/BodyWrapper';
import CustomFlex from '../../../components/CustomFlex';
import { Autocomplete, Box, Grid, TextField, Typography, useMediaQuery } from '@mui/material';
import { WorkShop_Form } from './WorkShopForm';
import BasicFrom from '../../../components/BasicFrom';
import CustomCard from '../../../components/CustomCard';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import CustomButton, { VARIANTES_BUTTON } from '../../../components/CustomButton';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CustomLink from '../../../components/CustomLink';
import { getBeneficiariesAPI } from '../../../api/beneficiario/api';
import BasicTable from '../../../components/BasicTable';
import BasicModal from '../../../components/BasicModal';
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
    

  return (
    <BodyWrapper title={
        <CustomFlex justifyContent={"space-between"}>
        {`Detalles del taller ${id}`}
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
            <BeneficiariosTable taskId={id}  />
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


  const BeneficiariosTable = ({taskId}) => {
    const user = useAuthUser();
    const [beneficiaries, setBeneficiaries] = React.useState(null);

    const query = useQuery(["QUERY_WORKSHOP_ATTENDANCES", taskId], () => getAttendancesByTaskId(user().token, taskId),{
      retry: 2,
      onSuccess: (data) => {
        setBeneficiaries(data)
      },
      refetchOnWindowFocus: false,
    });


    if(query.isLoading || beneficiaries === null){
        return <CustomReloading />
    }

    if(query.isError){
        return <CustomError onClick={()=> query.refetch()}/>
    }

    const isInWorkshop = (beneficiaryId) => {
      return beneficiaries.find((beneficiario) => beneficiario.id === beneficiaryId)
    }
        
    const BeneficiaryList = new CustomList(ParseBeneficiarios(beneficiaries, taskId, query.refetch))
    let objetoTabla = BeneficiaryList.parseToTableBasic(
      ["Nombre","Género", "Email","Eliminar"], 
      ["name", "gender","email", "deleteBeneficiarios"]
    )
    return (
      <>
        <BeneficiariosBusqueda taskId={taskId} isInWorkshop={isInWorkshop} refetchList={query.refetch} />
        <BasicTableNoDescription objetoTabla = {objetoTabla}  maxHeight={"50vh"} />
      </>
    )

}

const ParseBeneficiarios = (beneficiarios, taskId, refetch) => {
    return beneficiarios.map((beneficiario) => {
        return {  

            ...beneficiario,
            gender: beneficiario.gender === "MALE" ? "Hombre" : "Mujer" ,
            deleteBeneficiarios: <DeleteBeneficiarios beneficiario={beneficiario} taskId={taskId} refetch={refetch}/>
        }
    })
}





const BeneficiariosBusqueda = ({taskId,isInWorkshop, refetchList}) => {
    const user = useAuthUser();
    const [beneficiaries, setBeneficiaries] = React.useState(null);
    const [value, setValue] = React.useState(null);
    const [isLoading, setIsLoading] = React.useState(false);
    const [inputValue, setInputValue] = React.useState('');
    const {setSuccessMsg, setErrorMsg} = React.useContext(CustomNotistackContext)

    const query = useQuery(["QUERY_BENEFICIARIES"],() => getBeneficiariesAPI(user().token),{
        retry: 2,
        onSuccess: (data) => {
            setBeneficiaries(data)
        },
        refetchOnWindowFocus: false,
    });

    if(beneficiaries === null || query.isLoading){
      return <CustomReloading />
    }

    if(query.isError){
        return <CustomError onClick={()=> {
            query.refetch()
        }}/>
    }


    const addBeneficiary = () => {
        if(value === null){
            setErrorMsg("No se ha seleccionado ningún beneficiario")
            return
        }

        if(isInWorkshop(value.value.id)){
            setErrorMsg("El beneficiario ya está en el taller")
            return
        }

        setIsLoading(true)
        addBeneficiaryToWorkshopAPI(user().token, taskId, value.value.id)
        .then((res) => {
            refetchList()
            setSuccessMsg("Beneficiario añadido correctamente")
            setIsLoading(false)
        })
        .catch((err) => {
            setErrorMsg("Error al añadir beneficiario")
            setIsLoading(false)
        })


    }
    return (
      <>
      {isLoading ? <CustomReloading /> :  <CustomFlex align='center'>
            <Autocomplete
        disablePortal
        onChange={(event, newValue) => {
            setValue(newValue);
          }}
          inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        options={beneficiaries.map((beneficiario) => {return {label : `${beneficiario.firstSurname} ${beneficiario.secondSurname},${beneficiario.name}`, value: beneficiario}})}
        isOptionEqualToValue={(option, value) => value.id === option.id}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Añadir beneficiario" />}
        />
        <CustomButton onClick={addBeneficiary} variantButton={VARIANTES_BUTTON.GREEN2} text="AÑADIR"/>
        </CustomFlex>
        }
       </>
       
    )

}


const DeleteBeneficiarios = ({beneficiario, taskId, refetch}) => {
  
    const [handleCloseFunc, setHandleCloseFunc] = React.useState(null);
    const {setSuccessMsg, setErrorMsg} = React.useContext(CustomNotistackContext)


    const user = useAuthUser();
    const handleDelete = () => {
      deleteBeneficiarieInWorkShopAPI(user().token,taskId, beneficiario.id)
      .then((res) => {
        handleCloseFunc.handleClose()
        refetch()
        setSuccessMsg("Beneficiario eliminado correctamente")
      })
      .catch((err) => {
        console.log(err)
        setErrorMsg("Error al eliminar beneficiario")
      })
    }

    return (  
      <CustomFlex>
         <BasicModal  setHandleCloseButton={setHandleCloseFunc} title={"¿Estás seguro?"} heightButton={"2.25rem"} body={<Box>
        <Typography>El actividad se eliminará permanentemente</Typography>
        <CustomButton onClick={()=>handleDelete()} text={"Eliminar"}  variantButton={VARIANTES_BUTTON.RED} />
        </Box>} variant={VARIANTES_BUTTON.RED}  text={<DeleteForeverIcon />}
        />
      </CustomFlex>
    )
}
        
        
