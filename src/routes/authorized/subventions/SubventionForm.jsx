import React, { useContext } from 'react'
import BasicFrom from '../../../components/BasicFrom'
import { FORM_TYPES } from '../../../components/utils/utilsForms'
import * as Yup from 'yup';
import FilterFramesIcon from '@mui/icons-material/FilterFrames';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import SubjectIcon from '@mui/icons-material/Subject';
import { useAuthUser } from 'react-auth-kit';
import { saveSubventionAPI } from '../../../api/subvenciones/api';
import { CustomNotistackContext } from '../../../context/CustomNotistack';
export const form = [
    {
        name: "privateGrant",
        type: FORM_TYPES.SELECT,
        label: "PUBLICA/PRIVADA",
        icon: <FilterFramesIcon />,
        list: [
            {
                value: false,
                label: "Publica"
            }, {
                value: true,
                label: "Privada"
            }
        ],
        validation: Yup.boolean().required("Este campo es requerido"),

    },
    {
        name: "gubernamental",
        type: FORM_TYPES.SELECT,
        label: "Gubernametal",
        icon: <FilterFramesIcon />,
        list: [
            {
                value: true,
                label: "Si"
            }, {
                value: false,
                label: "No"
            }
        ],
        validation: Yup.boolean().required("Este campo es requerido"),

    }, {
        name: "state",
        type: FORM_TYPES.SELECT,
        label: "Estado",
        icon: <MonitorHeartIcon />,
        list: [
            {
                label: "Pendiente",
                value: "REQUESTED"
            }, {
                label: "Aceptada",
                value: "ACCEPTED"
            }, {
                label: "Denegada",
                value: "DENIED"
            }, {
                value: "Reformulada",
                value: "REFORMULATION"
            },
        ],
        validation: Yup.string().required("Este campo es requerido"),


    },
    {
        name: "justification",
        type: FORM_TYPES.TEXTEAREA,
        label: "Justificación",
        validation: Yup.string("Deber ser una cadena de caracteres").max(1000, "La dirección no puede tener más de 1000 caracteres").required("Este campo es requerido"),
                      
        icon: <SubjectIcon />,
    },
    {
        name: "amount",
        type: FORM_TYPES.NUMBER,
        label: "Cantidad(€)",
        validation: Yup.number().moreThan(0).positive("La cantidad debe ser mayor que cero").required("Este campo es requerido"),

                      
        icon: <SubjectIcon />,
    }
   
]


function SubventionForm({handleClose, query}) {
    const user = useAuthUser();
    const {setSuccessMsg,setErrorMsg} = useContext(CustomNotistackContext)
    const [disableButton, setDisableButton] = React.useState(false)


    const saveSubvention = (values) => {
        setDisableButton(true)
        saveSubventionAPI(user().token, values).then(
            (res) => {
                handleClose.handleClose()
                query.refetch()
                setSuccessMsg("Subvención añadida correctamente")
            }
        ).catch(
            (err) => {
                setErrorMsg("Ha ocurrido un error")
            }
        ).finally(() => {
            setDisableButton(false)
          })
    }

    return (
        <BasicFrom isLoading={disableButton} form={form} buttonText={"añadir"} handleSubmitForm={saveSubvention} />
    )
}

export default SubventionForm