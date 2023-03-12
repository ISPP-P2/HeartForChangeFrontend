import React from 'react'
import BasicFrom from '../../../components/BasicFrom'
import { FORM_TYPES } from '../../../components/utils/utilsForms'
import * as Yup from 'yup';
import TimelapseIcon from '@mui/icons-material/Timelapse';
import PlaceIcon from '@mui/icons-material/Place';
import BadgeIcon from '@mui/icons-material/Badge';
import DescriptionIcon from '@mui/icons-material/Description';
import CelebrationIcon from '@mui/icons-material/Celebration';
import GroupIcon from '@mui/icons-material/Group';
import EventIcon from '@mui/icons-material/Event';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';

const form = [
    {
        name: "name",
        type: FORM_TYPES.TEXT,
        label: "Nombre de la actividad",
        icon: <BadgeIcon />,
        validation: Yup.string("Deber ser una cadena de caracteres")
                        .min(2, "Tiene haber al menos dos caractere")
                        .required("No puede estar vacido"),

    }, {
        name: "description",
        type: FORM_TYPES.TEXTEAREA,
        label: "Descripción",
        icon: <DescriptionIcon />,
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
        icon: <CelebrationIcon />,
    },

    {
        name: "location",
        type: FORM_TYPES.TEXT,
        label: "Lugar",
        validation: Yup.string("Deber ser una cadena de caracteres")
                        .min(2, "Tiene haber al menos dos caractere")
                        .required("No puede estar vacido"),
        icon: <PlaceIcon />,
    },
    {
        name: "capacity",
        type: FORM_TYPES.TEXT,
        label: "Capacidad",
        icon: <GroupIcon />,
    },
    {
        name: "date",
        type: FORM_TYPES.DATE,
        label: "Fecha",
        validation: Yup.date("Deber ser una fecha"),
    },
    {
        name: "coordinator",
        type: FORM_TYPES.TEXT,
        label: "Coordinador",
        validation: Yup.string("Deber ser una cadena de caracteres")
                        .min(2, "Tiene haber al menos dos caractere"),
        icon: <EmojiPeopleIcon />,
    },
    {
        name: "group",
        type: FORM_TYPES.TEXT,
        label: "Grupos",
        validation: Yup.string("Deber ser una cadena de caracteres"),
        icon: <GroupIcon />,
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