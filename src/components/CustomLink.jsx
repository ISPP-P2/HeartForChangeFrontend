import React from 'react'
import { Link } from 'react-router-dom'

function CustomLink({children, to, ...rest}) {
  return (
    <Link 
        style={{
            textDecoration: 'none', 
            color: "#0058AB",
        }}
    
    to={to} {...rest}> 
        {children}
    </Link>
  )
}

export default CustomLink