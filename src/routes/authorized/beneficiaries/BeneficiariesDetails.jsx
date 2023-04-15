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
import { beneficiarie_Form, beneficiarioBasicFormValue, beneficiarios } from "./forms";
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
import { CustomNotistackContext } from "../../../context/CustomNotistack";
import { useContext } from "react";
import BeneficiariesAppointments from "./BeneficiariesAppointments";




const parseBenfeiciario = (beneficiario) => {
  return beneficiarie_Form.map((item) => {
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
  const {setSuccessMsg, setErrorMsg} = useContext(CustomNotistackContext)

  if(query.isLoading){
    return <CustomReloading />
  }

  if(query.isError){
    return <CustomError onClick={()=> query.refetch()}/>
  }

  const updateBeneficiarie = (values) => {
    updateBeneficiariesAPI(user().token, values, id).then(
      (response) => {
        toggleReadOnly(!readOnlyValue);
        query.refetch();
        setSuccessMsg("Beneficiario actualizado correctamente")
      }
    ).catch(
      (error) => {
        setErrorMsg("Error al actualizar beneficiario")
      });

  }
 
  return (
    
    <BodyWrapper  title={
                  <CustomFlex justifyContent={"space-between"}>
                    Beneficiario
                    <CustomButton variantButton={VARIANTES_BUTTON.GREEN2} onClick={() => {toggleReadOnly(!readOnlyValue) }} text="EDITAR DATOS">
                    </CustomButton></CustomFlex>}>
      <CustomFlex direction={"column"}>
        <Box
          sx={{
            marginBottom: "50rem",
            display: mobile ? "grid" : "flex",
            gridTemplateColumns: "23em 1fr",
            gridTemplateRows: "10em 2em",
            flexDirection: "column",
          }}
        >
          <Box>
            <Box sx={{ marginTop: "1rem" }}>
              <CustomFlex direction={"row"}>
                
              </CustomFlex>
            </Box>
            <Box sx={{ marginTop: "1rem", marginRight: "1rem" }}>
              <CustomFlex direction={"column"}>
                <BeneficiariesComplementaryInformation id={id} />
                <BeneficiariesAcademicExperienceForm id={id} />
                <BeneficiariesWorkExperiencesForm id={id} />
                <BeneficiariesAppointments id={id} />
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
      </CustomFlex>
    </BodyWrapper>
  );
}

export default BeneficiariesDetails;