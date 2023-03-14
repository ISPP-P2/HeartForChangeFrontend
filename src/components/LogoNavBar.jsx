import logo from '../static/logo2.png'
import font from '../static/fonts/NewYork.otf'
import { Typography } from '@mui/material'
import { Box } from '@mui/system'

function LogoNavBar({height = null}) {
  return (
    <Box height={height} display={"flex"} alignItems={"center"} justifyItems={"center"} gap={'1rem'} marginTop={"1rem"}>
      <img style={{ width: height === null ? "50%" : height }}  src={logo}></img>
      <Box height={height} display={"flex"} flexDirection={height === null ? "column" : "row"} alignItems={'center'}>
            <Typography sx={{fontFamily: "LOGOFONT", color: "white"}}>
              Heart
            </Typography>
            <Typography sx={{fontFamily: "LOGOFONT", color: "white"}}>
              For
            </Typography>
            <Typography sx={{fontFamily: "LOGOFONT", color: "white"}}>
              Change
            </Typography>
      </Box>
    </Box>
  )
}

export default LogoNavBar