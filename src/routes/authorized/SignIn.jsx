import React from 'react';
import  {useSignOut, useAuthUser} from 'react-auth-kit'


const SignIn = () => {
    const auth = useAuthUser()

    const {username, rol} = auth()
    const signOut = useSignOut()

    return (
        <div>
            Hello {username} {rol},
            <button onClick={signOut}>Cerrar sesion</button>
        </div>
    );
};


export default SignIn;
