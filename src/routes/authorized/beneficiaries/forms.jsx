import { Avatar} from '@mui/material';
import { FORM_TYPES } from '../../../components/utils/utilsForms';

export const beneficiarios = [
    {
      id: "1",
      username: "gonzmart",
      name: "Gonzalo",
      surname: "Martin",
      email: "gonzalomartin@gmail.com",
      age: "12",
      role: "Beneficiario",
      avatarImage: <Avatar src="https://randomuser.me/api/portraits/men/3.jpg"> </Avatar>,
      nombreActividad: "Viaje a DisneyLand",
      fechaActividad: "22-03-2023"
    },
    {
      id: "2",
      username: "rodrigo13",
      name: "Rodrigo",
      surname: "Pérez",
      email: "rodriper@gmail.com",
      age: "25",
      role: "Beneficiario",
      avatarImage: <Avatar src="https://randomuser.me/api/portraits/men/4.jpg"> </Avatar>,
      nombreActividad: "",
      fechaActividad: ""
    }, 
    {
      id: "3",
      username: "alejandro41",
      name: "Alejandro",
      surname: "Rodriguez",
      email: "alex23@gmail.com",
      age: "14",
      role: "Beneficiario",
      avatarImage: <Avatar src="https://randomuser.me/api/portraits/men/35.jpg"> </Avatar>,
      nombreActividad: "Aquapark",
      fechaActividad: "25-03-2023"
    }, 
    {
      id: "4",
      username: "franny23",
      name: "Francisco",
      surname: "López",
      email: "franlopez@gmail.com",
      age: "22",
      role: "Beneficiario",
      avatarImage: <Avatar src="https://randomuser.me/api/portraits/women/14.jpg"> </Avatar>,
      nombreActividad: "Apoyo a actividad 2",
      fechaActividad: "25-03-2023"
    }, 
    {
        id: "5",
        username: "tere1132",
        name: "Teresa",
        surname: "López",
        email: "teresaa@gmail.com",
        age: "21",
        role: "Beneficiario",
        avatarImage: <Avatar src="https://randomuser.me/api/portraits/women/36.jpg"> </Avatar>,
        nombreActividad: "Apoyo a actividad 2",
        fechaActividad: "25-03-2023"
      }, 
    
];
export let beneficiarioBasicFormValue = [
  {
    name: "name",
    type: FORM_TYPES.TEXT,
    label: "Nombre",
    value: "name"
  },
  {
    name: "cif",
    type: FORM_TYPES.TEXT,
    label: "Documento de Identificación",
    value: "cif"
  },
  {
    name: "email",
    type: FORM_TYPES.TEXT,
    label: "Email",
    value: "email"
  },
  {
    name: "description",
    type: FORM_TYPES.TEXTEAREA,
    label: "Descripción",
    value: "description"
  },
  {
    name: "username",
    type: FORM_TYPES.TEXT,
    label: "Nombre de usuario",
    value: "username"
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
    value: "rolAccount"
  },
  {
    name: "address",
    type: FORM_TYPES.TEXT,
    label: "Dirección",
    value: "address"
  },
  {
    name: "birthday",
    type: FORM_TYPES.ONLYDATE,
    label: "Fecha de nacimiento",
    value: "birthday"
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
    value: "civilStatus"
  },
  {
    name: "documentNumber",
    type: FORM_TYPES.TEXT,
    label: "Número de Documentación",
    value: "documentNumber"
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
    value: "documentType"
  },
  {
    name: "driveLicenses",
    type: FORM_TYPES.TEXT,
    label: "Carnet de conducir",
    value: "driveLicenses"
  },
  {
    name: "entryDate",
    type: FORM_TYPES.ONLYDATE,
    label: "Fecha de Inicio",
    value: "entryDate"
  },
  {
    name: "firstSurname",
    type: FORM_TYPES.TEXT,
    label: "Primer apellido",
    value: "firstSurname"
  },
  {
    name: "secondSurname",
    type: FORM_TYPES.TEXT,
    label: "Segundo apellido",
    value: "secondSurname"
  },
  {
    name: "gender",
    type: FORM_TYPES.SELECT,
    label: "Género",
    list: [
      { label: "Hombre", value: "MALE" },
      { label: "Mujer", value: "FEMALE" },
    ],
    value: "gender"
  },
  {
    name: "hourOfAvailability",
    type: FORM_TYPES.TEXT,
    label: "Horas de disponibilidad",
    value: "hourOfAvailability"
  },
  {
    name: "leavingDate",
    type: FORM_TYPES.ONLYDATE,
    label: "Fecha de Finalización",
    value: "leavingDate"
  },
  {
    name: "numberOfChildren",
    type: FORM_TYPES.NUMBER,
    label: "Número de hijos",
    value: "numberOfChildren"
  },
  {
    name: "otherSkills",
    type: FORM_TYPES.TEXTEAREA,
    label: "Otras habilidades",
    value: "otherSkills"
  },
  {
    name: "postalCode",
    type: FORM_TYPES.NUMBER,
    label: "Código Postal",
    value: "postalCode"
  },
  {
    name: "registrationAddress",
    type: FORM_TYPES.TEXT,
    label: "Dirección de registro",
    value: "registrationAddress"
  },
  {
    name: "telephone",
    type: FORM_TYPES.NUMBER,
    label: "Teléfono",
    value: "telephone"
  },
  {
    name: "town",
    type: FORM_TYPES.TEXT,
    label: "Ciudad",
    value: "town"
  },
  {
    name: "nationality",
    type: FORM_TYPES.TEXT,
    label: "Nacionalidad",
    value: "nationality"
  },
  {
    name: "doubleNationality",
    type: FORM_TYPES.SELECT,
    label: "¿Doble nacionalidad?",
    list: [
      { label: "Si", value: true },
      { label: "No", value: false },
    ],
    value: "doubleNationality"
  },
  {
    name: "arrivedDate",
    type: FORM_TYPES.ONLYDATE,
    label: "Fecha de llegada",
    value: "arrivedDate"
  },
  {
    name: "europeanCitizenAuthorization",
    type: FORM_TYPES.SELECT,
    label: "Visado europeo",
    list: [
      { label: "Si", value: true },
      { label: "No", value: false },
    ],
    value: "europeanCitizenAuthorization"
  },
  {
    name: "touristVisa",
    type: FORM_TYPES.SELECT,
    label: "Visado turista",
    list: [
      { label: "Si", value: true },
      { label: "No", value: false },
    ],
    value: "touristVisa"
  },
  {
    name: "dateTouristVisa",
    type: FORM_TYPES.ONLYDATE,
    label: "fecha de visado turista",
    value: "dateTouristVisa"
  },
  {
    name: "healthCard",
    type: FORM_TYPES.SELECT,
    label: "Tarjeta sanitaria",
    list: [
      { label: "Si", value: true },
      { label: "No", value: false },
    ],
    value: "healthCard"
  },
  {
    name: "employmentSector",
    type: FORM_TYPES.TEXT,
    label: "Sector de empleo",
    value: "employmentSector"
  },
  {
    name: "perceptionAid",
    type: FORM_TYPES.TEXT,
    label: "Ayuda percibi",
    value: "perceptionAid"
  },
  {
    name: "savingsPossesion",
    type: FORM_TYPES.SELECT,
    label: "Posesión de ahorro",
    list: [
      { label: "Si", value: true },
      { label: "No", value: false },
    ],
    value: "savingsPossesion"
  },
  {
    name: "working",
    type: FORM_TYPES.SELECT,
    label: "Trabajando",
    list: [
      { label: "Si", value: true },
      { label: "No", value: false },
    ],
    value: "working"
  },
  {
    name: "computerKnowledge",
    type: FORM_TYPES.SELECT,
    label: "Conocimiento informático",
    list: [
      { label: "Si", value: true },
      { label: "No", value: false },
    ],
    value: "computerKnowledge"
  },
  {
    name: "ownedDevices",
    type: FORM_TYPES.TEXTEAREA,
    label: "Dispositivos propios",
    value: "ownedDevices"
  },
  {
    name: "languages",
    type: FORM_TYPES.TEXT,
    label: "Idioma",
    value: "languages"
  },
];