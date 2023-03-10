import * as React from 'react';
import users, { CustomList } from '../../../static/user'
import { Avatar } from '@mui/material';
import CustomFlex from '../../../components/CustomFlex';
import CustomCard from '../../../components/CustomCard';
import BasicTable from '../../../components/BasicTable';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import CustomCardMini from '../../../components/CustomCardMini';

const usuarios = [
    {
      id: "1",
      username: "mariorey",
      name: "Mario",
      surname: "Rey",
      email: "marioreymario@gmail.com",
      age: "12",
      role: "Voluntario",
      avatarImage: <Avatar src="https://randomuser.me/api/portraits/men/21.jpg"> </Avatar>,
      nombreActividad: "Apoyo a actividad",
      fechaActividad: "22-03-2023"
    },
    {
      id: "2",
      username: "william",
      name: "Will",
      surname: "Smith",
      email: "willy@gmail.com",
      age: "25",
      role: "Voluntario",
      avatarImage: <Avatar src="https://randomuser.me/api/portraits/men/20.jpg"> </Avatar>,
      nombreActividad: "",
      fechaActividad: ""
    }, 
    {
      id: "3",
      username: "Alexander2134",
      name: "Alex",
      surname: "Rodriguez",
      email: "alex@gmail.com",
      age: "14",
      role: "Voluntario",
      avatarImage: <Avatar src="https://randomuser.me/api/portraits/men/25.jpg"> </Avatar>,
      nombreActividad: "Aquapark",
      fechaActividad: "25-03-2023"
    }, 
    {
      id: "4",
      username: "paqui23",
      name: "Francisco",
      surname: "Velazquez",
      email: "paquipaqui@gmail.com",
      age: "22",
      role: "Voluntario",
      avatarImage: <Avatar src="https://randomuser.me/api/portraits/women/29.jpg"> </Avatar>,
      nombreActividad: "Apoyo a actividad 2",
      fechaActividad: "25-03-2023"
    }, 
    
]



function Volunteers() {
  const UsuarioList = new CustomList(usuarios)
  let objetoTabla = UsuarioList.parseToTable(
    ["Id", "Nombre de usuario", "Nombre","Apellido", "Email","Edad","Rol","Avatar"], 
    ["id","username", "name", "surname", "email", "age","role","avatarImage", "activityHistory"],
    ["Actividades Realizadas", "Fecha"],
    ["nombreActividad", "fechaActividad"]
    )


  
  return (
      <CustomFlex direction={"column"}>
         <CustomFlex  direction={"row"}>
            <CustomCardMini 
                  title='Voluntarios'
                  iconD={<AccountBoxIcon htmlColor='#0055FF'/>}
                  totalNumber="100"/>
          </CustomFlex>
        <BasicTable objetoTabla = {objetoTabla}  maxHeight={"60vh"}></BasicTable>
      </CustomFlex>
    );
}

export default Volunteers;