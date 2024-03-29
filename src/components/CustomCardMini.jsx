import React from 'react'
import Card from '@mui/material/Card';
import { Box, CardContent, CardHeader, IconButton, Typography, useMediaQuery } from '@mui/material';



function CustomCardMini({
  title = 'Cosas',
  iconD,
  totalNumber}) {
  const mobile = useMediaQuery('(min-width:600px)')

  return (  
    <Card sx={{
      width:  { xs: '20rem', lg: '24em', xl:'20em'},
      height: "min-content",
      filter: "drop-shadow(1px 1px 1px rgba(0,0,0,0.3))",
    }}>
      <Box sx={{ 
        padding: "0.75rem",
        display: 'flex', 
        flexDirection: 'row', 
        textAlign: 'center', 
        justifyContent: "space-between", 
        gap: "1rem"
        }}>
       
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Box sx={{
            display: "flex",
            alignItems: "flex-start",
            flexDirection: "column",
          }}>
          <Typography component="div" fontSize={"1rem"} fontWeight={550} color={"#5C5C5C"} >
            {title}
          </Typography>
          <Typography component="div" fontSize={"1.75rem"} fontWeight={550}>
            {totalNumber}
          </Typography>
          </Box>
        </CardContent>  
        <Box  sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          "& .MuiSvgIcon-root": {
            width:  "3rem",
            height:  "3rem",
          }
        }}>
            {iconD}
        </Box>
      </Box>
    </Card>
  )
}

export default CustomCardMini