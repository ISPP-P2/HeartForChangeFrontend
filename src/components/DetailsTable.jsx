import PropTypes from 'prop-types';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import users from '../static/user';
import { useState } from 'react';




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

function Row({row}) {
  return (
      <>
        <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
          <TableCell sx={{width: "4rem"}}>
          </TableCell>
          {row.map((e, i)=>{
            return (
                <TableCell key={i}>{e}</TableCell>
            )
          })}
        </TableRow>
      </>
  );
}


export default function DetailsTable({maxHeight = null,maxWidth = null, activityData = null}){

  if(activityData == null){
    return <div></div>
  }else{
    return (
        <TableContainer sx={{
          maxHeight: maxHeight === null ? null : maxHeight,
          maxWidth: maxWidth === null ? null : maxWidth
        }} component={Paper}>
          <Table aria-label="able">
            <TableHead>
              <TableRow>
                <TableCell />
                {activityData.header.map((e, i)=>{
                  return (
                      <TableCell key={i}>{e}</TableCell>
                  )
                })}
              </TableRow>
            </TableHead>
            <TableBody>
              {activityData.items.map((row, i) => (
                  <Row key={i} row={row}/>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
    );
  }
}