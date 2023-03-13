import React, { useEffect, useState } from 'react'
import { useIsAuthenticated } from 'react-auth-kit'
import { useNavigate } from 'react-router-dom'

function CustomSecurePath({children, login}) {

    const navigate = useNavigate()
    const isLogged = useIsAuthenticated()

    const [isLoading, setIsLoading] = useState(true)
     
    useEffect(() => {
        if(!isLogged()){
            setIsLoading(false)
            navigate(login)
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