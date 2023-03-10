import { Box } from '@mui/material'
import React from 'react'

function CustomFlex({children, direction, margin= 'none'}) {
  return (
        <Box   sx={{
                display: "flex",
                flexDirection: direction,
                gap: "1rem",
                margin: margin
              }}>  
              {children} 
        </Box>        
        
        
  )
}

export default CustomFlex