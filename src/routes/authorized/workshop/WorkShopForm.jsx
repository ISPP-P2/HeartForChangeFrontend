
import React, { useContext } from 'react'

import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import { CustomNotistackContext } from '../../../context/CustomNotistack';
import { useAuthUser } from 'react-auth-kit';
import { FORM_TYPES } from '../../../components/utils/utilsForms';
import PlaceIcon from '@mui/icons-material/Place';
import BadgeIcon from '@mui/icons-material/Badge';
import * as Yup from 'yup';
import BasicFrom from '../../../components/BasicFrom';
import { saveWorkshopsAPI } from '../../../api/beneficiario/workshop';
import moment from 'moment';

export const WorkShop_Form = [
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
         validation: Yup.date("Deber ser una fecha"),
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
         name: "incidences",
         type: FORM_TYPES.TEXT,
         label: "Incidencias",
         validation: Yup.string("Deber ser una cadena de caracteres"),
     },{
         name: "numParticipants",
         type: FORM_TYPES.NUMBER,
         label: "Número de participantes",
         validation: Yup.number().required("Este campo es obligatorio"),
     },
     {
         name: "observations",
         type: FORM_TYPES.TEXT,
            label: "Observaciones",
            validation: Yup.string("Deber ser una cadena de caracteres"),
        },
    ]

function WorkShopForm({query,handleClose}) {
    const user = useAuthUser();
    const {setSuccessMsg, setErrorMsg} = useContext(CustomNotistackContext)
    const [disableButton, setDisableButton] = React.useState(false)
    const handleSubmitForm =  (values) => {
        setDisableButton(true)
        let parse = "YYYY-MM-DD HH:mm:ss"
        var responseDate = moment(values.date).format(parse);
        const values2 = {...values, date: responseDate,teacher:"ninguno",ongId:0}
        saveWorkshopsAPI(user().token, values2)
        .then((response) => {
            query.refetch()
            setSuccessMsg("Se ha añadido el taller correctamente")
            handleClose.handleClose()
        })
        .catch((error) => {
            setErrorMsg("Ha ocurrido un error al añadir el taller")
        }).finally(() => {
            setDisableButton(false)
          })
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

export default WorkShopForm