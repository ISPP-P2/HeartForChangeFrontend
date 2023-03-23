import React from 'react'
import BasicFrom from '../../../components/BasicFrom'
import { FORM_TYPES } from '../../../components/utils/utilsForms'
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import * as Yup from 'yup';
import TimelapseIcon from '@mui/icons-material/Timelapse';

import WorkIcon from '@mui/icons-material/Work';
import BusinessIcon from '@mui/icons-material/Business';
import LogoutIcon from '@mui/icons-material/Logout';
import { useAuthUser } from 'react-auth-kit';
import { PostWorkExperience } from '../../../api/complementaryInformation/workExperience';
import { CustomNotistackContext } from '../../../context/CustomNotistack';

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
        name: "reasonToFinish",
        type: FORM_TYPES.TEXTEAREA,
        label: "Motivo de finalización",
        validation: Yup.string("Deber ser una cadena de caracteres")
                        .min(2, "Tiene haber al menos dos caractere")
                        .required("No puede estar vacido"),
        icon: <LogoutIcon />,
    }
   
]



function WorkExperienceForm({id, handleClose}) {

    const {setSuccessMsg, setErrorMsg} = React.useContext(CustomNotistackContext)
    const auth = useAuthUser()
    const handleSubmitForm = (values) => {
        PostWorkExperience(auth().token, values, id).then(
            (response) => {
                setSuccessMsg("Se ha añadido correctamente")
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

export default WorkExperienceForm