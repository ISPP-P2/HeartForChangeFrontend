import {
  Box,
  FormControl,
  Grid,
  Select,
  TextareaAutosize,
  TextField,
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

function BasicFrom({
  form = null,
  handleSubmitForm = null,
  width = "max-content",
  columns = null,
  buttonText = "Guardar"
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
            gridTemplateColumns={columns === null ? null : `repeat(${columns}, 1fr)`}
            >
            {form.map((props, i) => (
              <FormControl
                sx={{
                    display:'flex', 
                    margin: 0, 
                    mt: "3vh",
                    justifyContent: "flex-end"
                
                }}
                key={props.name + i}
                fullWidth
              >
                <CustomInput
                  {...props}
                  setFieldValue={setFieldValue}
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                  values={values}
                />
                {errors[props.name] && touched[props.name] ? (
                  <div style={{ color: "red" }}>{errors[props.name]}</div>
                ) : null}
              </FormControl>
            ))}
            <CustomButton 
                onClick={handleSubmit} 
                text={buttonText} 
            />
          </Grid>
        </Box>
      )}
    </Formik>
  );
}

const CustomInput = (props) => {
  if (props.type == FORM_TYPES.TEXT || props.type == FORM_TYPES.NUMBER || props.type == FORM_TYPES.DATE) {
    return (
      <TextField
        type={props.type}
        variant="standard"
        label={props.label}
        InputProps={{
          endAdornment: props.icon,
        }}
      />
    );
  }
  if (props.type === FORM_TYPES.SELECT) {
    return (
      <Select
        onChange={(event, value) => {
          console.log(value);
          props.setFieldValue(`${props.name}`, value.props.value);
        }}
        variant="standard"
        label={props.label}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {props.list === null || props.list === undefined ? (
          <MenuItem>Cargando lista</MenuItem>
        ) : (
          props.list.map((e) => {
            return (
              <MenuItem value={e.value}>
                <em>{e.label}</em>
              </MenuItem>
            );
          })
        )}
      </Select>
    );
  }

  if (props.type === FORM_TYPES.TEXTEAREA) {
    return (
      <TextareaAutosize
        minRows={4}
        name={props.name}
        onChange={props.handleChange(`${props.name}`)}
        onBlur={props.handleBlur(`${props.name}`)}
        type={props.type}
        placeholder={props.label}
      />
    );
  }

  return <div>null</div>;
};

export default BasicFrom;
