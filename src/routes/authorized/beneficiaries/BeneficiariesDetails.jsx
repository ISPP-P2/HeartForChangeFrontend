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
import { Typography, useMediaQuery } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import { beneficiarioBasicFormValue, beneficiarios } from "./forms";
import { useAuthUser } from "react-auth-kit";
import { useQuery } from "react-query";
import { getBeneficiarieAPI } from "../../../api/beneficiario/api";
import { useParams } from "react-router-dom";
import { useState } from 'react'
import { updateBeneficiariesAPI } from '../../../api/beneficiario/api';
import CustomReloading from "../../../components/CustomReloading";
import CustomError from "../../../components/CustomError";
import BeneficiariesComplementaryInformation from "./BeneficiariesComplementaryInformation";
import BeneficiariesAcademicExperienceForm from "./BeneficiariesAcademicExperienceForm";
import BeneficiariesWorkExperiencesForm from "./BeneficiariesWorkExperiencesForm";




const parseBenfeiciario = (beneficiario) => {
  return beneficiarioBasicFormValue.map((item) => {
    return { ...item, value: beneficiario[item.name] };
  });
}
export const extraForm2 = (title, variable) => {
   return { 
      name: "academicExperience",
      type: FORM_TYPES.TEXT,
      label: title,
      value: variable
  }
  };


export const extraForm = (title, variable) => [
  {
    name: "academicExperience",
    type: FORM_TYPES.TEXT,
    label: title,
    value: variable
  }
];

function BeneficiariesDetails() {
  const [readOnlyValue, toggleReadOnly] = useState(true)
  const user = useAuthUser();
  const { id } = useParams();
  const query = useQuery(["QUERY_BENEFICIARIES_DETAILS", id],() => getBeneficiarieAPI(user().token,id));
  const mobile = useMediaQuery("(min-width: 850px)");


  if(query.isLoading){
    return <CustomReloading />
  }

  if(query.isError){
    return <CustomError onClick={()=> query.refetch()}/>
  }

  const updateBeneficiarie = (values) => {
    updateBeneficiariesAPI(user().token, values, id)
    toggleReadOnly(!readOnlyValue);
  }
 
  return (
    
    <BodyWrapper title={`Beneficiario ${id}`}>
      <CustomFlex direction={"column"}>
        <Box
          sx={{
            display: mobile ? "grid" : "flex",
            gridTemplateColumns: "23em 1fr",
            gridTemplateRows: "10em 2em",
            flexDirection: "column",
          }}
        >
          <Box>
            <Box sx={{ marginTop: "1rem" }}>
              <CustomFlex direction={"row"}>
              <Box flexBasis={"fit-content"}>
                <CustomButton  widthButton="10rem" variantButton={VARIANTES_BUTTON.ORANGE} text="ACTIVIDADES"></CustomButton>
              </Box>
                <CustomButton variantButton={VARIANTES_BUTTON.GREEN2} onClick={() => {toggleReadOnly(!readOnlyValue); console.log(readOnlyValue); }} text="EDITAR DATOS"></CustomButton>
              </CustomFlex>
            </Box>
            <Box sx={{ marginTop: "1rem", marginRight: "1rem" }}>
              <CustomFlex direction={"column"}>
                <BeneficiariesComplementaryInformation id={id} />
                <BeneficiariesAcademicExperienceForm id={id} />
                <BeneficiariesWorkExperiencesForm id={id} />
              </CustomFlex>
            </Box>
          </Box>
          <Box sx={{ gridColumn: "2/3", gridRow: "1/3" }}>
            {!query.isError && query.isSuccess ? <BasicFrom
                form={parseBenfeiciario(query.data)}
                readOnly={readOnlyValue}
                buttonText={"Confirmar"}
                width={"100%"}
                handleSubmitForm={updateBeneficiarie}
                showButton = {!readOnlyValue}
              /> : null}
              
          </Box>
          
        </Box>

        <CustomFlex direction={"column"}></CustomFlex>
      </CustomFlex>
    </BodyWrapper>
  );
}

export default BeneficiariesDetails;