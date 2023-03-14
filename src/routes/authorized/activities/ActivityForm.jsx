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
import { saveActivityAPI } from '../../../api/actividades/api';
import { useNavigate } from 'react-router-dom';
import { useAuthUser } from 'react-auth-kit';

const form = [
    {
        name: "name",
        type: FORM_TYPES.TEXT,
        label: "Nombre de la actividad",
        icon: <BadgeIcon />,
        validation: Yup.string("Deber ser una cadena de caracteres")
                        .min(2, "Tiene haber al menos dos caractere")
                        .required("No puede estar vacido"),

    }, 
    {
        name: "type",
        type: FORM_TYPES.SELECT,
        label: "Tipo",
        list: [
            {
                label: "Curso",
                value: "CURSO"
            }, {
                label: "Actividad",
                value: "ACTIVIDAD"
            }, {
                label: "Taller",
                value: "TALLER"
            },
        ],
        icon: <CelebrationIcon />,
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
        name: "certificates",
        type: FORM_TYPES.SELECT,
        label: "Certificados",
        list: [
            {
                label: "No",
                value: false
            }, {
                label: "Sí",
                value: true
            },
        ],
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
        name: "teacher",
        type: FORM_TYPES.TEXT,
        label: "Profesor",
        validation: Yup.string("Deber ser una cadena de caracteres"),
    },{
        name: "incidences",
        type: FORM_TYPES.TEXT,
        label: "Incidencias",
        validation: Yup.string("Deber ser una cadena de caracteres"),
    },
]



function ActivityForm() {

    const user = useAuthUser();
    const saveActivity = (values) => {
        let values2 = {...values, date:"2017-01-01 14:55:08"}
        console.log(values2)
        saveActivityAPI(user().token, values2)
       // location.reload()
  }

  return (
        <BasicFrom 
        form={form}
        buttonText={"añadir"}
        handleSubmitForm={saveActivity}
    />
  )
}

export default ActivityForm