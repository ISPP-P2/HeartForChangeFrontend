import * as React from 'react';
import BasicTable from '../../../components/BasicTable';
import CustomFlex from '../../../components/CustomFlex';
import { CustomList } from '../../../static/user';
import { useParams } from 'react-router-dom';
import CustomButton from '../../../components/CustomButton';
import BodyWrapper from '../../../components/BodyWrapper';
import CustomLink from '../../../components/CustomLink';


const participants = [
    {
      checkbox: <input type="checkbox"/>,
      id: "1",
      name: "Manuela Martín Vallejo",
      dni: "80802020Z",
      gender: "Mujer",
      birthDate: "03/05/1998",
      phoneNumber: "627894821",
      description: "Hola" 
    },
    {
      checkbox: <input type="checkbox"/>,
      id: "2",
      name: "Eustaquio Fernández Pérez",
      dni: "80802025Z",
      gender: "Hombre",
      birthDate: "18/01/1971",
      phoneNumber: "698248513",
      description: "Hola" 
    },
    {
      checkbox: <input type="checkbox"/>,
      id: "3",
      name: "Víctor Díaz Manchón",
      dni: "80802028Z",
      gender: "Hombre",
      birthDate: "15/11/1982",
      phoneNumber: "669875202",
      description: "Hola" 
    },
    {
      checkbox: <input type="checkbox"/>,
      id: "4",
      name: "Fermín García Durán",
      dni: "80802021Z",
      gender: "Hombre",
      birthDate: "20/02/1995",
      phoneNumber: "633252254",
      description: "Hola" 
    },     
]

function AssignParticipants() {
  const {id} = useParams("id");

  const ActivityList = new CustomList(participants)
  let objetoTabla = ActivityList.parseToTable(
    ["", "Id", "Nombre", "DNI", "Sexo","Fecha Nacimiento", "Teléfono"],
    ["checkbox", "id", "name", "dni", "gender", "birthDate", "phoneNumber"],
    ["Descripcion"],
    ["description"]
    )
    
  return (
    <BodyWrapper title={`Asignar voluntarios a la actividad ${id}`}>
      <CustomFlex direction={"column"}>
        <CustomFlex direction={"row"}> 
            <CustomLink to={`/actividad/${id}/`}><CustomButton onClick={()=> {console.log()}} text={"Asignar voluntario"}/></CustomLink>
        </CustomFlex>
          <BasicTable objetoTabla = {objetoTabla}  maxHeight={"60vh"}></BasicTable>
      </CustomFlex>
    </BodyWrapper>
    );
}

export default AssignParticipants;