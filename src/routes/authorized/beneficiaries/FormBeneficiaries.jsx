import React from 'react'
import BasicFrom from '../../../components/BasicFrom'
import BodyWrapper from '../../../components/BodyWrapper';
import { saveBeneficiariesAPI } from '../../../api/beneficiario/api';
import { FORM_TYPES } from '../../../components/utils/utilsForms';
import { useNavigate } from 'react-router-dom';
import { useAuthUser } from 'react-auth-kit';

const form = [
  {
    name: "name",
    type: FORM_TYPES.TEXT,
    label: "Nombre",
  },
  {
    name: "cif",
    type: FORM_TYPES.TEXT,
    label: "Código de identificación fiscal",
  },
  {
    name: "email",
    type: FORM_TYPES.TEXT,
    label: "Email",
  },
  {
    name: "description",
    type: FORM_TYPES.TEXTEAREA,
    label: "Descripción",
  },
  {
    name: "username",
    type: FORM_TYPES.TEXT,
    label: "Nombre de usuario",
  },
  {
    name: "password",
    type: FORM_TYPES.TEXT,
    label: "Contraseña",
  
  },
  
  {
    name: "address",
    type: FORM_TYPES.TEXT,
    label: "Dirección",
  },
  {
    name: "birthday",
    type: FORM_TYPES.ONLYDATE,
    label: "Fecha de nacimiento",
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
  },
  {
    name: "documentNumber",
    type: FORM_TYPES.TEXT,
    label: "Número de Documentación",
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
  },
  {
    name: "driveLicenses",
    type: FORM_TYPES.TEXT,
    label: "Carnet de conducir",
  },
  {
    name: "hourOfAvailability",
    type: FORM_TYPES.TEXT,
    label: "Horas de disponibilidad",
  },

  {
    name: "firstSurname",
    type: FORM_TYPES.TEXT,
    label: "Primer apellido",
  },
  {
    name: "secondSurname",
    type: FORM_TYPES.TEXT,
    label: "Segundo apellido",
  },
  {
    name: "gender",
    type: FORM_TYPES.SELECT,
    label: "Género",
    list: [
      { label: "Hombre", value: "MALE" },
      { label: "Mujer", value: "FEMALE" },
    ],
  },
  {
    name: "entryDate",
    type: FORM_TYPES.ONLYDATE,
    label: "Fecha de Entrada",
  },
 
  {
    name: "leavingDate",
    type: FORM_TYPES.ONLYDATE,
    label: "Fecha de salida",
  },
  {
    name: "numberOfChildren",
    type: FORM_TYPES.NUMBER,
    label: "Número de hijos",
  },
  {
    name: "otherSkills",
    type: FORM_TYPES.TEXTEAREA,
    label: "Otras habilidades",
  },
  {
    name: "postalCode",
    type: FORM_TYPES.NUMBER,
    label: "Código Postal",
  },
  {
    name: "registrationAddress",
    type: FORM_TYPES.TEXT,
    label: "Dirección de registro",
  },
  {
    name: "telephone",
    type: FORM_TYPES.NUMBER,
    label: "Teléfono",
  },
  {
    name: "town",
    type: FORM_TYPES.TEXT,
    label: "Ciudad",
  },
  {
    name: "nationality",
    type: FORM_TYPES.TEXT,
    label: "Nacionalidad",
  },
  {
    name: "doubleNationality",
    type: FORM_TYPES.SELECT,
    label: "¿Doble nacionalidad?",
    list: [
      { label: "Si", value: true },
      { label: "No", value: false },
    ],
  },
  {
    name: "arrivedDate",
    type: FORM_TYPES.ONLYDATE,
    label: "Fecha de llegada",
  },
  {
    name: "europeanCitizenAuthorization",
    type: FORM_TYPES.SELECT,
    label: "Visado europeo",
    list: [
      { label: "Si", value: true },
      { label: "No", value: false },
    ],
  },
  {
    name: "touristVisa",
    type: FORM_TYPES.SELECT,
    label: "Visado turista",
    list: [
      { label: "Si", value: true },
      { label: "No", value: false },
    ],
  },
  {
    name: "dateTouristVisa",
    type: FORM_TYPES.ONLYDATE,
    label: "fecha de visado turista",
  },
  {
    name: "healthCard",
    type: FORM_TYPES.SELECT,
    label: "Tarjeta sanitaria",
    list: [
      { label: "Si", value: true },
      { label: "No", value: false },
    ],
  },
  {
    name: "employmentSector",
    type: FORM_TYPES.TEXT,
    label: "Sector de empleo",
  },
  {
    name: "perceptionAid",
    type: FORM_TYPES.TEXT,
    label: "Ayuda percibida",
  },
  {
    name: "rolAccount",
    type: FORM_TYPES.SELECT,
    label: "Rol",
    list: [
      { label: "ONG", value: "ONG" },
      { label: "Voluntario", value: "VOLUNTEER" },
      { label: "Beneficiario", value: "BENEFICIARY" },
    ],
  },
  {
    name: "savingsPossesion",
    type: FORM_TYPES.SELECT,
    label: "Posesión de ahorro",
    list: [
      { label: "Si", value: true },
      { label: "No", value: false },
    ],
  },
  {
    name: "working",
    type: FORM_TYPES.SELECT,
    label: "Trabajando",
    list: [
      { label: "Si", value: true },
      { label: "No", value: false },
    ],
  },
  {
    name: "computerKnowledge",
    type: FORM_TYPES.SELECT,
    label: "Conocimientos informáticos",
    list: [
      { label: "Si", value: true },
      { label: "No", value: false },
    ],
  },
  {
    name: "ownedDevices",
    type: FORM_TYPES.TEXTEAREA,
    label: "Dispositivos propios",
  },
  {
    name: "languages",
    type: FORM_TYPES.TEXT,
    label: "Idioma",
  },
];
    

function FormBeneficiaries() {

  const user = useAuthUser();
  const navigate = useNavigate();
  

    const saveBeneficiarie = (values) => {
        console.log(values)
        saveBeneficiariesAPI(user().token, values).then((res) => {
          navigate('/ong/beneficiarios')
        });
        
        
    }

  return (
    <BodyWrapper>
        <BasicFrom 
            buttonText={"Añadir"}
            form={form}
            handleSubmitForm={saveBeneficiarie}
        />
    </BodyWrapper>
  )
}

export default FormBeneficiaries