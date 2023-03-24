import { Box, Button, Modal, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import CustomFlex from './CustomFlex'


const style = (mobile) => {
    return {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    border: "none",
    p: 4,
    borderRadius: "1rem",
    paddingTop: "0",  
    width: mobile ? "max-content" : "80vw",
    height:"max-content",
    maxHeight: "80vh",
    overflowY: "auto",
    scrollBehavior: "smooth",
    }
  };

function CustomModal({open,handleClose,title,body}) {

    const mobile = useMediaQuery('(min-width:600px)')

  return (
    <Modal
    open={open}
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description">
    <Box sx={style(mobile)}  >
      <CustomFlex margin='1rem' direction={"column"}>
        {mobile ? null : <Box display={"flex"} justifyContent={'end'}>
          <Button onClick={handleClose}>
            <CloseIcon />
          </Button>
        </Box>}
        <Typography id="modal-modal-title" variant="h4" sx={{padding:"1rem"}} component="h2">
          {title}
        </Typography>
        <Box id="modal-modal-description" sx={{ mt: 2 }}>
          {body}
        </Box>
      </CustomFlex>
    </Box>
  </Modal>
  )
}

export default CustomModal