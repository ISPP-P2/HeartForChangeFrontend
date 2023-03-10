import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CustomButton from './CustomButton';
import { useMediaQuery } from '@mui/material';
import CustomFlex from './CustomFlex';
import CloseIcon from '@mui/icons-material/Close';
const style = (mobile) => {
  return {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  width: mobile ? "max-content" : "100vw",
  height: mobile ? "max-content" : "100vh",
  }
};

export default function BasicModal({text,title,body}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const mobile = useMediaQuery('(min-width:600px)')

  return (
    <>
      <CustomButton onClick={handleOpen} text= {text}> </CustomButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style(mobile)} >
          <CustomFlex  margin='1rem' direction={"column"}>
            <Box display={"flex"} justifyContent={'end'}>
              <Button onClick={handleClose}>
                <CloseIcon />
              </Button>
            </Box>
            <Typography id="modal-modal-title" variant="h4" component="h2">
              {title}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {body}
            </Typography>
          </CustomFlex>

         
        </Box>
      </Modal>
    </>
  );
}