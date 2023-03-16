import React, { useEffect, useState } from 'react'
import { useAuthUser, useIsAuthenticated } from 'react-auth-kit'
import { useNavigate } from 'react-router-dom'

function CustomSecurePath({children, login, authorizedRol, mainPath}) {

    const navigate = useNavigate()
    const isLogged = useIsAuthenticated()
    const auth = useAuthUser()
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        if(!isLogged()){
            setIsLoading(false)
            navigate(login)
        }else{
            if(auth().rol !== authorizedRol){
                navigate(mainPath)
            }
            setIsLoading(false)
        }
        setIsLoading(false)
    }, [isLogged, navigate, login])
    
  return (
    <>
        {isLoading ? null : children}
    </>
  )
}

export default CustomSecurePath