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

export default function BasicModal({text,title,body,variant,widthButton,heightButton,setHandleCloseButton}) {
  
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  React.useEffect(() => {
    if(setHandleCloseButton===undefined) return;
    setHandleCloseButton({handleClose})
  }, [setHandleCloseButton])

  const mobile = useMediaQuery('(min-width:600px)')

  return (
    <>
      <CustomButton widthButton={widthButton} heightButton={heightButton} onClick={handleOpen} variantButton={variant} text={text} />
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
    </>
  );
}