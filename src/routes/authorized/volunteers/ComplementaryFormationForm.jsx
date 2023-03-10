import React from 'react'
import BasicFrom from '../../../components/BasicFrom'
import { FORM_TYPES } from '../../../components/utils/utilsForms'
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import * as Yup from 'yup';
import TimelapseIcon from '@mui/icons-material/Timelapse';
import SchoolIcon from '@mui/icons-material/School';
import PlaceIcon from '@mui/icons-material/Place';
import BusinessIcon from '@mui/icons-material/Business';

const form = [
    {
        name: "name",
        type: FORM_TYPES.TEXT,
        label: "Nombre del curso",
        icon: <SchoolIcon />,

    }, {
        name: "organism",
        type: FORM_TYPES.TEXT,
        label: "Organismo",
        icon: <BusinessIcon />,

    },
    {
        name: "place",
        type: FORM_TYPES.TEXT,
        label: "Lugar",
        validation: Yup.string("Deber ser una cadena de caracteres")
                        .min(2, "Tiene haber al menos dos caractere")
                        .required("No puede estar vacido"),
        icon: <PlaceIcon />,
    },

    {
        name: "year",
        type: FORM_TYPES.TEXTEAREA,
        label: "Año",
        validation: Yup.string("Deber ser una cadena de caracteres")
                        .min(2, "Tiene haber al menos dos caractere")
                        .required("No puede estar vacido"),
        icon: <TimelapseIcon />,
    }
   
]



function ComplementaryFormationForm() {
  return (
        <BasicFrom 
        form={form} 
        columns={2}   
        width={"500px"} 
        buttonText={"añadir"}
        handleSubmitForm={(values) => console.log(values)}
    />
  )
}

export default ComplementaryFormationForm