import React from 'react'
import BasicFrom from '../../../components/BasicFrom'
import { FORM_TYPES } from '../../../components/utils/utilsForms'
import * as Yup from 'yup';
import SchoolIcon from '@mui/icons-material/School';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import AssessmentIcon from '@mui/icons-material/Assessment';
import FilterFramesIcon from '@mui/icons-material/FilterFrames';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import SubjectIcon from '@mui/icons-material/Subject';
import { Co2Sharp } from '@mui/icons-material';
import { axiosWithToken } from '../../../api/auth/axios';
import { useAuthUser } from 'react-auth-kit';
import { getSubventions, saveSubventionAPI } from '../../../api/subvenciones/api';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
const form = [
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
        validation: Yup.boolean()

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
        validation: Yup.boolean()

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
        validation: Yup.string()


    },
    {
        name: "justification",
        type: FORM_TYPES.TEXTEAREA,
        label: "Justificación",
        validation: Yup.string("Deber ser una cadena de caracteres").nonNullable("No puede estar vacio"),
                      
        icon: <SubjectIcon />,
    },
    {
        name: "amount",
        type: FORM_TYPES.TEXT,
        label: "Cantidad",
        validation: Yup.number("Deber ser un numero"),
                      
        icon: <SubjectIcon />,
    }
   
]


function SubventionForm({handleClose}) {
    const user = useAuthUser();

    const saveSubvention = (values) => {
        console.log(values)
        if(!(values.privateGrant === "" || values.gubernamental === "" || values.state === "" || values.justification === "" || values.amount === "")){
            saveSubventionAPI(user().token, values).then(
                (res) => {
                    location.reload()
                }
            )
      
        }
        
    }

    return (
        <BasicFrom 
            form={form} 
            buttonText={"añadir"}
            handleSubmitForm={saveSubvention}
        />
    )
}

export default SubventionForm