import React from 'react'
import BasicFrom from '../../../components/BasicFrom'
import { FORM_TYPES } from '../../../components/utils/utilsForms'
import * as Yup from 'yup';
import PlaceIcon from '@mui/icons-material/Place';
import BadgeIcon from '@mui/icons-material/Badge';
import CelebrationIcon from '@mui/icons-material/Celebration';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import { saveActivityAPI } from '../../../api/actividades/api';
import { useAuthUser } from 'react-auth-kit';
import moment from 'moment/moment';


const form = [
    {
        name: "name",
        type: FORM_TYPES.TEXT,
        label: "Nombre de la actividad",
        icon: <BadgeIcon />,
        validation: Yup.string("Deber ser una cadena de caracteres")
                        .min(2, "Tiene haber al menos dos caracteres")
                        .max(20, "No puede tener más de 20 caracteres")
                        .required("Este campo es obligatorio"),

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
        validation:Yup.string("Deber ser una cadena de caracteres")
        .required("Este campo es obligatorio"),
        icon: <CelebrationIcon />,
    },

    {
        name: "place",
        type: FORM_TYPES.TEXT,
        label: "Lugar",
        validation: Yup.string("Deber ser una cadena de caracteres")
                        .required("Este campo es obligatorio"),
        icon: <PlaceIcon />,
    },
    {
        name: "certificate",
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
        validation: Yup.boolean().required("Este campo es obligatorio"),
    },
    {
        name: "date",
        type: FORM_TYPES.DATE,
        label: "Fecha",
        validation: Yup.date()
        .required("Este campo es obligatorio"),
    },
    {
        name: "coordinator",
        type: FORM_TYPES.TEXT,
        label: "Coordinador",
        validation: Yup.string("Deber ser una cadena de caracteres")
        .required("Este campo es obligatorio"),
        icon: <EmojiPeopleIcon />,
    },
    {
        name: "teacher",
        type: FORM_TYPES.TEXT,
        label: "Profesor",
        validation: Yup.string("Deber ser una cadena de caracteres")
        .required("Este campo es obligatorio"),

    },{
        name: "incidences",
        type: FORM_TYPES.TEXT,
        label: "Incidencias",
        validation: Yup.string("Deber ser una cadena de caracteres"),
    },{
        name: "numParticipants",
        type: FORM_TYPES.NUMBER,
        label: "Numero de participantes",
        validation: Yup.number("Deber ser una cadena de caracteres").min(0, "El número de participantes debe ser mayor o igual a 0"),
        
    },
]



function ActivityForm({query,handleClose}) {
    const user = useAuthUser();
    const saveActivity = (values) => {
        let parse = "YYYY-MM-DD HH:mm:ss"
        var responseDate = moment(values.date).format(parse);
        const values2 = {...values, date: responseDate}
        saveActivityAPI(user().token, values2).then((response) => {
            handleClose.handleClose();
            query.refetch()
        }).catch(
            (err) => {
                setErrorMsg("Ha ocurrido un error")
            }
        )
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