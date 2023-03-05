import * as React from 'react';
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


function Row({row, details}) {
  const [open, setOpen] = React.useState(false);


  
  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        {row.map((e, i)=>{
              return (
                <TableCell key={i}>{e}</TableCell>
              )
            })}
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Description
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                  {details.header.map((e, i)=>{
                      return (
                        <TableCell  key={i} >{e}</TableCell>
                      )
                    })}
                  </TableRow>
                </TableHead>
                <TableBody>
                      {details.items.map((e, i)=>{
                      return (
                        <TableRow key={i}>
                          {e.map((item, i)=> {
                            return (
                              <TableCell component={"th"} key={i} >{item}</TableCell>
                            )
                          })}
                          </TableRow>
                      )
                    })}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}



export default function BasicTable({objetoTabla = null}){

  if(objetoTabla == null){
    return <div></div>
  }



  return (
    <TableContainer component={Paper}>
      <Table aria-label="able">
        <TableHead>
          <TableRow>
            <TableCell />
            {objetoTabla.header.map((e, i)=>{
              return (
                <TableCell key={i}>{e}</TableCell>
              )
            })}
          </TableRow>
        </TableHead>
        <TableBody>
        {objetoTabla.items.map((row, i) => (
            <Row key={i} row={row} details={objetoTabla.details}/>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}