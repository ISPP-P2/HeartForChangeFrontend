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

    }, {
        name: "endingYear",
        type: FORM_TYPES.NUMBER,
        label: "Año de finalización ",
        icon: <EventAvailableIcon />,

        validation: Yup.number("Deber ser un numero")
                        .min(2023, "Deber ser un año válido")
                        .max(9000, "Deber ser un año válido")
    },
    {
        name: "nivel",
        type: FORM_TYPES.TEXT,
        label: "Nivel",
        validation: Yup.string("Deber ser una cadena de caracteres")
                        .min(2, "Tiene haber al menos dos caractere")
                        .required("No puede estar vacio"),
        icon: <AssessmentIcon />,
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
                        .min(2, "Tiene haber al menos dos caractere")
                        .required("No puede estar vacio"),
                       
        
    }
   
]



function AcademicExperienceForm({id, handleClose}) {
    const {setSuccessMsg, setErrorMsg} = React.useContext(CustomNotistackContext)
    const auth = useAuthUser()

    const handleSubmitForm = (values) => {
        PostAcademixExperience(auth().token, values, id).then(
            (response) => {
                setSuccessMsg("Se ha añadido la experiencia académica")
                handleClose.handleClose()
            }
        ).catch(
            (error) => {
                setErrorMsg("Ha ocurrido un error")
            }
        );
    }

  return (
        <BasicFrom 
        form={form} 
        buttonText={"añadir"}
        handleSubmitForm={handleSubmitForm}
    />
  )
}

export default AcademicExperienceForm