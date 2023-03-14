import React from 'react'
import Card from '@mui/material/Card';
import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';
import { Box, CardContent, CardHeader, IconButton, Typography, useMediaQuery } from '@mui/material';
import CustomButton, { VARIANTES_BUTTON } from './CustomButton';



function CustomCard({
  title = 'Cosas',
  iconD,
  buttonSidebar}) {
  const mobile = useMediaQuery('(min-width:600px)')

  return (  
    <Card sx={{
      width: "20rem",
      height: "min-content",
      filter: "drop-shadow(1px 1px 1px rgba(0,0,0,0.3))",
    }}>
      <Box sx={{ 
        display: 'flex', 
        flexDirection: 'row', 
        textAlign: 'center', 
        justifyItems: "center",
        justifyContent: "space-between", 
        }}>
        <Box sx={{ 
            display: 'flex',
          flexDirection: 'column', 
          justifyItems: "center",
          textAlign: 'center', 
          alignItems: "end"
         }}>
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Box sx={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "column",
              gap: "1rem"
            }}>
            <Typography component="div" fontSize={"1.2rem"} fontWeight={550}>
              {title}
            </Typography>
             {buttonSidebar}
            </Box>
          </CardContent>  
        </Box>
        <Box  sx={{
          "& .MuiSvgIcon-root": {
            width: mobile ? "8rem" : "0rem",
            height:  mobile ? "8rem" : "0rem",
            color: "disabled"
          }
        }}>
            {iconD}
        </Box>
      </Box>
    </Card>
  )
}

export default CustomCard