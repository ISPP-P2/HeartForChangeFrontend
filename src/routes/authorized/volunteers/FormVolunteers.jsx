import React from 'react'
import BasicFrom from '../../../components/BasicFrom'
import BasicModal from '../../../components/BasicModal'
import BodyWrapper from '../../../components/BodyWrapper'
import { saveVolunteerAPI } from '../../../api/voluntarios/api';
import { FORM_TYPES } from '../../../components/utils/utilsForms';
import { useNavigate } from 'react-router-dom';
import { useAuthUser } from 'react-auth-kit';

const form = [
  {
    name: "email",
    type: FORM_TYPES.TEXT,
    label: "Correo electrónico",
  },
  {
    name: "name",
    type: FORM_TYPES.TEXT,
    label: "Nombre",
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
    name: "documentNumber",
    type: FORM_TYPES.TEXT,
    label: "Número de Documentación",
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
    name: "birthday",
    type: FORM_TYPES.ONLYDATE,
    label: "Fecha de cumpleaños",
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
    name: "numberOfChildren",
    type: FORM_TYPES.NUMBER,
    label: "Número de hijos",
  },

  {
    name: "entryDate",
    type: FORM_TYPES.ONLYDATE,
    label: "Fecha de Inicio",
  },
  {
    name: "leavingDate",
    type: FORM_TYPES.ONLYDATE,
    label: "Fecha de Finalización",
  },
  {
    name: "address",
    type: FORM_TYPES.TEXT,
    label: "Dirección",
  },
  {
    name: "postalCode",
    type: FORM_TYPES.NUMBER,
    label: "Código Postal",
  },
  {
    name: "registrationAddres",
    type: FORM_TYPES.TEXT,
    label: "Dirección de registro",
  },
  {
    name: "town",
    type: FORM_TYPES.TEXT,
    label: "Ciudad",
  },
  {
    name: "otherSkills",
    type: FORM_TYPES.TEXTEAREA,
    label: "Otras habilidades",
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
    name: "sexCrimes",
    type: FORM_TYPES.SELECT,
    label: "Crímenes sexuales",
    list: [
      { label: "Sí", value: true },
      { label: "No", value: false },
    ],
  },
  {
    name: "telephone",
    type: FORM_TYPES.NUMBER,
    label: "Teléfono",
  }
];


function FormVolunteers() {

  const user = useAuthUser();
  const navigate = useNavigate();

  const saveVolunteer = (values) => {
      console.log(values)
      saveVolunteerAPI(user().token, values)
      navigate("/ong/voluntarios")
      
  }

  return (
    <BodyWrapper>
        <BasicFrom 
            buttonText={"Añadir"}
            form={form}
            handleSubmitForm={saveVolunteer}
        />
    </BodyWrapper>
  )
}

export default FormVolunteers