import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import {Box} from '@mui/material';
import logo from '../../static/logo.png'
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useNavigate } from 'react-router';
import CustomButton, { VARIANTES_BUTTON } from '../../components/CustomButton';
import { parseTokens } from '../../api/auth/tokenUtils';
import { useIsAuthenticated, useSignIn } from 'react-auth-kit';
import axios from '../../api/auth/axios';
import { CustomNotistackContext } from '../../context/CustomNotistack';
import { useContext, useEffect, useState } from 'react';

function Copyright(props) {
return (
  <Typography variant="body2" color="text.secondary" align="center" {...props}>
    {'Copyright ©Heart4Change '}
    <Link color="inherit" href="https://sites.google.com/view/heartforchange-group-2/inicio">
      Landing Page
    </Link>{' '}
    {new Date().getFullYear()}
    {'.'}
  </Typography>
);
}


export default function SignIn() {

  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });
  const isLogged = useIsAuthenticated()
  const [isLoading, setIsLoading] = useState(true)

  const navigate = useNavigate()
  
  const SignIn = useSignIn()
  const {setSuccessMsg,setErrorMsg} = useContext(CustomNotistackContext)


  useEffect(() => {
    if(isLogged()){
      setIsLoading(false)
      navigate("/")
  }
  setIsLoading(false)
  }, [isLogged, navigate])





  const onChangePassword = (event) => {
    setCredentials({ ...credentials, password: event.target.value });
  };

  const onChangeUser = (event) => {
    setCredentials({ ...credentials, username: event.target.value });
  };

  

  const onSubmitDev = () => {
    axios.post("/api/accounts/signin", {
      username: credentials.username,
      password: credentials.password
    }).then((response) => {
      const tokens = parseTokens(response)
      console.log(response)
      if(SignIn(
        {
            token: tokens.token,
            expiresIn: tokens.expiresIn,
            tokenType: tokens.tokenType,
            authState: tokens.authState,
            refreshToken: tokens.refreshToken,                   
            refreshTokenExpireIn: tokens.refreshTokenExpireIn   
        }
      )){
          setSuccessMsg("Sesion iniciada");
          navigate('/');
      }else {
          setErrorMsg("Error al iniciar sesión");
      }
    }).catch((error) => {
      console.log(error)
      setErrorMsg("Error al iniciar sesión");
    })
  }
  
return (
    <Container component="main" maxWidth="xs">
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
          Iniciar sesión
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            onChange={onChangeUser}
            fullWidth
            id="email"
            label="Correo electrónico"
            name="email"
            autoComplete="email"
            autoFocus
            sx={{
              // input label when focused
              "& label.Mui-focused": {
                color:  "#ff862f"
              },
            // focused color for input with variant='outlined'
                "& .MuiOutlinedInput-root": {
                  "&.Mui-focused fieldset": {
                    borderColor: "#ff862f"
                  }
                }
                }}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            onChange={onChangePassword}
            label="Contraseña"
            type="password"
            id="password"
            autoComplete="current-password"
             sx={{
              // input label when focused
              "& label.Mui-focused": {
                color:  "#ff862f"
              },
            // focused color for input with variant='outlined'
                "& .MuiOutlinedInput-root": {
                  "&.Mui-focused fieldset": {
                    borderColor: "#ff862f"
                  }
                }
                }}
          />
                
          <div  style={{ display: 'flex', justifyContent:'center' }}>
          <CustomButton  onClick={onSubmitDev} text={"Entrar"} variantButton={VARIANTES_BUTTON.ORANGE }/>
          </div>
          <Grid container>
            <Grid item >
            <Link color="text.secondary" variant="h5" fontSize= "1em" href="/" underline="none" sx={{"&:hover": {
                    opacity: 0.70
                }}}>
            Crear Cuenta
        </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
);

}

