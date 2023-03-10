import React from 'react'
import BasicFrom from '../../../components/BasicFrom'
import { FORM_TYPES } from '../../../components/utils/utilsForms'
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import * as Yup from 'yup';


const form = [
    {
        name: "nombre1",
        type: FORM_TYPES.TEXT,
        label: "Nombre",
        icon: <AssignmentIndIcon />,
        value: 'aaas'

    }, {
        name: "nombre2",
        type: FORM_TYPES.SELECT,
        label: "Nombre",
        icon: <AssignmentIndIcon />,
        list: [{
                value: "a",
                label: "SEXO"
            }],
        value: 'a'
    }, {
        name: "nombre3",
        type: FORM_TYPES.TEXTEAREA,
        label: "Nombre",
        validation: Yup.string("Deber ser una cadena de caracteres")
                        .min(2, "Tiene haber al menos dos caractere")
                        .required("No puede estar vacido"),
        value: 'aaas'
    }
]



function FormBeneficiaries() {

    

  return (
    <BasicFrom 
        form={form} 
        columns={2}   
        width={"500px"} 
        readOnly={true}
        handleSubmitForm={(values) => console.log(values)}
    />
  )
}

export default FormBeneficiaries