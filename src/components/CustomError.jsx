import { Box, CircularProgress, Typography } from '@mui/material'
import { display } from '@mui/system'
import React from 'react'
import CustomButton from './CustomButton'

function CustomError({onClick}) {
  return (
    <Box sx={{display:"flex", flexDirection:"column", justifyItems:"center", gap:"1rem", alignItems:"center"}}>
        <Typography fontWeight={550} color={"#555"} component={'h1'}>Error al cargar</Typography>
       <CustomButton onClick={onClick} text={"Recargar"}/>
    </Box>
  )
}

export default CustomError