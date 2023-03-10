import * as React from "react";
import Box from "@mui/material/Box";

import CustomFlex from "../../../components/CustomFlex";
import CustomButton, {
  VARIANTES_BUTTON,
} from "../../../components/CustomButton";

import BasicFrom from "../../../components/BasicFrom";
import { FORM_TYPES } from "../../../components/utils/utilsForms";
import BodyWrapper from '../../../components/BodyWrapper';

const voluntarios = {
  id: "1",
  name: "Ursula Valenzuela Martín",
  documentationType: "DNI",
  dni: "80802020Z",
  gender: "Mujer",
  birthDate: "03/05/1998",
  phoneNumber: "666254876",
  description: "Hola",
  avatar: "data:image/jpeg;base64,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",
  academicExperience: "Título de Bachillerato",
  extraEducation: "Curso de Primeros Auxilios",
  workingExperience: "Puesto: Bombero",
  address: "C/ Andalucía",
  postalCode: "4013",
  town: "Sevilla",
  province: "Sevilla",
  country: "España",
  civilState: "Soltero",
  email: "ursula@gmail.com",
  startDate: "27/01/2023",
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

const form2 = [
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
    name: "academicExperience",
    type: FORM_TYPES.TEXT,
    label: "Experiencia Académica",
    value: voluntarios?.academicExperience,
  },
  {
    name: "extraEducation",
    type: FORM_TYPES.TEXT,
    label: "Educación Extra",
    value: voluntarios?.extraEducation,
  },
  {
    name: "workingExperience",
    type: FORM_TYPES.TEXT,
    label: "Experiencia Laboral",
    value: voluntarios?.workingExperience,
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

const extraForm = [
  {
    name: "academicExperience",
    type: FORM_TYPES.TEXT,
    label: "Experiencia Académica",
    value: voluntarios?.academicExperience,
  },
  {
    name: "extraEducation",
    type: FORM_TYPES.TEXT,
    label: "Formación Complementaria",
    value: voluntarios?.extraEducation,
  },
  {
    name: "workingExperience",
    type: FORM_TYPES.TEXT,
    label: "Experiencia Laboral",
    value: voluntarios?.workingExperience,
  },
];

function VolunteerDetails() {
  return (
  <BodyWrapper title={"Voluntario 1"}>
          
    <CustomFlex direction={"column"}>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gridTemplateRows: "repeat(2, 10em)",
        }}
      >
        <Box sw={{innerHeight:'10px',gridColumn: "1/1", gridRow: "1/1"}}>
          <img src={voluntarios.avatar} sx={{ width: "300px" }}></img>
        </Box>
        <Box sx={{ gridColumn: "2/3", gridRow: "1/3" }}>
          <BasicFrom
            form={form2}
            columns={3}
            width={"500px"}
            readOnly={true}
            handleSubmitForm={(values) => console.log(values)}
          />
        </Box>
        <Box>
        <CustomFlex direction={"row"}>
          <CustomButton variantButton="" text="ACTIVIDADES"></CustomButton>
          <CustomButton text="MOSTRAR DATOS"></CustomButton>
        </CustomFlex>
        <Box>
          <BasicFrom
            form={extraForm}
            columns={1}
            width={"350px"}
            readOnly={true}
            handleSubmitForm={(values) => console.log(values)}
          />
        </Box>
        </Box>
      </Box>

      <CustomFlex direction={"column"}>
        
        
      </CustomFlex>
    </CustomFlex>
  </BodyWrapper>
  );
}

export default  VolunteerDetails 
