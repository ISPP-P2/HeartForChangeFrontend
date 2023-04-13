import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import users from '../static/user';
import { useState } from 'react';
import { margin } from '@mui/system';




function createData(id,username, name, surname, email, age,role,avatarImage='', activityHistory) {
    return {
      id,
      name,
      username,
      surname,
      email,
      age,
      role,
      avatarImage,
      activityHistory,
    };
  }


const DetailsComponent = ({details, open}) => {
  return (
    <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                  {details.header.map((e, i)=>{
                      return (
                        <TableCell sx={{fontWeight: 600}} key={i} >{e}</TableCell>
                      )
                    })}
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow >
                      {details.items.map((e, i)=>{
                      return (
                            <TableCell component={"th"} key={i} >{e}</TableCell>
                      )
                    })}
                    </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
  )
}




function Row({row}) {
  const [open, setOpen] = useState(false);

  let details = row.slice(-1)[0] 
  row = row.slice(0, -1)
  
  return (
    <>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell sx={{width: "4rem"}}>
          <IconButton 
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
          {row.map((e, i)=>{
              return (
                <TableCell key={i}>{e}</TableCell>
              )
            })}
      </TableRow>
      <DetailsComponent details={details} open={open} />
    </>
  );
}



export default function BasicTable({
  maxHeight = null,
  objetoTabla = null, 
  maxWidth = null,
  filter = null,
  margin = "0"
}){

  if(objetoTabla == null){
    return <div></div>
  }

  return (
    <TableContainer sx={{
      maxHeight: maxHeight === null ? null : maxHeight,
      maxWidth: maxWidth === null ? null : maxWidth,
      margin: margin
    }} component={Paper}>
      <Table aria-label="able">
        <TableHead>
          <TableRow>
            <TableCell  />
            {objetoTabla.header.map((e, i)=>{
              return (
                <TableCell sx={{fontWeight: 600}} key={i}>{e}</TableCell>
              )
            })}
          </TableRow>
        </TableHead>
        <TableBody>
        {objetoTabla.items.length === 0 ?
          <TableRow>
            <TableCell sx={{textAlign: "center"}}>
              No hay datos para mostrar
            </TableCell>
          </TableRow>
          :
        objetoTabla.items.map((row, i) => (
            <Row key={i} row={row}/>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
