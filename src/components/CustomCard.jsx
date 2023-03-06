import React from 'react'
import Card from '@mui/material/Card';
import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';
import { Box, CardContent, CardHeader, IconButton, Typography } from '@mui/material';



function CustomCard({
  title = 'Cosas',
  quantity = '100',
  buttonSidebar}) {
  return (
    <Card sx={{
      width: "min-content",
      filter: "drop-shadow(1px 1px 1px rgba(0,0,0,0.3))"
    }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            {quantity}
          </Typography>
          <Typography variant="body" color="text.secondary" component="div">
            {title}
          </Typography> 
        </CardContent>  
      </Box>
    </Card>
  )
}

export default CustomCard