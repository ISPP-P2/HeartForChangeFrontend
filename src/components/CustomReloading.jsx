import { Box, CircularProgress } from '@mui/material'
import React from 'react'

function CustomReloading() {
  return (
    <Box sx={{display:"flex", flexDirection:"column", justifyItems:"center", gap:"1rem", alignItems:"center"}}> 
        <CircularProgress />
    </Box>
  )
}

export default CustomReloading