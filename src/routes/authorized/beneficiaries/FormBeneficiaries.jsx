import React from 'react'
import BasicFrom from '../../../components/BasicFrom'
import BodyWrapper from '../../../components/BodyWrapper';
import { saveBeneficiariesAPI } from '../../../api/beneficiario/api';
import { FORM_TYPES } from '../../../components/utils/utilsForms';
import { useNavigate } from 'react-router-dom';
import { useAuthUser } from 'react-auth-kit';
import * as Yup from 'yup';
import { CustomNotistackContext } from '../../../context/CustomNotistack';

const form = [
  {
    name: "name",
    type: FORM_TYPES.TEXT,
    label: "Nombre",
    validation: Yup.string("Deber ser una cadena de caracteres")
    .max(20, "No puede tener más de 20 caracteres")
    .required("Este campo es obligatorio"),
  },
  {
    name: "email",
    type: FORM_TYPES.TEXT,
    label: "Email",
    validation: Yup.string()
   .email("Debe ser un email válido")
   .required("Este campo es obligatorio"),
  },
  {
    name: "address",
    type: FORM_TYPES.TEXT,
    label: "Dirección",
    validation: Yup.string()
    .required("Este campo es obligatorio")
    .min(5, "La dirección debe tener al menos 5 caracteres")
    .max(50, "La dirección no puede tener más de 100 caracteres"),
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
    name: "driveLicenses",
    type: FORM_TYPES.TEXT,
    label: "Carnet de conducir",
    validation: Yup.string()
    .required("Este campo es obligatorio")
    .max(100, "No puede tener más de 100 caracteres"),
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
    name: "entryDate",
    type: FORM_TYPES.ONLYDATE,
    label: "Fecha de Entrada",
    validation: Yup.date()
      .required("Este campo es obligatorio"),
  },
  {
    name: "leavingDate",
    type: FORM_TYPES.ONLYDATE,
    label: "Fecha de salida",
    validation: Yup.date()
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
    name: "otherSkills",
    type: FORM_TYPES.TEXTEAREA,
    label: "Otras habilidades",
    validation: Yup.string("Deber ser una cadena de caracteres")
    .max(350, "debe tener menos de 350 caracteres")
    .required("Este campo es obligatorio"),
  },
  {
    name: "postalCode",
    type: FORM_TYPES.NUMBER,
    label: "Código Postal",
    validation: Yup.string()
    .matches(/^(0[1-9]|[1-4]\d|5[0-2])\d{3}$/, 'El código postal no es válido')
    .required('El código postal es obligatorio'),
  },
  {
    name: "registrationAddress",
    type: FORM_TYPES.TEXT,
    label: "Dirección de registro",
    validation: Yup.string("Deber ser una cadena de caracteres")
    .max(50, "debe tener menos de 50 caracteres")
   
  },
  {
    name: "telephone",
    type: FORM_TYPES.NUMBER,
    label: "Teléfono",
    validation: Yup.string("Deber ser una cadena de caracteres")
    .max(15, "debe tener menos de 15 caracteres")
    .required("Este campo es obligatorio"),
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
    name: "nationality",
    type: FORM_TYPES.TEXT,
    label: "Nacionalidad",
    validation: Yup.string("Deber ser una cadena de caracteres")
    .max(50, "debe tener menos de 50 caracteres")
    .required("Este campo es obligatorio"),
  },
  {
    name: "doubleNationality",
    type: FORM_TYPES.SELECT,
    label: "¿Doble nacionalidad?",
    list: [
      { label: "Si", value: true },
      { label: "No", value: false },
    ],
    validation: Yup.boolean().required("Este campo es obligatorio"),
  },
  {
    name: "arrivedDate",
    type: FORM_TYPES.ONLYDATE,
    label: "Fecha de llegada",
    validation: Yup.date()
  },
  {
    name: "europeanCitizenAuthorization",
    type: FORM_TYPES.SELECT,
    label: "Visado europeo",
    list: [
      { label: "Si", value: true },
      { label: "No", value: false },
    ],
    validation: Yup.boolean()
  },
  {
    name: "touristVisa",
    type: FORM_TYPES.SELECT,
    label: "Visado turista",
    list: [
      { label: "Si", value: true },
      { label: "No", value: false },
    ],
    validation: Yup.boolean()
  },
  {
    name: "dateTouristVisa",
    type: FORM_TYPES.ONLYDATE,
    label: "Fecha de visado turista",
    validation: Yup.date()
  },
  {
    name: "healthCard",
    type: FORM_TYPES.SELECT,
    label: "Tarjeta sanitaria",
    list: [
      { label: "Si", value: true },
      { label: "No", value: false },
    ],
    validation: Yup.boolean()
  },
  {
    name: "employmentSector",
    type: FORM_TYPES.TEXT,
    label: "Sector de empleo",
    validation: Yup.string("Deber ser una cadena de caracteres")
    .max(150, "debe tener menos de 150 caracteres")
    .required("Este campo es obligatorio"),
  },
  
  {
    name: "perceptionAid",
    type: FORM_TYPES.TEXT,
    label: "Ayuda percibida",
    validation: Yup.string("Deber ser una cadena de caracteres")
    .max(150, "debe tener menos de 150 caracteres")
    .required("Este campo es obligatorio"),
  },
  
  {
    name: "savingsPossesion",
    type: FORM_TYPES.SELECT,
    label: "Posesión de ahorro",
    list: [
      { label: "Si", value: true },
      { label: "No", value: false },
    
    ],
    validation: Yup.boolean()
  },
  {
    name: "working",
    type: FORM_TYPES.SELECT,
    label: "Trabajando",
    list: [
      { label: "Si", value: true },
      { label: "No", value: false },
    ],
    validation: Yup.boolean()
  },
  {
    name: "computerKnowledge",
    type: FORM_TYPES.SELECT,
    label: "Conocimientos informáticos",
    list: [
      { label: "Si", value: true },
      { label: "No", value: false },
    ],
    validation: Yup.boolean()
  },
  {
    name: "ownedDevices",
    type: FORM_TYPES.TEXTEAREA,
    label: "Dispositivos propios",
    validation: Yup.string("Deber ser una cadena de caracteres")
    .max(200, "debe tener menos de 200 caracteres")
    .required("Este campo es obligatorio"),
  },
  {
    name: "languages",
    type: FORM_TYPES.TEXT,
    label: "Idioma",
    validation: Yup.string("Deber ser una cadena de caracteres")
    .max(100, "debe tener menos de 100 caracteres")
    .required("Este campo es obligatorio"),
  },
];
    

function FormBeneficiaries() {

  const user = useAuthUser();
  const navigate = useNavigate();
  const [disableButton, setDisableButton] = React.useState(false);
  const {setSuccessMsg, setErrorMsg} = React.useContext(CustomNotistackContext)

  const saveBeneficiarie = (values) => {
      setDisableButton(true);
      saveBeneficiariesAPI(user().token, values).then((res) => {
        setSuccessMsg("Beneficiario añadido correctamente")
        navigate('/ong/beneficiarios')
      }).catch((err) => {
        if(err.response.status === 436) {
          setErrorMsg(err.response.data)
        }else{
          setErrorMsg("Error al añadir el beneficiario")
        }

      }).finally(() => setDisableButton(false));
  }

  return (
    <BodyWrapper>
        <BasicFrom 
            isLoading={disableButton}
            buttonText={"Añadir"}
            form={form}
            handleSubmitForm={saveBeneficiarie}
        />
    </BodyWrapper>
  )
}

export default FormBeneficiaries