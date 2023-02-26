import axios from '../api/auth/axios'

import { useSignIn } from 'react-auth-kit'
import { parseTokens } from '../api/auth/tokenUtils'
import { useNavigate } from 'react-router-dom'

const SignInComponent  = () => {
    const navigate = useNavigate()


    const SignIn = useSignIn()
    const onSubmit = () => {
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
                        refreshToken: tokens.refreshToken,                    // Only if you are using refreshToken feature
                        refreshTokenExpireIn: tokens.refreshTokenExpireIn     // Only if you are using refreshToken feature
                    }
                )){
                    console.log("Sesion iniciada")
                    navigate('/signed')
                }else {
                    console.log("error")
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
            <button onClick={onSubmit}>Sign in</button>
        </>
    )
}



export default SignInComponent;
