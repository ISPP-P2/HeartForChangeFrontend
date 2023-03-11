import * as React from "react";
import Box from "@mui/material/Box";

import CustomFlex from "../../../components/CustomFlex";
import CustomButton, {
  VARIANTES_BUTTON,
} from "../../../components/CustomButton";

import BasicFrom from "../../../components/BasicFrom";
import { FORM_TYPES } from "../../../components/utils/utilsForms";
import BodyWrapper from "../../../components/BodyWrapper";
import BasicModal from "../../../components/BasicModal";
import AcademicExperienceForm from "../volunteers/AcademicExperienceForm";
import ComplementaryFormationForm from "../volunteers/ComplementaryFormationForm";
import WorkExperienceForm from "..//volunteers/WorkExperienceForm";
import { useMediaQuery } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

const voluntarios = {
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

function BeneficiariesDetails() {
  const mobile = useMediaQuery("(min-width: 850px)");


  return (
    <BodyWrapper title={"Beneficiario 1"}>
      <CustomFlex direction={"column"}>
        <Box
          sx={{
            display: mobile ? "grid" : "flex",
            gridTemplateColumns: "23em 1fr",
            gridTemplateRows: "10em 2em",
            flexDirection: "column",
          }}
        >
          <Box sw={{ innerHeight: "10px", gridColumn: "1/1", gridRow: "1/1", width:"200px" }}>
            <img src={voluntarios.avatar} width={260}></img>
          </Box>
          <Box>
            <Box sx={{ marginTop: "1rem" }}>
              <CustomFlex direction={"row"}>
              <Box flexBasis={"fit-content"}>
                <CustomButton  widthButton="10rem" variantButton={VARIANTES_BUTTON.ORANGE} text="ACTIVIDADES"></CustomButton>
              </Box>
                <CustomButton variantButton={VARIANTES_BUTTON.GREEN2}  text="EDITAR DATOS"></CustomButton>
              </CustomFlex>
            </Box>
            <Box sx={{ marginTop: "1rem", marginRight: "1rem" }}>
              <CustomFlex direction={"column"}>
                <CustomFlex direction={"row"}>
                  <Box flexBasis={"fit-content"}>
                    <BasicModal
                      widthButton={"10rem"}
                      variant={VARIANTES_BUTTON.ORANGE}
                      text={"Experiencia Académica"}
                      title={"Experiencia Académica"}
                      body={<BasicFrom form={extraForm} readOnly={true} />}
                    />
                  </Box>
                  <BasicModal
                      variant={VARIANTES_BUTTON.GREEN2}

                    text={<AddIcon />}
                    title={"Experiencia Académica"}
                    body={<AcademicExperienceForm />}
                  />
                  
                </CustomFlex>
                <CustomFlex direction={"row"} >
                  <Box flexBasis={"fit-content"}>
                    <BasicModal
                      widthButton={"10rem"}
                      variant={VARIANTES_BUTTON.ORANGE}
                      text={"Experiencia Laboral"}
                      title={"Experiencia Laboral"}
                      body={<BasicFrom form={extraForm} readOnly={true} />}
                    />
                  </Box>
                    <BasicModal
                      variant={VARIANTES_BUTTON.GREEN2}

                      text={<AddIcon />}
                      title={"Experiencia Laboral"}
                      body={<WorkExperienceForm />}
                    />
                </CustomFlex>
                <CustomFlex direction={"row"}>
                  <Box flexBasis={"fit-content"}>
                    <BasicModal
                       widthButton={"10rem"}
                      variant={VARIANTES_BUTTON.ORANGE}
                      text={"Formación Complementaria"}
                      title={"Formación Complementaria"}
                      body={<BasicFrom form={extraForm} readOnly={true} />}
                    />
                  </Box>
                  <BasicModal
                      variant={VARIANTES_BUTTON.GREEN2}

                    text={<AddIcon />}
                    title={"Formación Complementaria"}
                    body={<ComplementaryFormationForm />}
                  />
                </CustomFlex>
              </CustomFlex>
            </Box>
          </Box>
          <Box sx={{ gridColumn: "2/3", gridRow: "1/3" }}>
            <BasicFrom
              form={form2}
              readOnly={true}
              width={"100%"}
              handleSubmitForm={(values) => console.log(values)}
            />
          </Box>
        
        </Box>

        <CustomFlex direction={"column"}></CustomFlex>
      </CustomFlex>
    </BodyWrapper>
  );
}

export default BeneficiariesDetails;
