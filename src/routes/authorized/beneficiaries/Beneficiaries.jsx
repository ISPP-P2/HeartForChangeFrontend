import * as React from 'react';
import Box from '@mui/material/Box';
import BasicTable from '../../../components/BasicTable';
import CustomCard from '../../../components/CustomCard'
import beneficiaries, { CustomList } from '../../../static/beneficiary'
import { Avatar } from '@mui/material';

const beneficiarios = [
    {
      id: "1",
      username: "gonzmart",
      name: "Gonzalo",
      surname: "Martin",
      email: "gonzalomartin@gmail.com",
      age: "12",
      role: "Beneficiario",
      avatarImage: <Avatar src="https://randomuser.me/api/portraits/men/3.jpg"> </Avatar>,
      nombreActividad: "Viaje a DisneyLand",
      fechaActividad: "22-03-2023"
    },
    {
      id: "2",
      username: "rodrigo13",
      name: "Rodrigo",
      surname: "Pérez",
      email: "rodriper@gmail.com",
      age: "25",
      role: "Beneficiario",
      avatarImage: <Avatar src="https://randomuser.me/api/portraits/men/4.jpg"> </Avatar>,
      nombreActividad: "",
      fechaActividad: ""
    }, 
    {
      id: "3",
      username: "alejandro41",
      name: "Alejandro",
      surname: "Rodriguez",
      email: "alex23@gmail.com",
      age: "14",
      role: "Beneficiario",
      avatarImage: <Avatar src="https://randomuser.me/api/portraits/men/35.jpg"> </Avatar>,
      nombreActividad: "Aquapark",
      fechaActividad: "25-03-2023"
    }, 
    {
      id: "4",
      username: "franny23",
      name: "Francisco",
      surname: "López",
      email: "franlopez@gmail.com",
      age: "22",
      role: "Beneficiario",
      avatarImage: <Avatar src="https://randomuser.me/api/portraits/women/14.jpg"> </Avatar>,
      nombreActividad: "Apoyo a actividad 2",
      fechaActividad: "25-03-2023"
    }, 
    {
        id: "5",
        username: "tere1132",
        name: "Teresa",
        surname: "López",
        email: "teresaa@gmail.com",
        age: "21",
        role: "Beneficiario",
        avatarImage: <Avatar src="https://randomuser.me/api/portraits/women/36.jpg"> </Avatar>,
        nombreActividad: "Apoyo a actividad 2",
        fechaActividad: "25-03-2023"
      }, 
    
]



function Beneficiaries() {
  const BeneficiariesList = new CustomList(beneficiarios)
  let objetoTabla = BeneficiariesList.parseToTable(
    ["Id", "Nombre de usuario", "Nombre","Apellido", "Email","Edad","Rol","Avatar"], 
    ["id","username", "name", "surname", "email", "age","role","avatarImage", "activityHistory"],
    ["Actividades Realizadas", "Fecha"],
    ["nombreActividad", "fechaActividad"]
    )


  
  return (
    <Box>
        <CustomCard title="Beneficiarios" quantity={beneficiarios.length}> </CustomCard>
        <BasicTable objetoTabla = {objetoTabla}  maxHeight={"60vh"}></BasicTable>
      </Box>
    );
}

export default Beneficiaries;