import {
  Box,
  FormControl,
  Grid,
  Select,
  TextareaAutosize,
  TextField,
  InputLabel,
} from "@mui/material";

import { Formik } from "formik";
import React from "react";
import MenuItem from "@mui/material/MenuItem";
import {
  createDiccFromList,
  createYupDicc,
  FORM_TYPES,
} from "./utils/utilsForms";
import CustomButton from "./CustomButton";
import { useId } from "react";
import FormControl2 from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import FormHelperText from '@mui/joy/FormHelperText';
import Textarea from '@mui/joy/Textarea';
function BasicFrom({
  form = null,
  handleSubmitForm = null,
  width = "-webkit-fill-available",
  buttonText = null,
  readOnly = false,
  showButton = true
}) {
  if (form == null || handleSubmitForm == null) {
    <div>Loading form...</div>;
  }

  return (
    <Formik
      onSubmit={handleSubmitForm}
      validationSchema={createYupDicc(form)}
      initialValues={createDiccFromList(form)}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        setFieldValue,
        values,
        errors,
        touched,
      }) => (
        <Box sx={{ width: width }}>
          <Grid
            display={"grid"}
            gap={"1rem"}
            gridAutoColumns={"1fr"}
            gridTemplateColumns= {"repeat(auto-fill , minmax(15rem , 1fr))"}
            >
            {form.map((props, i) => (
              <FormControl
                sx={{
                    display:'flex', 
                    margin: 0, 
                    mt: "3vh",
                    justifyContent: "flex-end",
                
                }}
                key={props.name}
                fullWidth
              >
                <CustomInput
                  {...props}
                  setFieldValue={setFieldValue}
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                  values={values}
                  readOnly={readOnly}
                />
                {errors[props.name] && touched[props.name] ? (
                  <div style={{ color: "red" }}>{errors[props.name]}</div>
                ) : null}
              </FormControl>
            ))}
            {buttonText === null ?  null : 
            <Box gridColumn={"-2/-1"} display={"flex"} alignItems={"flex-end"} justifyContent={"center"}>
                <CustomButton 
                onClick={handleSubmit} 
                text={buttonText} 
                show={showButton}
                />
            </Box>
            }
          </Grid>
        </Box>
      )}
    </Formik>
  );
}

const CustomInput = (props) => {
  if (props.type == FORM_TYPES.TEXT || props.type == FORM_TYPES.ONLYDATE   || props.type == FORM_TYPES.NUMBER || props.type == FORM_TYPES.DATE) {
    return (
      <TextField
        type={props.type}
        disabled={props.readOnly}
        value={props.values[`${props.name}`]}
        onChange={props.handleChange(`${props.name}`)}
        variant="standard"
        label={props.label}
        InputLabelProps={{
          shrink: true,
        }}

        InputProps={{
          endAdornment: props.icon,
        }}
        sx={{
          "& .MuiInputBase-input.Mui-disabled": {
            WebkitTextFillColor: "#000000",
          },
          "& .MuiInputLabel-root.Mui-disabled": {
            WebkitTextFillColor: "#000000",
          },
        }}
      />
    );
  }
  if (props.type === FORM_TYPES.SELECT) {
    return (
      <TextField
        disabled={props.readOnly}
        value={props.values[`${props.name}`]}
        onChange={(event, value) => {props.setFieldValue(`${props.name}`, value.props.value);}}
        variant="standard"
        label={props.label}
        select
        sx={{
          "& .MuiInputBase-input.Mui-disabled": {
            WebkitTextFillColor: "#000000",
          },
          "& .MuiInputLabel-root.Mui-disabled": {
            WebkitTextFillColor: "#000000",
          },
        }}
      >
        {props.list === null || props.list === undefined ? (
          null
        ) : (
          props.list.map((e, i) => {
            return (
              <MenuItem key={i} value={e.value}>
                <em>{e.label}</em>
              </MenuItem>
            );
          })
        )}
      </TextField>
    );
  }

  if (props.type === FORM_TYPES.TEXTEAREA) {
    return (
  

      <FormControl2>
      <FormLabel sx={{color:"grey", fontFamily:"Arial",fontWeight: 400, fontSize: "0.75rem"}}>{props.label}</FormLabel>
      <Textarea  minRows={2} disabled={props.readOnly}
    

            name={props.name}
            onChange={props.handleChange(`${props.name}`)}
            onBlur={props.handleBlur(`${props.name}`)}
            value={props.values[`${props.name}`]}
            sx={{
              "& .css-1onucoh-JoyTextarea-textarea": {
                WebkitTextFillColor: "#000000",
              },
            }}
             />
    
    </FormControl2>
    );
  }

  return <div>null</div>;
};

export default BasicFrom;
