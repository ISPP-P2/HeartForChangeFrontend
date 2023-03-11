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
        label: "Nombre de la actividad",
        icon: <SchoolIcon />,
        validation: Yup.string("Deber ser una cadena de caracteres")
                        .min(2, "Tiene haber al menos dos caractere")
                        .required("No puede estar vacido"),

    }, {
        name: "description",
        type: FORM_TYPES.TEXTEAREA,
        label: "Descripción",
        icon: <BusinessIcon />,
        validation: Yup.string("Deber ser una cadena de caracteres")
                        .min(2, "Tiene haber al menos dos caractere")
                        .required("No puede estar vacido"),

    },
    {
        name: "type",
        type: FORM_TYPES.TEXT,
        label: "Tipo",
        validation: Yup.string("Deber ser una cadena de caracteres")
                        .min(2, "Tiene haber al menos dos caractere")
                        .required("No puede estar vacido"),
        icon: <PlaceIcon />,
    },

    {
        name: "location",
        type: FORM_TYPES.TEXT,
        label: "Lugar",
        validation: Yup.string("Deber ser una cadena de caracteres")
                        .min(2, "Tiene haber al menos dos caractere")
                        .required("No puede estar vacido"),
        icon: <TimelapseIcon />,
    },
    {
        name: "capacity",
        type: FORM_TYPES.TEXT,
        label: "Capacidad",
        icon: <TimelapseIcon />,
    },
    {
        name: "date",
        type: FORM_TYPES.DATE,
        label: "Fecha",
        validation: Yup.date("Deber ser una fecha"),
        icon: <TimelapseIcon />,
    },
    {
        name: "coordinator",
        type: FORM_TYPES.TEXT,
        label: "Coordinador",
        validation: Yup.string("Deber ser una cadena de caracteres")
                        .min(2, "Tiene haber al menos dos caractere"),
        icon: <TimelapseIcon />,
    },
    {
        name: "group",
        type: FORM_TYPES.TEXT,
        label: "Grupos",
        validation: Yup.string("Deber ser una cadena de caracteres"),
        icon: <TimelapseIcon />,
    },

   
]



function ActivityForm() {
  return (
        <BasicFrom 
        form={form}
        width="25em"
        buttonText={"añadir"}
        handleSubmitForm={(values) => console.log(values)}
    />
  )
}

export default ActivityForm