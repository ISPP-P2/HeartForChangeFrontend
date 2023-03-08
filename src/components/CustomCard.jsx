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
      width: "80%",
      height: "min-content",
      margin: "5%",
      filter: "drop-shadow(1px 1px 1px rgba(0,0,0,0.3))",
    }}>
      <Box sx={{ 
        padding: "1rem",
        display: 'flex', 
        flexDirection: 'row', 
        textAlign: 'center', 
        justifyContent: "space-between", 
        gap: "1rem"
        }}>
        <Box sx={{ display: 'flex',
         flexDirection: 'column', 
         textAlign: 'center', 
         gap: "1rem",
         alignItems: "end"
         }}>
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Box sx={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "column",
              gap: "2rem"
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
            width: mobile ? "8rem" : "5rem",
            height:  mobile ? "8rem" : "5rem",
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