import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import {Box, Button} from '@mui/material';
import logo from '../../static/logo.png'
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useNavigate } from 'react-router';
import CustomButton, { VARIANTES_BUTTON } from '../../components/CustomButton';
import { parseTokens } from '../../api/auth/tokenUtils';
import { useAuthUser, useIsAuthenticated, useSignIn, useSignOut } from 'react-auth-kit';
import axios, { axiosWithToken } from '../../api/auth/axios';
import { CustomNotistackContext } from '../../context/CustomNotistack';
import { useContext, useEffect, useState } from 'react';
import CustomReloading from '../../components/CustomReloading';
import BasicFrom from '../../components/BasicFrom';
import { FORM_TYPES } from '../../components/utils/utilsForms';
import * as Yup from 'yup';
const credentialsFrom = [
 
  {
    name: "username",
    type: FORM_TYPES.TEXT,
    label: "Usuario *",
    validation: Yup.string("Deber ser una cadena de caracteres")
    .min(5, "Debe tener menos de 5 caracteres")
    .required("Este campo es obligatorio"),
  },
  {
    name: "password",
    type: FORM_TYPES.PASSWORD,
    label: "Contraseña *",
    validation: Yup.string("Deber ser una cadena de caracteres")
    .min(8, "Debe tener menos de 8 caracteres")
    .required("Este campo es obligatorio"),
  },
  {
    name: "name",
    type: FORM_TYPES.TEXT,
    label: "Nombre *",
    validation: Yup.string("Deber ser una cadena de caracteres")
    .required("Este campo es obligatorio"),
  },
  {
    name: "cif",
    type: FORM_TYPES.TEXT,
    label: "CIF *",
    validation: Yup.string("Deber ser una cadena de caracteres")
    .matches(/^[A-Z]{1}\d{8}$/, "El CIF debe tener 9 caracteres, empezar por una letra y terminar por 8 números")
    .max(150, "debe tener menos de 150 caracteres")
    .required("Este campo es obligatorio"),
  },
  {
    name: "email",
    type: FORM_TYPES.TEXT,
    label: "Correo electrónico *",
    validation: Yup.string("Deber ser una cadena de caracteres")
    .email("Debe ser un correo electrónico válido")
    .required("Este campo es obligatorio"),
  },
  {
    name: "description",
    type: FORM_TYPES.TEXTEAREA,
    label: "Descripción *",
    validation: Yup.string("Deber ser una cadena de caracteres")
    .min(10, "debe tener menos de 10 caracteres")
    .required("Este campo es obligatorio"),
  },
]


function Copyright(props) {
return (
  <Typography variant="body2" color="text.secondary" align="center" {...props}>
    {'Copyright ©Heart4Change '}
    <Link color="inherit" href="https://sites.google.com/view/heartforchange-group-2/inicio">
      Landing Page
    </Link>{' '}
    {new Date().getFullYear()}
    {'.'}
    <Link color="inherit" href="/privacidad" target="_blank">
      Términos y condiciones
    </Link>
  </Typography>
);
}


export default function Register() {


  const isLogged = useIsAuthenticated()
  const [isLoading, setIsLoading] = useState(true)
  const auth = useAuthUser()
  const navigate = useNavigate()
  const {setSuccessMsg,setErrorMsg} = useContext(CustomNotistackContext)
  const signout = useSignOut()



  useEffect(() => {
    if(isLogged()){
      if(auth().username != import.meta.env.VITE_USERNAME_ADMIN){
        navigate("/ong")
      }
      setIsLoading(false)
    }else{
      navigate("/")
    }
    setIsLoading(false)
  }, [isLogged, navigate])


 
  const [disableButton, setDisableButton] = useState(false)
  

  const onSubmitDev = (values) => {
    setDisableButton(true)
    axiosWithToken(auth().token).post("/api/ongs/signup", values)
    .then((response) => {
          setSuccessMsg("Cuenta creada correctamente");
          signout()
          navigate('/')
    }).catch((error) => {
          setErrorMsg("Error al crear la cuenta");
    }).finally(() => {
      setDisableButton(false)
    })
  }
  
return (
  <>
   {isLoading ? <CustomReloading /> :
    <Container component="main" maxWidth="s">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <div  style={{ display: 'flex',justifyContent:'center' }}>
          <img style={{ maxWidth: '50%' }}  src={logo}   ></img>
        </div>
        <Typography component="h1" variant="h5" color="#686868">
          Registrar una ONG
        </Typography>

        
      
        <Box component="form" noValidate sx={{ mt: 1, width: { xs: '90%', sm: '60%', xl:'30%'}, }}>
          <BasicFrom 
            handleSubmitForm={onSubmitDev}
            isLoading={disableButton}
            buttonText={"Registrar"}
            form={credentialsFrom}
            />
                
          <Button onClick={
                () => {
                  signout()
                  navigate('/')}

          } color="text.secondary" variant="h5" fontSize= "1em" href="/" underline="none" sx={{"&:hover": {
                    opacity: 0.70
                }}}>
            Volver
        </Button>
        
        </Box>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>}
    </>
);
}

