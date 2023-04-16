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
import { useAuthUser, useIsAuthenticated, useSignIn } from 'react-auth-kit';
import axios from '../../api/auth/axios';
import { CustomNotistackContext } from '../../context/CustomNotistack';
import { useContext, useEffect, useState } from 'react';
import CustomReloading from '../../components/CustomReloading';

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

  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
    cif:'',
    name:'',
    email:'',
    description:'',

  });
  const isLogged = useIsAuthenticated()
  const [isLoading, setIsLoading] = useState(true)
  const auth = useAuthUser()
  const navigate = useNavigate()
  const SignIn = useSignIn()
  const {setSuccessMsg,setErrorMsg} = useContext(CustomNotistackContext)

  useEffect(() => {
    if(isLogged()){
      if(auth().rol == "ONG"){
        navigate("/ong")
      }else{
        navigate("/vol")
      }
      setIsLoading(false)
    }
    setIsLoading(false)
  }, [isLogged, navigate])


  const onChangePassword = (event) => {
    setCredentials({ ...credentials, password: event.target.value });
  };

  const onChangeUser = (event) => {
    setCredentials({ ...credentials, username: event.target.value });
  };

  const onChangeDescription = (event) => {
    setCredentials({ ...credentials, description: event.target.value });
  };

  const onChangeName = (event) => {
    setCredentials({ ...credentials, name: event.target.value });
  };

  const onChangeCif = (event) => {
    setCredentials({ ...credentials, cif: event.target.value });
  };

  const onChangeEmail = (event) => {
    setCredentials({ ...credentials, email: event.target.value });
  };

  

  const onSubmitDev = () => {
    axios.post("/api/ongs/signup", {
      username: credentials.username,
      password: credentials.password,
      cif: credentials.cif,
      email: credentials.email,
      name: credentials.name,
      description: credentials.description
    }).then((response) => {
          setSuccessMsg("Cuenta creada correctamente");
          navigate('/')
    }
).catch((error) => {
      setErrorMsg("Error al crear la cuenta");
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
          <TextField
            margin="normal"
            required
            onChange={onChangeEmail}
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
            onChange={onChangeUser}
            id="username"
            label="Nombre de usuario"
            name="username"
            autoComplete="username"
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
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2, justifyContent: 'space-between', margin:'0' }}>
          <TextField
            margin="normal"
            required
            
            onChange={onChangeCif}
            id="cif"
            label="CIF"
            name="cif"
            autoComplete="cif"
            autoFocus
            sx={{width:'47%',
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
            
            onChange={onChangeName}
            id="name"
            label="Nombre de la ONG"
            name="name"
            autoComplete="name"
            autoFocus
            sx={{width:'47%',
            selfAlign:'flex-end',
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
          </Box>
          <TextField
            margin="normal"
            required
            fullWidth
            onChange={onChangeDescription}
            id="description"
            label="Descripción de la ONG"
            name="description"
            autoComplete="description"
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
          
                
          <div  style={{ display: 'flex', justifyContent:'center' }}>
          <CustomButton  onClick={onSubmitDev} text={"Registrar"} variantButton={VARIANTES_BUTTON.ORANGE }/>
          </div>
          <Grid container>
            <Grid item >
            <Link color="text.secondary" variant="h5" fontSize= "1em" href="/" underline="none" sx={{"&:hover": {
                    opacity: 0.70
                }}}>
            Iniciar sesión
        </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>}
    </>
);
}

