import React from 'react'
import BasicFrom from '../../../components/BasicFrom'
import { FORM_TYPES } from '../../../components/utils/utilsForms'
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import * as Yup from 'yup';
import TimelapseIcon from '@mui/icons-material/Timelapse';

import WorkIcon from '@mui/icons-material/Work';
import BusinessIcon from '@mui/icons-material/Business';
import LogoutIcon from '@mui/icons-material/Logout';

const form = [
    {
        name: "job",
        type: FORM_TYPES.TEXT,
        label: "Puesto",
        icon: <WorkIcon />,

    }, {
        name: "time",
        type: FORM_TYPES.TEXT,
        label: "Duración",
        icon: <TimelapseIcon />,

    },
    {
        name: "place",
        type: FORM_TYPES.TEXT,
        label: "Lugar",
        validation: Yup.string("Deber ser una cadena de caracteres")
                        .min(2, "Tiene haber al menos dos caractere")
                        .required("No puede estar vacido"),
        icon: <BusinessIcon />,
    },

    {
        name: "endCause",
        type: FORM_TYPES.TEXTEAREA,
        label: "Motivo de finalización",
        validation: Yup.string("Deber ser una cadena de caracteres")
                        .min(2, "Tiene haber al menos dos caractere")
                        .required("No puede estar vacido"),
        icon: <LogoutIcon />,
    }
   
]



function WorkExperienceForm() {

    

  return (
    <BasicFrom 
        form={form} 
        buttonText={"añadir"}
        handleSubmitForm={(values) => console.log(values)}
    />
  )
}

export default WorkExperienceForm