import { Typography, useMediaQuery } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

function BodyWrapper({children, title}) {
const menuIsOpen = useMediaQuery('(min-width:600px)')


  return (
    <Box sx={{width: menuIsOpen ?   `calc(95vw - 200px)` : "85vw"}}>
        <Typography component={"h1"} fontSize={"2rem"} fontWeight={"550"} color={"#686868"} marginBottom={'1rem'}>
            {title}
        </Typography>
        {children}
    </Box>
  )
}

export default BodyWrapper