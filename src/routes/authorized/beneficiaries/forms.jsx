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
    
]

export const voluntarios = {
  id: "1",
  name: "Jose Carlos López",
  documentationType: "DNI",
  dni: "1234223Z",
  gender: "Hombre",
  birthDate: "05/03/2002",
  phoneNumber: "666233222",
  description: "Paciente de cierta patología",
  avatar:
    "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80",
  academicExperience: "Título Universitario",
  extraEducation: "Curso de Primeros Auxilios",
  workingExperience: "Puesto: Bombero",
  address: "C/ Almería",
  postalCode: "41013",
  town: "Sevilla",
  province: "Sevilla",
  country: "España",
  civilState: "Soltero",
  email: "josele@gmail.com",
  startDate: "01/01/2023",
  endDate: "No procede",
  drivingLicense: "Coche",
  homologado: "Sí",
  census: "España",
  skills: "Jugar a la peonza",
  jobSector: "Emergencias",
  nationality: "Español",
  arrivalDate: "No procede",
  authorization: "Visado(2023)",
  sanitaryCard: "",
  grants: "No",
  savings: "No",
  saeInscription: "Si",
  working: "Si",
  itKnowledge: "Si",
  languages: "Español",
  devices: "Móvil, Internet",
};


export const beneficiarioBasicFormValue = [
  {
    name: "fullName",
    type: FORM_TYPES.TEXT,
    label: "Nombre Completo",
    value: voluntarios?.name,
  },
  {
    name: "documentationType",
    type: FORM_TYPES.TEXT,
    label: "Documentación",
    value: voluntarios?.documentationType,
  },
  {
    name: "iDocumentationNumber",
    type: FORM_TYPES.TEXT,
    label: "Número de Documentación",
    value: voluntarios?.dni,
  },
  {
    name: "gender",
    type: FORM_TYPES.TEXT,
    label: "Género",
    value: voluntarios?.gender,
  },
  {
    name: "birthDate",
    type: FORM_TYPES.TEXT,
    label: "Fecha de Nacimiento",
    value: voluntarios?.birthDate,
  },
  {
    name: "phoneNumber",
    type: FORM_TYPES.TEXT,
    label: "Número de Teléfono",
    value: voluntarios?.phoneNumber,
  },
  {
    name: "description",
    type: FORM_TYPES.TEXT,
    label: "Descripción",
    value: voluntarios?.description,
  },
  {
    name: "address",
    type: FORM_TYPES.TEXT,
    label: "Dirección",
    value: voluntarios?.address,
  },
  {
    name: "postalCode",
    type: FORM_TYPES.TEXT,
    label: "Código Postal",
    value: voluntarios?.postalCode,
  },
  {
    name: "town",
    type: FORM_TYPES.TEXT,
    label: "Ciudad",
    value: voluntarios?.town,
  },
  {
    name: "province",
    type: FORM_TYPES.TEXT,
    label: "Provincia",
    value: voluntarios?.province,
  },
  {
    name: "country",
    type: FORM_TYPES.TEXT,
    label: "País",
    value: voluntarios?.country,
  },
  {
    name: "civilState",
    type: FORM_TYPES.TEXT,
    label: "Estado Civil",
    value: voluntarios?.civilState,
  },
  {
    name: "email",
    type: FORM_TYPES.TEXT,
    label: "Correo Electrónico",
    value: voluntarios?.email,
  },
  {
    name: "startDate",
    type: FORM_TYPES.TEXT,
    label: "Fecha de Inicio",
    value: voluntarios?.startDate,
  },
  {
    name: "endDate",
    type: FORM_TYPES.TEXT,
    label: "Fecha de Finalización",
    value: voluntarios?.endDate,
  },
  {
    name: "drivingLicense",
    type: FORM_TYPES.TEXT,
    label: "Licencia de Conducir",
    value: voluntarios?.drivingLicense,
  },
  {
    name: "homologado",
    type: FORM_TYPES.TEXT,
    label: "Homologado",
    value: voluntarios?.homologado,
  },
  {
    name: "census",
    type: FORM_TYPES.TEXT,
    label: "Censo",
    value: "España",
  },
  {
    name: "skills",
    type: FORM_TYPES.TEXT,
    label: "Habilidades",
    value: "Jugar a la peonza",
  },
  {
    name: "jobSector",
    type: FORM_TYPES.TEXT,
    label: "Sector laboral",
    value: "Emergencias",
  },
  {
    name: "nationality",
    type: FORM_TYPES.TEXT,
    label: "Nacionalidad",
    value: "Español",
  },
  {
    name: "arrivalDate",
    type: FORM_TYPES.TEXT,
    label: "Fecha de llegada",
    value: "No procede",
  },
  {
    name: "authorization",
    type: FORM_TYPES.TEXT,
    label: "Autorización",
    value: "Visado(2023)",
  },
  {
    name: "sanitaryCard",
    type: FORM_TYPES.TEXT,
    label: "Tarjeta Sanitaria",
    value: "",
  },
  {
    name: "grants",
    type: FORM_TYPES.TEXT,
    label: "Subvenciones",
    value: "No",
  },
  {
    name: "savings",
    type: FORM_TYPES.TEXT,
    label: "Ahorros",
    value: "No",
  },
  {
    name: "saeInscription",
    type: FORM_TYPES.TEXT,
    label: "Inscripción en SAE",
    value: "Si",
  },
  {
    name: "working",
    type: FORM_TYPES.TEXT,
    label: "Trabajando",
    value: "Si",
  },
  {
    name: "itKnowledge",
    type: FORM_TYPES.TEXT,
    label: "Conocimientos informáticos",
    value: "Si",
  },
  {
    name: "languages",
    type: FORM_TYPES.TEXT,
    label: "Idiomas",
    value: "Español",
  },
  {
    name: "devices",
    type: FORM_TYPES.TEXT,
    label: "Dispositivos",
    value: "Móvil, Internet",
  },
];
export const beneficiarioYvoluntarioBasicForm = [
  {
    name: "fullName",
    type: FORM_TYPES.TEXT,
    label: "Nombre Completo",
  },
  {
    name: "documentationType",
    type: FORM_TYPES.SELECT,
    label: "Documentación",
    list: [
      { label: "DNI", value: "DNI" },
      { label: "NIE", value: "NIE" },
      { label: "Pasaporte", value: "Pasaporte" },
    ],
  },
  {
    name: "iDocumentationNumber",
    type: FORM_TYPES.TEXT,
    label: "Número de Documentación",
  },
  {
    name: "gender",
    type: FORM_TYPES.SELECT,
    label: "Género",
    list: [
      { label: "Hombre", value: "Hombre" },
      { label: "Mujer", value: "Mujer" },
      { label: "Otro", value: "Otro" },
    ],
  },
  {
    name: "birthDate",
    type: FORM_TYPES.ONLYDATE,
    label: "Fecha de Nacimiento",
  },
  {
    name: "phoneNumber",
    type: FORM_TYPES.TEXT,
    label: "Número de Teléfono"
  },
  {
    name: "description",
    type: FORM_TYPES.TEXT,
    label: "Descripción",
  },
  {
    name: "address",
    type: FORM_TYPES.TEXT,
    label: "Dirección",
  },
  {
    name: "postalCode",
    type: FORM_TYPES.TEXT,
    label: "Código Postal"
  },
  {
    name: "town",
    type: FORM_TYPES.TEXT,
    label: "Ciudad",

  },
  {
    name: "province",
    type: FORM_TYPES.TEXT,
    label: "Provincia",
  },
  {
    name: "country",
    type: FORM_TYPES.TEXT,
    label: "País",
  },
  {
    name: "civilState",
    type: FORM_TYPES.SELECT,
    label: "Estado Civil",
    list: [
      { label: "Soltero", value: "Soltero" },
      { label: "Casado", value: "Casado" },
      { label: "Divorciado", value: "Divorciado" },
      { label: "Viudo", value: "Viudo" },
    ],
  },
  {
    name: "email",
    type: FORM_TYPES.TEXT,
    label: "Correo Electrónico",
  },
  {
    name: "startDate",
    type: FORM_TYPES.ONLYDATE,
    label: "Fecha de Inicio",
  },
  {
    name: "endDate",
    type: FORM_TYPES.ONLYDATE,
    label: "Fecha de Finalización",
  },
  {
    name: "drivingLicense",
    type: FORM_TYPES.SELECT,
    label: "Licencia de Conducir",
    list: [
      { label: "Si", value: "Si" },
      { label: "No", value: "No" },
    ],
  },
  {
    name: "homologado",
    type: FORM_TYPES.SELECT,
    label: "Homologado",
    list: [
      { label: "Si", value: "Si" },
      { label: "No", value: "No" },
    ],
  },
  {
    name: "census",
    type: FORM_TYPES.TEXT,
    label: "Censo"
  },
  {
    name: "skills",
    type: FORM_TYPES.TEXT,
    label: "Habilidades",
  },
  {
    name: "jobSector",
    type: FORM_TYPES.TEXT,
    label: "Sector laboral",
  },
  {
    name: "nationality",
    type: FORM_TYPES.TEXT,
    label: "Nacionalidad",
  },
  {
    name: "arrivalDate",
    type: FORM_TYPES.ONLYDATE,
    label: "Fecha de llegada",
  },
  {
    name: "authorization",
    type: FORM_TYPES.TEXT,
    label: "Autorización",
  },
  {
    name: "sanitaryCard",
    type: FORM_TYPES.SELECT,
    label: "Tarjeta Sanitaria",
    list: [
      { label: "Si", value: "Si" },
      { label: "No", value: "No" },
    ],

  },
  {
    name: "grants",
    type: FORM_TYPES.TEXT,
    label: "Subvenciones",
  },
  {
    name: "savings",
    type: FORM_TYPES.TEXT,
    label: "Ahorros",
  },
  {
    name: "saeInscription",
    type: FORM_TYPES.TEXT,
    label: "Inscripción en SAE",
  },
  {
    name: "working",
    type: FORM_TYPES.SELECT,
    label: "Trabajando",
    list: [
      { label: "Si", value: "Si" },
      { label: "No", value: "No" },
    ],
  },
  {
    name: "itKnowledge",
    type: FORM_TYPES.SELECT,
    label: "Conocimientos informáticos",
    list: [
      { label: "Si", value: "Si" },
      { label: "No", value: "No" },
    ],
  },
  {
    name: "languages",
    type: FORM_TYPES.TEXT,
    label: "Idiomas",
  },
  {
    name: "devices",
    type: FORM_TYPES.TEXT,
    label: "Dispositivos",
  },
];