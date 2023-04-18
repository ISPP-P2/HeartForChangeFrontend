import * as React from "react";
import Box from "@mui/material/Box";

import CustomFlex from "../../../components/CustomFlex";
import CustomButton, {
  VARIANTES_BUTTON,
} from "../../../components/CustomButton";

import BasicFrom from "../../../components/BasicFrom";
import BodyWrapper from "../../../components/BodyWrapper";
import {  useMediaQuery } from "@mui/material";

import { useAuthUser } from "react-auth-kit";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { useState } from 'react'
import { form } from './SubventionForm'
import { getSubventionAPI, updateSubventionAPI } from '../../../api/subvenciones/api';
import CustomReloading from "../../../components/CustomReloading";
import CustomError from "../../../components/CustomError";
import { CustomNotistackContext } from "../../../context/CustomNotistack";




const parseSubvention = (subvention) => {
  return form.map((item) => {
    return { ...item, value: subvention[item.name] };
  });
}

function SubventionsDetails() {
  const {setSuccessMsg, setErrorMsg} = React.useContext(CustomNotistackContext)
  const [readOnlyValue, toggleReadOnly] = useState(true)
  const user = useAuthUser();
  const { id } = useParams();
  const query = useQuery(["QUERY_SUBVENTIONS_DETAILS", id],() => getSubventionAPI(user().token,id));
  const mobile = useMediaQuery("(min-width: 850px)");

  const [disableButton, setDisableButton] = useState(false)

  if(query.isLoading){
    return <CustomReloading />
  }

  if(query.isError){
    return <CustomError onClick={()=> query.refetch()}/>
  }

  const updateSubvention = (values) => {
    setDisableButton(true)
    updateSubventionAPI(user().token, values, id)
    .then((res) => {
      setSuccessMsg("Subvención actualizada correctamente")
      query.refetch()
    })
    .catch((err) => {
      setErrorMsg("Error al actualizar la subvención")
    }).finally
    (() => {
      setDisableButton(false)
      toggleReadOnly(!readOnlyValue);
    })
  }

  return (
    
    <BodyWrapper title={`Subvención: ${id}`}>
      <CustomFlex direction={"column"}>
        <Box
          sx={{
            display:"flex",
            gridTemplateColumns: "12em 1fr",
            gridTemplateRows: "10em 2em",
            flexDirection: "column",
          }}
        >
            <Box sx={{ marginTop: "1rem" }}>
              <CustomFlex direction={"row"}>
                <CustomButton variantButton={VARIANTES_BUTTON.GREEN2} onClick={() => {toggleReadOnly(!readOnlyValue);}} text="EDITAR DATOS"></CustomButton>
              </CustomFlex>
            </Box>
           
            {!query.isError && query.isSuccess ? 
                <BasicFrom sx={{display:"flex", flexDirection:"column"}}
                form={parseSubvention(query.data)}
                readOnly={readOnlyValue}
                buttonText={"Confirmar"}
                width={"100%"}
                isLoading={disableButton}
                handleSubmitForm={updateSubvention}
                showButton = {!readOnlyValue}
              /> : null}
           
            
              
          </Box>

      </CustomFlex>
    </BodyWrapper>
  );
}

export default SubventionsDetails;