import React from 'react'
import BasicFrom from '../../../components/BasicFrom'
import { FORM_TYPES } from '../../../components/utils/utilsForms'
import * as Yup from 'yup';
import SchoolIcon from '@mui/icons-material/School';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import AssessmentIcon from '@mui/icons-material/Assessment';
import FilterFramesIcon from '@mui/icons-material/FilterFrames';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import SubjectIcon from '@mui/icons-material/Subject';
const form = [
    {
        name: "type",
        type: FORM_TYPES.TEXT,
        label: "Tipo",
        icon: <FilterFramesIcon />,

    }, {
        name: "state",
        type: FORM_TYPES.TEXT,
        label: "Estado",
        icon: <MonitorHeartIcon />,


    },
    {
        name: "justification",
        type: FORM_TYPES.TEXT,
        label: "Justificación",
        validation: Yup.string("Deber ser una cadena de caracteres")
                        .min(2, "Tiene haber al menos dos caractere")
                        .required("No puede estar vacio"),
                      
        icon: <SubjectIcon />,
    },

    {
        name: "description",
        type: FORM_TYPES.TEXTEAREA,
        label: "Descripción",
        validation: Yup.string("Deber ser una cadena de caracteres")
                        .min(2, "Tiene haber al menos dos caractere")
                        .required("No puede estar vacio"),
                       
        
    }
   
]



function AcademicExperienceForm() {

    

  return (
        <BasicFrom 
        form={form} 
        buttonText={"añadir"}
        handleSubmitForm={(values) => console.log(values)}
    />
  )
}

export default AcademicExperienceForm