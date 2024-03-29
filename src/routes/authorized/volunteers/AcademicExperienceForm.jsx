import React from 'react'
import BasicFrom from '../../../components/BasicFrom'
import { FORM_TYPES } from '../../../components/utils/utilsForms'
import * as Yup from 'yup';
import SchoolIcon from '@mui/icons-material/School';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import AssessmentIcon from '@mui/icons-material/Assessment';
import { PostAcademixExperience } from '../../../api/complementaryInformation/AcademixExperience';
import { useAuthUser } from 'react-auth-kit';
import { CustomNotistackContext } from '../../../context/CustomNotistack';


const form = [
    {
        name: "speciality",
        type: FORM_TYPES.TEXT,
        label: "Especialidad",
        icon: <SchoolIcon />,
        validation: Yup.string("Deber ser una cadena de caracteres")
                       .max(50, "Tiene que haber menos de 50 caracteres")
                        .required("No puede estar vacio"),
    }, {
        name: "endingYear",
        type: FORM_TYPES.NUMBER,
        label: "Año de finalización ",
        icon: <EventAvailableIcon />,

        validation: Yup.number("Deber ser un numero")


        
                     
    },
    {
        name: "satisfactionDegree",
        type: FORM_TYPES.NUMBER,
        label: "Satisfacción",
        validation: Yup.number("Deber ser un numero")
                        .min(1, "Deber ser mayor o igual que 1")
                        .max(5, "Deber ser menor o igual que 5")
        
    },

    {
        name: "educationalLevel",
        type: FORM_TYPES.TEXTEAREA,
        label: "Nivel Educación",
        validation: Yup.string("Deber ser una cadena de caracteres")
                        .min(2, "Tiene haber al menos dos caracteres")
                        .required("No puede estar vacio"),
                       
        
    }
   
]



function AcademicExperienceForm({id, handleClose, refetch}) {
    const {setSuccessMsg, setErrorMsg} = React.useContext(CustomNotistackContext)
    const auth = useAuthUser()
    const [disableButton, setDisableButton] = React.useState(false)
    const handleSubmitForm = (values) => {
        setDisableButton(true)
        PostAcademixExperience(auth().token, values, id).then(
            (response) => {
                setSuccessMsg("Se ha añadido la experiencia académica")
                refetch()
                handleClose.handleClose()
            }
        ).catch(
            (error) => {
                setErrorMsg("Ha ocurrido un error")
            }
        ).finally(() => {
            setDisableButton(false)
        });
    }

  return (
        <BasicFrom 
        isLoading={disableButton}
        form={form} 
        buttonText={"añadir"}
        handleSubmitForm={handleSubmitForm}
    />
  )
}

export default AcademicExperienceForm