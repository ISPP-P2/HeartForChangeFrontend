import { Box } from '@mui/material'
import React from 'react'

function CustomFlex({children, direction,flexBasis='auto', margin= 'none',wrap = "none", align="normal", justifyContent = null}) {
  return (
        <Box   sx={{
                display: "flex",
                flexDirection: direction,
                gap: "1rem",
                alignItems: align,
                justifyContent: justifyContent == null ? "none": justifyContent,
                margin: margin
              }}>  
              {children} 
        </Box>        
        
        
  )
}

export default CustomFlex