import { Box } from '@mui/material'
import React from 'react'

function CustomFlex({children, direction}) {
  return (
        <Box   sx={{
                display: "flex",
                flexDirection: direction,
                gap: "1rem"
              
              }}>  
              {children} 
        </Box>        
        
        
  )
}

export default CustomFlex