import { Avatar} from '@mui/material';
import { FORM_TYPES } from '../../../components/utils/utilsForms';
import * as Yup from 'yup';

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
    value: "name",
    validation: Yup.string("Deber ser una cadena de caracteres")
    .max(20, "La dirección no puede tener más de 20 caracteres")
    .required("Este campo es obligatorio"),
  },
  {
    name: "cif",
    type: FORM_TYPES.TEXT,
    label: "Código de identificación fiscal",
    value: "cif",
    validation: Yup.string("Deber ser una cadena de caracteres")
    .matches(/^[A-HJNPQSUVW]\d{8}$/, "El CIF debe estar compuesto por una letra y 8 dígitos")
    .min(9, "El CIF debe tener una longitud de 9 caracteres")
    .required("Este campo es obligatorio"),
  },
  {
    name: "email",
    type: FORM_TYPES.TEXT,
    label: "Email",
    value: "email",
    validation: Yup.string()
    .email("Debe ser un email válido")
    .required("Este campo es obligatorio"),
  },
  {
    name: "description",
    type: FORM_TYPES.TEXTEAREA,
    label: "Descripción",
    value: "description",
    validation: Yup.string("Deber ser una cadena de caracteres")
    .required("Este campo es obligatorio"),
  },
  {
    name: "username",
    type: FORM_TYPES.TEXT,
    label: "Nombre de usuario",
    value: "username",
    validation: Yup.string("Deber ser una cadena de caracteres")
    .max(20, "La dirección no puede tener más de 20 caracteres")
    .required("Este campo es obligatorio"),
  },

  {
    name: "address",
    type: FORM_TYPES.TEXT,
    label: "Dirección",
    value: "address",
    validation: Yup.string()
    .required("Este campo es obligatorio")
    .min(5, "La dirección debe tener al menos 5 caracteres")
    .max(50, "La dirección no puede tener más de 100 caracteres"),
  },
  {
    name: "birthday",
    type: FORM_TYPES.ONLYDATE,
    label: "Fecha de nacimiento",
    value: "birthday",
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
    value: "civilStatus",
    validation: Yup.string().required("Este campo es obligatorio"),
  },
  {
    name: "documentNumber",
    type: FORM_TYPES.TEXT,
    label: "Número de Documentación",
    value: "documentNumber",
    validation: Yup.string()
    .required("Este campo es obligatorio")
      .min(9, "El número de documentación debe tener 9 caracteres")
      .max(9, "El número de documentacióndebe tener 9 caracteres"),
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
    value: "documentType",
    validation: Yup.string().required("Este campo es obligatorio"),
  },
  {
    name: "driveLicenses",
    type: FORM_TYPES.TEXT,
    label: "Carnet de conducir",
    value: "driveLicenses",
    validation: Yup.string()
    .max(100, "No puede tener más de 100 caracteres"),
  },
  {
    name: "entryDate",
    type: FORM_TYPES.ONLYDATE,
    label: "Fecha de entrada",
    value: "entryDate"
  },
  {
    name: "firstSurname",
    type: FORM_TYPES.TEXT,
    label: "Primer apellido",
    value: "firstSurname",
    validation: Yup.string("Deber ser una cadena de caracteres")
    .max(20, "La dirección no puede tener más de 20 caracteres")
    .required("Este campo es obligatorio"),
  },
  {
    name: "secondSurname",
    type: FORM_TYPES.TEXT,
    label: "Segundo apellido",
    value: "secondSurname",
    validation: Yup.string("Deber ser una cadena de caracteres")
    .max(20, "La dirección no puede tener más de 20 caracteres")
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
    value: "gender",
    validation: Yup.string().required("Este campo es obligatorio"),
  },

  {
    name: "leavingDate",
    type: FORM_TYPES.ONLYDATE,
    label: "Fecha de salida",
    value: "leavingDate",
    validation: Yup.date()
  },
  {
    name: "numberOfChildren",
    type: FORM_TYPES.NUMBER,
    label: "Número de hijos",
    value: "numberOfChildren",
    validation: Yup.number()
    .required("Este campo es obligatorio (0 en caso de no tener)")
    .min(0, "El número de hijos debe ser mayor o igual a 0")
  },
  {
    name: "otherSkills",
    type: FORM_TYPES.TEXTEAREA,
    label: "Otras habilidades",
    value: "otherSkills",
    validation: Yup.string("Deber ser una cadena de caracteres")
    .max(350, "debe tener menos de 350 caracteres")
    .required("Este campo es obligatorio"),
  },
  {
    name: "postalCode",
    type: FORM_TYPES.NUMBER,
    label: "Código Postal",
    value: "postalCode",
    validation: Yup.number()
    .required("Este campo es obligatorio")
    .test(
      "len",
      "El código postal debe tener 5 cifras",
      (val) => val.toString().length === 5
    )
     
  },
  {
    name: "registrationAddress",
    type: FORM_TYPES.TEXT,
    label: "Dirección de registro",
    value: "registrationAddress",
    validation: Yup.string("Deber ser una cadena de caracteres")
    .max(50, "debe tener menos de 50 caracteres")
   
   
  },
  {
    name: "telephone",
    type: FORM_TYPES.NUMBER,
    label: "Teléfono",
    value: "telephone",
    validation: Yup.string("Deber ser una cadena de caracteres")
    .max(15, "debe tener menos de 15 caracteres")
    .required("Este campo es obligatorio"),
  },
  {
    name: "town",
    type: FORM_TYPES.TEXT,
    label: "Ciudad",
    value: "town",
    validation: Yup.string("Deber ser una cadena de caracteres")
    .max(20, "debe tener menos de 20 caracteres")
    .required("Este campo es obligatorio"),
  },
  {
    name: "nationality",
    type: FORM_TYPES.TEXT,
    label: "Nacionalidad",
    value: "nationality",
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
    value: "doubleNationality",
    validation: Yup.boolean().required("Este campo es obligatorio"),
  },
  {
    name: "arrivedDate",
    type: FORM_TYPES.ONLYDATE,
    label: "Fecha de llegada",
    value: "arrivedDate",
    validation: Yup.date()
    .required("Este campo es obligatorio"),
  },
  {
    name: "europeanCitizenAuthorization",
    type: FORM_TYPES.SELECT,
    label: "Visado europeo",
    list: [
      { label: "Si", value: true },
      { label: "No", value: false },
    ],
    value: "europeanCitizenAuthorization",
    validation: Yup.boolean(),
  },
  {
    name: "touristVisa",
    type: FORM_TYPES.SELECT,
    label: "Visado turista",
    list: [
      { label: "Si", value: true },
      { label: "No", value: false },
    ],
    value: "touristVisa",
    validation: Yup.boolean(),
  },
  {
    name: "dateTouristVisa",
    type: FORM_TYPES.ONLYDATE,
    label: "fecha de visado turista",
    value: "dateTouristVisa",
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

    value: "healthCard",
    validation: Yup.boolean(),
  },
  {
    name: "employmentSector",
    type: FORM_TYPES.TEXT,
    label: "Sector de empleo",
    value: "employmentSector",
    validation: Yup.string("Deber ser una cadena de caracteres")
    .max(150, "debe tener menos de 150 caracteres")
    .required("Este campo es obligatorio"),
  },
  {
    name: "perceptionAid",
    type: FORM_TYPES.TEXT,
    label: "Ayuda percibida",
    value: "perceptionAid",
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
    value: "savingsPossesion",
    validation: Yup.boolean(),
  },
  {
    name: "working",
    type: FORM_TYPES.SELECT,
    label: "Trabajando",
    list: [
      { label: "Si", value: true },
      { label: "No", value: false },
    ],
    value: "working",
    validation: Yup.boolean(),
  },
  {
    name: "computerKnowledge",
    type: FORM_TYPES.SELECT,
    label: "Conocimiento informático",
    list: [
      { label: "Si", value: true },
      { label: "No", value: false },
    ],
    value: "computerKnowledge",
    validation: Yup.boolean(),
  },
  {
    name: "ownedDevices",
    type: FORM_TYPES.TEXTEAREA,
    label: "Dispositivos propios",
    value: "ownedDevices",
    validation: Yup.string("Deber ser una cadena de caracteres")
    .max(200, "debe tener menos de 200 caracteres")
    .required("Este campo es obligatorio"),
  },
  {
    name: "languages",
    type: FORM_TYPES.TEXT,
    label: "Idioma",
    value: "languages",
    validation: Yup.string("Deber ser una cadena de caracteres")
    .max(100, "debe tener menos de 100 caracteres")
    .required("Este campo es obligatorio"),
  },
];