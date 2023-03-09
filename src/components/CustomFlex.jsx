import { Box } from '@mui/material'
import React from 'react'

function CustomFlex({children, direction, align="normal", justifyContent = null}) {
  return (
        <Box   sx={{
                display: "flex",
                flexDirection: direction,
                gap: "1rem",
                alignItems: align,
                justifyContent: justifyContent == null ? "none": justifyContent 
              }}>  
              {children} 
        </Box>        
        
        
  )
}

export default CustomFlex