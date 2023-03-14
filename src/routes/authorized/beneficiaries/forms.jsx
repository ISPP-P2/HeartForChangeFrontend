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
export const beneficiarioBasicFormValue = [
  {
    name: "name",
    type: FORM_TYPES.TEXT,
    label: "Nombre",
  },
  {
    name: "cif",
    type: FORM_TYPES.TEXT,
    label: "Documento de Identificación",
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
    name: "entryDate",
    type: FORM_TYPES.ONLYDATE,
    label: "Fecha de Inicio",
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
    name: "hourOfAvailability",
    type: FORM_TYPES.TEXT,
    label: "Horas de disponibilidad",
  },
  {
    name: "leavingDate",
    type: FORM_TYPES.ONLYDATE,
    label: "Fecha de Finalización",
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
    label: "Código Postal",
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
    label: "perceptionAid",
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
    label: "Trabajando",
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