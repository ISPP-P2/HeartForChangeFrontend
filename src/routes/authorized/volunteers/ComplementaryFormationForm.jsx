import React from 'react'
import BasicFrom from '../../../components/BasicFrom'
import { FORM_TYPES } from '../../../components/utils/utilsForms'
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import * as Yup from 'yup';
import TimelapseIcon from '@mui/icons-material/Timelapse';
import SchoolIcon from '@mui/icons-material/School';
import PlaceIcon from '@mui/icons-material/Place';
import BusinessIcon from '@mui/icons-material/Business';
import { PostAcademixExperience } from '../../../api/complementaryInformation/AcademixExperience';
import { useAuthUser } from 'react-auth-kit';
import { PostComplementaryInformation } from '../../../api/complementaryInformation/complementaryFormation';
import { CustomNotistackContext } from '../../../context/CustomNotistack';

const form = [
    {
        name: "name",
        type: FORM_TYPES.TEXT,
        label: "Nombre del curso",
        icon: <SchoolIcon />,
        validation: Yup.string("Deber ser una cadena de caracteres")
        .min(0, "Tiene haber al menos dos caracteres")
        .max(50, "Tiene que haber menos de 50 caracteres")
        .required("No puede estar vacío"),
    }, {
        name: "organization",
        type: FORM_TYPES.TEXT,
        label: "Organismo",
        icon: <BusinessIcon />,
        validation: Yup.string("Deber ser una cadena de caracteres")
                            .max(50, "Tiene que haber menos de 50 caracteres")
                        .required("No puede estar vacío"),
    },
    {
        name: "place",
        type: FORM_TYPES.TEXT,
        label: "Lugar",
        validation: Yup.string("Deber ser una cadena de caracteres")
                        .required("No puede estar vacío"),
        icon: <PlaceIcon />,
    },

    {
        name: "date",
        type: "date",
        label: "Fecha",
        validation: Yup.date("Deber ser una fecha")
                        .required("No puede estar vacío"),
        icon: <TimelapseIcon />,

        
    }
   
]



function ComplementaryFormationForm({id, handleClose, refetch}) {
    const {setSuccessMsg, setErrorMsg} = React.useContext(CustomNotistackContext)
    const auth = useAuthUser()
    const [disableButton, setDisableButton] = React.useState(false)
    const handleSubmitForm = (values) => {
        setDisableButton(true)
        PostComplementaryInformation(auth().token, values, id).then(
            (response) => {
                setSuccessMsg("Se ha añadido correctamente")
                refetch()
                handleClose.handleClose()
            }
        ).catch(
            (error) => {
                setErrorMsg("Ha ocurrido un error")
            }
        ).finally(() => {
            setDisableButton(false)
        });
    }


  return (
        <BasicFrom 
        form={form} 
        isLoading={disableButton}
        buttonText={"añadir"}
        handleSubmitForm={handleSubmitForm}
    />
  )
}

export default ComplementaryFormationForm