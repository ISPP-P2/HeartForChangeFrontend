import React from 'react'
import { useParams } from 'react-router-dom'
import { CustomNotistackContext } from '../../../context/CustomNotistack';
import { useAuthUser } from 'react-auth-kit';
import { useQuery } from 'react-query';
import { CustomList } from '../../../static/user';
import BasicTableNoDescription from '../../../components/BasicTableNoDescription';
import CustomReloading from '../../../components/CustomReloading';
import CustomError from '../../../components/CustomError';
import BodyWrapper from '../../../components/BodyWrapper';
import CustomFlex from '../../../components/CustomFlex';
import { Autocomplete, Box, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography, useMediaQuery } from '@mui/material';
import { Course_Form } from './CourseForm';
import BasicFrom from '../../../components/BasicFrom';
import CustomCard from '../../../components/CustomCard';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import CustomButton, { VARIANTES_BUTTON } from '../../../components/CustomButton';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CustomLink from '../../../components/CustomLink';
import { getBeneficiariesAPI, updateTypeOfAttendanceById } from '../../../api/beneficiario/api';
import BasicTable from '../../../components/BasicTable';
import BasicModal from '../../../components/BasicModal';
import { addBeneficiaryToCoursesAPI, deleteBeneficiarieInCourseAPI, getAllAttendancesByTaskId, getAttendancesByTaskId, getCourseByIdAPI, updateCourseAPI } from '../../../api/beneficiario/course';
import moment from 'moment';


function CourseDetails() {

    const { id } = useParams()
    const user = useAuthUser();
    const {setSuccessMsg, setErrorMsg} = React.useContext(CustomNotistackContext)
    const query = useQuery(["QUERY_COURSE", id],() => getCourseByIdAPI(user().token, id),{
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

    if(query.data.type !== "CURSO"){
        query.remove()
        setErrorMsg("Error al cargar")
        navigate("/ong/cursos")
    }

    const updateActivity = (data) => { 
      const values = {...data, date: moment(data.date).format("YYYY-MM-DD HH:mm:ss")}
      updateCourseAPI(user().token, values,id ).then(() => {
        query.refetch()
        toggleReadOnly(true)
        setSuccessMsg("Datos actualizados correctamente")
    }).catch((err) => {
        console.log(err)
        setErrorMsg("Error al actualizar los datos")
    })
    }
    

  return (
    <BodyWrapper title={
        <CustomFlex justifyContent={"space-between"}>
        {`Detalles del curso ${id}`}
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

export default CourseDetails


const ATTENDANCES_TYPES = ["TOTAL", "PARCIAL", "NO_ASISTIDA"]


export const  BasicSelectAttendance = ({attendance}) =>  {
  const user = useAuthUser();
  const {setSuccessMsg, setErrorMsg} = React.useContext(CustomNotistackContext)
  const [state, setState] = React.useState(attendance === null ?
    -1 : 
    ATTENDANCES_TYPES.findIndex((value) => value === attendance.type));
  
  
    const [isLoading, setIsLoading] = React.useState(false)

  console.log(attendance)
  const handleChange = (event, value) => {
    setIsLoading(true)
    updateTypeOfAttendanceById(user().token, attendance.id, value.props.value)
    .then((data) => {
      setSuccessMsg("Estado guardado con éxito")
      setIsLoading(false)
      setState(ATTENDANCES_TYPES.findIndex((value) => value === data.type))
    }).catch(
      (err)=> {
        setIsLoading(false)
        setErrorMsg("Ha ocurrido un error al guardar")
      }
    );

};

return (
 <>
  {isLoading ?  <CustomReloading />: <FormControl fullWidth>
    <InputLabel id="demo-simple-select-label">Estado</InputLabel>
    <Select
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      value={state}
      label="Estado"
      onChange={handleChange}
    >
      <MenuItem  value={-1}>Seleccionar asistencia</MenuItem>
      <MenuItem  value={0}>Total</MenuItem>
      <MenuItem value={1}>Parcial</MenuItem>
      <MenuItem value={2}>No asistida</MenuItem>
    </Select>
  </FormControl>}
 </>
);
}

   


const parseTaller = (taller) => {
    return Course_Form.map((item) => {
      return { ...item, value: taller[item.name] };
    });
  }


  const BeneficiariosTable = ({taskId}) => {
    const user = useAuthUser();
    const [beneficiaries, setBeneficiaries] = React.useState(null);
    const [attendances, setAttendances] = React.useState(null);

    const query = useQuery(["QUERY_COURSE_ATTENDANCES_BENEFICIARIES", taskId], () => getAttendancesByTaskId(user().token, taskId),{
      retry: 2,
      onSuccess: (data) => {
        setBeneficiaries(data)
      },
      refetchOnWindowFocus: false,
    });

    const queryAttendaces = useQuery(["QUERY_COURSE_ATTENDANCES", taskId], () => getAllAttendancesByTaskId(user().token, taskId),{
      retry: 2,
      onSuccess: (data) => {
        setAttendances(data)
      },
      refetchOnWindowFocus: false,
    });

    const refetch = () => {
      query.refetch()
      queryAttendaces.refetch()
    }

    if(query.isLoading || beneficiaries === null || queryAttendaces.isLoading || attendances === null){
        return <CustomReloading />
    }

    if(query.isError || queryAttendaces.isError){
        return <CustomError onClick={()=> query.refetch()}/>
    }

    const isInCourse = (beneficiaryId) => {
      return beneficiaries.find((beneficiario) => beneficiario.id === beneficiaryId)

    }
        
    const BeneficiaryList = new CustomList(ParseBeneficiarios(beneficiaries, taskId, query.refetch, attendances))
    let objetoTabla = BeneficiaryList.parseToTableBasic(
      ["Nombre","Género", "Email","Estado", "Eliminar"], 
      ["name", "gender","email","state",  "deleteBeneficiarios"]
    )
    return (
      <>
        <BeneficiariosBusqueda taskId={taskId} isInCourse={isInCourse} refetchList={refetch} />
        <BasicTableNoDescription objetoTabla = {objetoTabla}  maxHeight={"50vh"} />
      </>
    )

}

const ParseBeneficiarios = (beneficiarios, taskId, refetch, attendances) =>  {
    return beneficiarios.map((beneficiario) => {
        return {  
            ...beneficiario,
            gender: beneficiario.gender === "MALE" ? "Hombre" : "Mujer" ,
            deleteBeneficiarios: <DeleteBeneficiarios beneficiario={beneficiario} taskId={taskId} refetch={refetch}/>,
            state: <BasicSelectAttendance  attendance={attendances.find((value) => value.personId === beneficiario.id)}  />
        }
    })
}



const BeneficiariosBusqueda = ({taskId,isInCourse, refetchList}) => {
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

        if(isInCourse(value.value.id)){
            setErrorMsg("El beneficiario ya está en el taller")
            return
        }

        setIsLoading(true)
        addBeneficiaryToCoursesAPI(user().token, taskId, value.value.id)
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
      deleteBeneficiarieInCourseAPI(user().token,taskId, beneficiario.id)
      .then((res) => {
        handleCloseFunc.handleClose()
        refetch()
        setSuccessMsg("Beneficiario eliminado correctamente")
      })
      .catch((err) => {
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
        
        
