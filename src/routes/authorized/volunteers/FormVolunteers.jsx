import React from 'react'
import BasicFrom from '../../../components/BasicFrom'
import BasicModal from '../../../components/BasicModal'
import BodyWrapper from '../../../components/BodyWrapper'
import { saveVolunteerAPI } from '../../../api/voluntarios/api';
import { FORM_TYPES } from '../../../components/utils/utilsForms';
import { useNavigate } from 'react-router-dom';
import { useAuthUser } from 'react-auth-kit';
import * as Yup from 'yup';
import { CustomNotistackContext } from '../../../context/CustomNotistack';
import CustomModal from '../../../components/CustomModal';
import { Box, Typography } from '@mui/material';
import random from 'random-string-generator';
import CustomButton from '../../../components/CustomButton';
const form = [
  {
    name: "email",
    type: FORM_TYPES.TEXT,
    label: "Correo electrónico",
    validation: Yup.string()
    .email("Debe ser un email válido")
    .required("Este campo es obligatorio"),
  },
  {
    name: "name",
    type: FORM_TYPES.TEXT,
    label: "Nombre",
    validation: Yup.string("Deber ser una cadena de caracteres")
    .max(20, "No puede tener más de 20 caracteres")
    .required("Este campo es obligatorio"),
  },
  {
    name: "firstSurname",
    type: FORM_TYPES.TEXT,
    label: "Primer apellido",
    validation: Yup.string("Deber ser una cadena de caracteres")
    .max(20, "No puede tener más de 20 caracteres")
    .required("Este campo es obligatorio"),
  },
  {
    name: "secondSurname",
    type: FORM_TYPES.TEXT,
    label: "Segundo apellido",
    validation: Yup.string("Deber ser una cadena de caracteres")
    .max(20, "No puede tener más de 20 caracteres")
    .required("Este campo es obligatorio"),
  },
  {
    name: "documentType",
    type: FORM_TYPES.SELECT,
    label: "Documentación",
    list: [
      { label: "DNI", value: "DNI" },
      { label: "NIE", value: "NIE" },
      { label: "Pasaporte", value: "PASSPORT" },
    ],
    validation: Yup.string().required("Este campo es obligatorio"),
  },
  {
    name: "documentNumber",
    type: FORM_TYPES.TEXT,
    label: "Número de Documentación",
    validation: Yup.string()
    .required("Este campo es obligatorio")
      .min(9, "El número de documentación debe tener 9 caracteres")
      .max(9, "El número de documentacióndebe tener 9 caracteres"),
  },
  {
    name: "gender",
    type: FORM_TYPES.SELECT,
    label: "Género",
    list: [
      { label: "Hombre", value: "MALE" },
      { label: "Mujer", value: "FEMALE" },
      
    ],
    validation: Yup.string().required("Este campo es obligatorio"),
  },
  {
    name: "birthday",
    type: FORM_TYPES.ONLYDATE,
    label: "Fecha de nacimiento",
    validation: Yup.date()
    .max(new Date(), "La fecha de nacimiento no puede ser en el futuro")
    .required("Este campo es obligatorio"),
  },
  {
    name: "civilStatus",
    type: FORM_TYPES.SELECT,
    label: "Estado civil",
    list: [
      { label: "Soltero", value: "SINGLE" },
      { label: "Casado", value: "MARRIED" },
      { label: "Viudo", value: "WIDOWED" },
      { label: "Divorciado", value: "DIVORCED" },
    ],
    validation: Yup.string().required("Este campo es obligatorio"),
  },
  {
    name: "numberOfChildren",
    type: FORM_TYPES.NUMBER,
    label: "Número de hijos",
    validation: Yup.number()
    .required("Este campo es obligatorio (0 en caso de no tener)")
    .min(0, "El número de hijos debe ser mayor o igual a 0")
  },

  {
    name: "entryDate",
    type: FORM_TYPES.ONLYDATE,
    label: "Fecha de Inicio",
    validation: Yup.date()
    .required("Este campo es obligatorio"),
  },
  {
    name: "leavingDate",
    type: FORM_TYPES.ONLYDATE,
    label: "Fecha de Finalización",
    validation: Yup.date()
   
  },
  {
    name: "address",
    type: FORM_TYPES.TEXT,
    label: "Dirección",
    validation: Yup.string()
    .required("Este campo es obligatorio")
    .min(5, "La dirección debe tener al menos 5 caracteres")
    .max(50, "La dirección no puede tener más de 50 caracteres"),

  },
  {
    name: "postalCode",
    type: FORM_TYPES.NUMBER,
    label: "Código Postal",
    validation: Yup.number()
    .required("Este campo es obligatorio")
    .test(
      "len",
      "El código postal debe tener 5 cifras",
      (val) => val.toString().length === 5
    )
  },
  {
    name: "registrationAddres",
    type: FORM_TYPES.TEXT,
    label: "Dirección de registro",
    validation: Yup.string("Deber ser una cadena de caracteres")
    .max(50, "debe tener menos de 50 caracteres")
  },
  {
    name: "town",
    type: FORM_TYPES.TEXT,
    label: "Ciudad",
    validation: Yup.string("Deber ser una cadena de caracteres")
    .max(20, "debe tener menos de 20 caracteres")
    .required("Este campo es obligatorio"),
  },
  {
    name: "otherSkills",
    type: FORM_TYPES.TEXTEAREA,
    label: "Otras habilidades",
    validation: Yup.string("Deber ser una cadena de caracteres")
    .max(350, "debe tener menos de 350 caracteres")
    .required("Este campo es obligatorio"),
  },
  {
    name: "driveLicenses",
    type: FORM_TYPES.TEXT,
    label: "Carnet de conducir",
    validation: Yup.string()
    .max(100, "No puede tener más de 100 caracteres"),
  },
  {
    name: "hourOfAvailability",
    type: FORM_TYPES.TEXT,
    label: "Horario de disponibilidad",
    validation: Yup.string("Deber ser una cadena de caracteres")
    .max(50, "debe tener menos de 50 caracteres")
    .required("Este campo es obligatorio"),
  },
  {
    name: "sexCrimes",
    type: FORM_TYPES.SELECT,
    label: "Crímenes sexuales",
    list: [
      { label: "Sí", value: true },
      { label: "No", value: false },
    ],
    validation: Yup.boolean().required("Este campo es obligatorio"),
  },
  {
    name: "telephone",
    type: FORM_TYPES.NUMBER,
    label: "Teléfono",
    validation: Yup.string("Deber ser una cadena de caracteres")
    .max(15, "debe tener menos de 15 caracteres")
    .required("Este campo es obligatorio"), 
  }
];


