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
import AcademicExperienceForm from "./AcademicExperienceForm";
import ComplementaryFormationForm from "./ComplementaryFormationForm";
import WorkExperienceForm from "./WorkExperienceForm";
import { useMediaQuery,Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import { useAuthUser } from 'react-auth-kit';
import { useQuery } from 'react-query';
import { useLocation } from "react-router-dom";
import { getVolunteerAPI, updateVolunteersAPI } from '../../../api/voluntarios/api';
import { useParams } from 'react-router-dom';
import VolunteerAcademicExperienceForm from "./VolunteerAcademicExperienceForm";
import VolunteerComplementaryForm from "./VolunteerComplementaryForm";
import VolunteerWorkForm from "./VolunteerWorkForm";
import ActivityListByVolunteer from "./ActivityListByVolunteer";
import { CustomNotistackContext } from "../../../context/CustomNotistack";
import CustomReloading from "../../../components/CustomReloading";
import CustomError from "../../../components/CustomError";
import moment from "moment";


let voluntarioForm = [
  {
    name: "username",
    type: FORM_TYPES.TEXT,
    label: "Nombre de usuario",
  },
  {
    name: "email",
    type: FORM_TYPES.TEXT,
    label: "Correo electrónico",
  },
  {
    name: "name",
    type: FORM_TYPES.TEXT,
    label: "Nombre",
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
    name: "documentNumber",
    type: FORM_TYPES.TEXT,
    label: "Número de Documentación",
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
    name: "birthday",
    type: FORM_TYPES.ONLYDATE,
    label: "Fecha de cumpleaños",
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
    name: "numberOfChildren",
    type: FORM_TYPES.NUMBER,
    label: "Número de hijos",
  },

  {
    name: "entryDate",
    type: FORM_TYPES.ONLYDATE,
    label: "Fecha de Inicio",
  },
  {
    name: "leavingDate",
    type: FORM_TYPES.ONLYDATE,
    label: "Fecha de Finalización",
  },
  {
    name: "address",
    type: FORM_TYPES.TEXT,
    label: "Dirección",
  },
  {
    name: "postalCode",
    type: FORM_TYPES.NUMBER,
    label: "Código Postal",
  },
  {
    name: "registrationAddres",
    type: FORM_TYPES.TEXT,
    label: "Dirección de registro",
  },
  {
    name: "town",
    type: FORM_TYPES.TEXT,
    label: "Ciudad",
  },
  {
    name: "otherSkills",
    type: FORM_TYPES.TEXT,
    label: "Otras habilidades",
  },
  {
    name: "driveLicenses",
    type: FORM_TYPES.TEXT,
    label: "Carnet de conducir",
  },
  {
    name: "hourOfAvailability",
    type: FORM_TYPES.TEXT,
    label: "Horario de disponibilidad",
  },
  {
    name: "sexCrimes",
    type: FORM_TYPES.SELECT,
    label: "Crímenes sexuales",
    list: [
      { label: "Sí", value: true },
      { label: "No", value: false },
    ],
  },
  {
    name: "telephone",
    type: FORM_TYPES.NUMBER,
    label: "Teléfono",
  }
];


const parseDates = (voluntario) => {
  return {
    ...voluntario,
    birthday: voluntario.birthday === null ? "" : moment(`${voluntario.birthday[0]}-${voluntario.birthday[1]}-${voluntario.birthday[2]}`).format("yyyy-MM-DD"),
    entryDate: voluntario.entryDate === null ? "" : moment(`${voluntario.entryDate[0]}-${voluntario.entryDate[1]}-${voluntario.entryDate[2]}`).format("yyyy-MM-DD"),
    leavingDate: voluntario.leavingDate === null ? "" : moment(`${voluntario.leavingDate[0]}-${voluntario.leavingDate[1]}-${voluntario.leavingDate[2]}`).format("yyyy-MM-DD")
}};


const VolunteerDetailsParser = (voluntario) => {
  return voluntarioForm.map((item) => {
    return { ...item, value: parseDates(voluntario)[item.name] };
  });
}

const extraForm = (title, variable,voluntario) => [
  {
    name: "academicExperience",
    type: FORM_TYPES.TEXT,
    label: title,
    value: voluntario[variable]
  }
];

function VolunteerDetails({ match }) {
  const [readOnlyValue, toggleReadOnly] = React.useState(true)
  const {setSuccessMsg, setErrorMsg} = React.useContext(CustomNotistackContext)


  const mobile = useMediaQuery("(min-width: 850px)");
  const { id } = useParams();
  const user = useAuthUser();
  const voluntario = useQuery(["QUERY_VOLUNTEER", id],() => getVolunteerAPI(user().token,id));
  const [disableButton, setDisableButton] = React.useState(false);

  if(voluntario.isLoading){
    return <CustomReloading />
  }

  if(voluntario.isError){
    return <CustomError onClick={()=> voluntario.refetch()}/>
  }
  
  const updateVolunteer = (values) => {
    setDisableButton(true);
    updateVolunteersAPI(user().token, values, id).then(
      (response) => {
        toggleReadOnly(!readOnlyValue);
        voluntario.refetch();
        setSuccessMsg("Voluntario actualizado correctamente")
      }).catch((error) => {
          setErrorMsg("Error al actualizar el voluntario")
      }).finally(() => setDisableButton(false));
  }


  return (
    <BodyWrapper title={"Voluntario"}>
      <CustomFlex direction={"column"}>
        <Box
          sx={{
            display: mobile ? "grid" : "flex",
            gridTemplateColumns: "23em 1fr",
            gridTemplateRows: "10em 2em",
            flexDirection: "column",
          }}
        >
          <Box sw={{ innerHeight: "10px", gridColumn: "1/1", gridRow: "1/1" }}>
            <img src={voluntario.avatar} sx={{ width: "300px" }}></img>
          </Box>
          <Box>
            <Box sx={{ marginTop: "1rem" }}>
              <CustomFlex direction={"row"}>
              <Box flexBasis={"fit-content"}>
                <ActivityListByVolunteer  id={id} />
              </Box>
                <CustomButton variantButton={VARIANTES_BUTTON.GREEN2} onClick={() => {toggleReadOnly(!readOnlyValue) }}  text="EDITAR DATOS"></CustomButton>
              </CustomFlex>
            </Box>
            <Box sx={{ marginTop: "1rem", marginRight: "1rem" }}>
            <CustomFlex direction={"column"}>
            
                <VolunteerAcademicExperienceForm id={id} />
                <VolunteerWorkForm id={id} />
                <VolunteerComplementaryForm id={id} />
              </CustomFlex>
            </Box>
          </Box>
          <Box sx={{ gridColumn: "2/3", gridRow: "1/3" }}>
          {voluntario.isSuccess && !voluntario.isError ?   <BasicFrom
              form={VolunteerDetailsParser(voluntario.data)}
              readOnly={readOnlyValue}
              buttonText={"Confirmar"}
              width={"100%"}
              isLoading={disableButton}
              handleSubmitForm={updateVolunteer}
              showButton = {!readOnlyValue}
            /> : null}
          </Box>
        
        </Box>

        <CustomFlex direction={"column"}></CustomFlex>
      </CustomFlex>
    </BodyWrapper>
  );
}

export default VolunteerDetails;
