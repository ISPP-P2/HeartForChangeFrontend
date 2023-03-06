import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

function BodyWrapper({children, title}) {
  return (
    <Box >
        <Typography component={"h1"} fontSize={"2rem"} fontWeight={"550"} color={"#686868"} marginBottom={'1rem'}>
            {title}
        </Typography>
        {children}
    </Box>
  )
}

export default BodyWrapper