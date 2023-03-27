import axios from '../../api/auth/axios'

import { useSignIn } from 'react-auth-kit'
import { parseTokens } from '../../api/auth/tokenUtils'
import { useNavigate } from 'react-router-dom'

const SignInComponent  = ({prop}) => {
    const navigate = useNavigate()
    const SignIn = useSignIn()

    

    const onSubmit = () => {
        // Simplemente para que inicie sesion en desarrollo
        axios.post("/accounts/signin", {
            "username": "asds",
            "password": "asds"
        }).then(
            response => {
                const tokens = parseTokens(response);
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
                    navigate('/')
                }
            }
        ).catch(
            error =>{
                console.error(error)
            }
        )
    }
    return (
        <>
            <button onClick={onSubmitDev}>Sign in</button>
        </>
    )
}


export default SignInComponent;
