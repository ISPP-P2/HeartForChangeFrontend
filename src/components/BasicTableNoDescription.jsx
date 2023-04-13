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







function Row({row}) {
  
  return (
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
          {row.map((e, i)=>{
              return (
                <TableCell key={i}>{e}</TableCell>
              )
            })}
      </TableRow>
  );
}



export default function BasicTableNoDescription({
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
