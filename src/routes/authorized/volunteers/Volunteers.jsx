import users, { CustomList } from '../../../static/user'
import { Avatar } from '@mui/material';
import CustomFlex from '../../../components/CustomFlex';
import CustomCard from '../../../components/CustomCard';
import BasicTable from '../../../components/BasicTable';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import CustomCardMini from '../../../components/CustomCardMini';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import CustomLink from '../../../components/CustomLink';
import CustomButton, { VARIANTES_BUTTON } from '../../../components/CustomButton';
import BasicModal from '../../../components/BasicModal';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useEffect, useMemo } from 'react';
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
  const handleEliminar = () => {
    console.log("Eliminar")
  }



 const voluntariosConBoton = useMemo(() => {
    return usuarios.map((usuario) => {
      return {
        ...usuario,
        button:<ToolList usuario={usuario} handleEliminar={handleEliminar} /> ,
      };
    });
  }, [usuarios])

 


  const UsuarioList = new CustomList(voluntariosConBoton)

  let objetoTabla = UsuarioList.parseToTable(
    ["Nombre de usuario", "Nombre","Apellido", "Email","Edad","Rol","Avatar","Herramientas"], 
    ["username", "name", "surname", "email", "age","role","avatarImage", "button"],
    ["Actividades Realizadas", "Fecha"],
    ["nombreActividad", "fechaActividad"]
  )


  
  return (
      <CustomFlex direction={"column"}>
         <CustomFlex  direction={"row"}>
            <CustomCardMini 
                  title='Nº de voluntarios'
                  iconD={<CustomLink to="/voluntario/añadir"><CustomButton text={"Añadir"} /></CustomLink>}
                  totalNumber="100"/>
          </CustomFlex>
        <BasicTable objetoTabla = {objetoTabla}  maxHeight={"60vh"}></BasicTable>
      </CustomFlex>
    );
}

export default Volunteers;



const ToolList = ({usuario, handleEliminar}) => {
  return (
    <CustomFlex justifyContent={"flex-start"} direction={"row"}>
      <CustomLink to={`/voluntario/${usuario.id}`}>
          <SearchIcon />
        </CustomLink>
      <BasicModal title={"Eliminar"} heightButton={"1.5rem"}variant={VARIANTES_BUTTON.RED} text={<DeleteForeverIcon />}/>
    </CustomFlex>
  )

}