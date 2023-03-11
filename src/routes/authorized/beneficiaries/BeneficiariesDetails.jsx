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
import { beneficiarioBasicFormValue, voluntarios } from "./forms";




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
              form={beneficiarioBasicFormValue}
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