function FormVolunteers() {
  const user = useAuthUser();
  const navigate = useNavigate();
  const {setSuccessMsg, setErrorMsg} = React.useContext(CustomNotistackContext)

  const [open, setOpen] = React.useState(false);
  const [password, setPassword] = React.useState('');
  const [usuario, setUsuario] = React.useState('');

  const [disableButton, setDisableButton] = React.useState(false);


  const handleOpen = () => setOpen(true);
  const handleClose = () => {};

  const saveVolunteer = (values) => {
      setDisableButton(true)
      const passwordAux = random(8, 'upper')
      setPassword(passwordAux)
      const values2 = {
            ...values, 
            "password": passwordAux.toString()
      }
      saveVolunteerAPI(user().token, values2).then(
          (response) => {
              setUsuario(response.username)
              handleOpen()
              setSuccessMsg("Voluntario añadido correctamente")
          }
      ).catch(
          (error) => {
              setErrorMsg("Error al añadir el voluntario")
          }
      ).finally(() => {
        setDisableButton(false)
      })
  }





  return (
    <BodyWrapper>
        <BasicFrom 
            isLoading={disableButton}
            buttonText={"Añadir"}
            form={form}
            handleSubmitForm={saveVolunteer}
        />
        <CustomModal
            title={"Voluntario añadido"}
            body={
            <Box sx={{display: 'flex', gap:"1rem", flexDirection: "column"}}>
              <Box sx={{display: 'flex', justifyContent:"space-around"}}>
                <Typography sx={{padding: "0.4rem", fontSize: "1.1rem"}}>
                  Usuario:
                </Typography>
                <Typography  sx={{padding: "0.5rem", color: "white",fontWeight: "600", backgroundColor:"#999", borderRadius: "4px"}}>
                  {usuario}
                </Typography>
              </Box>
              <Box sx={{display: 'flex', justifyContent:"space-around"}}>
                <Typography sx={{padding: "0.4rem", fontSize: "1.1rem"}}>
                  Contraseña:
                </Typography>
                <Typography sx={{padding: "0.5rem", color: "white",fontWeight: "600", backgroundColor:"#999", borderRadius: "4px"}}>
                  {password}
                </Typography>
              </Box>
              <Box sx={{marginTop: "1rem"}}>
              <CustomButton text={"Aceptar"} onClick={()=> navigate('/ong/voluntarios')} />
              </Box>
            </Box>
           }
            open={open}
            handleClose={handleClose}
        />
    </BodyWrapper>
  )
}

export default FormVolunteers