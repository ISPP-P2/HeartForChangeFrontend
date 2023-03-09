import { Box } from '@mui/material'
import React from 'react'

function CustomFlex({children, direction, align="normal"}) {
  return (
        <Box   sx={{
                display: "flex",
                flexDirection: direction,
                gap: "1rem",
                alignItems: align
              
              }}>  
              {children} 
        </Box>        
        
        
  )
}

export default CustomFlex