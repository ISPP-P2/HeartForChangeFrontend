import React from 'react'
import Card from '@mui/material/Card';
import { Box, CardContent, CardHeader, IconButton, Typography } from '@mui/material';


function CustomCard() {
  return (
    <Card sx={{
      width: "min-content",
      filter: "drop-shadow(1px 1px 1px rgba(0,0,0,0.3))"
    }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            1000
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Voluntarios
          </Typography>
        </CardContent>
      </Box>
    </Card>
  )
}

export default CustomCard