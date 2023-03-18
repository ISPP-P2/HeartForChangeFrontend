import React from 'react'
import BasicFrom from '../../../components/BasicFrom'
import { FORM_TYPES } from '../../../components/utils/utilsForms'
import * as Yup from 'yup';
import SchoolIcon from '@mui/icons-material/School';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import AssessmentIcon from '@mui/icons-material/Assessment';



const form = [
    {
        name: "speciality",
        type: FORM_TYPES.TEXT,
        label: "Especialidad",
        icon: <SchoolIcon />,

    }, {
        name: "year",
        type: FORM_TYPES.NUMBER,
        label: "Año de finalización ",
        icon: <EventAvailableIcon />,

        validation: Yup.number("Deber ser un numero")
                        .min(1900, "Deber ser un año válido")
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
        name: "satisfaction",
        type: FORM_TYPES.SELECT,
        label: "Satisfacción",
        list: [
            { label: "1", value: 1 },
            { label: "2", value: 2 },
            { label: "3", value: 3 },
            { label: "4", value: 4 },
            { label: "5", value: 5 },
          ],
                       
        
    }
   
]



function AcademicExperienceForm(id) {

    const saveAcademicExperience = (values) => {
        console.log(values)
        console.log(id)
        saveAcademicExpAPI(user().token, values,  id)
      
       
    }

  return (
        <BasicFrom 
        form={form} 
        buttonText={"añadir"}
        handleSubmitForm={saveAcademicExperience}
    />
  )
}

export default AcademicExperienceForm