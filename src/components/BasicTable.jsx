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
import { Avatar } from '@mui/material';
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


function Row(props) {
  const { row } = props;
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
        <TableCell align="right">
            <Avatar
              alt={row.username}
              src={row.avatarImage}
              sx={{ width: 56, height: 56 }}>
            
            </Avatar>
        </TableCell>
        <TableCell align="right">{row.name}</TableCell>
        <TableCell align="right">{row.username}</TableCell>
        <TableCell align="right">{row.surname}</TableCell>
        <TableCell align="right">{row.email}</TableCell>
        <TableCell align="right">{row.age}</TableCell>
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
                    <TableCell>Date</TableCell>
                    <TableCell>Activity</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.activityHistory.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row">
                        {historyRow.date}
                      </TableCell>
                      <TableCell>{historyRow.activityName}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    age: PropTypes.string.isRequired,
    avatarImage: PropTypes.string.isRequired,
    activityHistory: PropTypes.array.isRequired,
     
    }),

};
console.log(users)
const rows = users.map(user => createData(user.id,user.username, user.name, user.surname, user.email, user.age, user.role, user.avatarImage, user.activityHistory));

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="able">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Avatar</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Username</TableCell>
            <TableCell align="right">Surname</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Age</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {rows.map((row) => (
            <Row key={row.id} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}