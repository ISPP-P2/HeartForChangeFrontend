import * as React from 'react';
import Box from '@mui/material/Box';
import BasicTable from '../../../components/BasicTable';
import CustomCard from '../../../components/CustomCard';
import CustomFlex from '../../../components/CustomFlex';
import { CustomList } from '../../../static/user';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import CustomCardMini from '../../../components/CustomCardMini';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import CustomLink from '../../../components/CustomLink';
import BasicModal from '../../../components/BasicModal';
import CustomButton, { VARIANTES_BUTTON } from '../../../components/CustomButton';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Typography } from '@mui/material';
import ActivityForm from './ActivityForm';
import { useAuthUser } from 'react-auth-kit';
import { useQuery } from 'react-query';
import { deleteActivityAPI, getActivitiesAPI } from '../../../api/actividades/api';

export const actividades = [
    {
      id: 1,
      name: "Ayúdanos a salvar a los lemures rojos",
      description: "Se realizará en el campo verde de la fuensanta donde les llevaremos mangos a todos los lemúres rojos de la zona. Todo el mundo es bienvenido a esta actividad",
      type: "Ayuda",
      location: "Parque de la Fuensanta",
      capacity: "100",
      date: "22-03-2023",
      coordinator: "Pepe Rodriguez",
      finished: "Si",
      group: "INDIVIDUAL"
    },
    {
      id: 2,
      name: "Actividad de recaudación de fondos",
      description: "Haced donaciones a ES1920956412998266421815, muchas gracias.",
      type: "Recaudación",
      location: "España",
      capacity: "Ilimitada",
      date: "2023",
      coordinator: "Alberto Martin",
      finished: "Si",
      group: "INDIVIDUAL"

    },
    {
      id: 3,
      name: "Actividad de prueba",
      description: "Una actividad de prueba",
      type: "Prueba",
      location: "Sevilla",
      capacity: "3",
      date: "05-03-2023",
      coordinator: "Juan Pablo",
      finished: "Si",
      group: "INDIVIDUAL"
    },
    {
      id: 4,
      name: "Concierto benéfico Roaming in my Head",
      description: "Necesitaremos personas con conocimiento relativo a gestión de espectáculos en directo.",
      type: "Técnico",
      location: "Sevilla",
      capacity: "12",
      date: "14-03-2023",
      coordinator: "Mario Pérez Coronel",
      finished: "Si",
      group: "GRUPO"
    },
]






function Activities() {

  const user = useAuthUser();
  const query = useQuery(["QUERY_ACTIVITIES"],() => getActivitiesAPI(user().token));

  if(query.isLoading){
    return <Typography variant="h4" component="div" gutterBottom>
            Cargando...
        </Typography>
  }

  if(query.isError){
    return <Typography variant="h4" component="div" gutterBottom>
           {query.error}
        </Typography>
  }

  const handleDelete = (id) => {
    deleteActivityAPI(user().token, id);
    location.reload()
  }

  const data = query.data

  const actividadesConBoton = React.useMemo(() => {
    return data.map((actividad) => {
      return {
        ...actividad,
        button: <ToolList  actividad={actividad} handleDelete={handleDelete} id={actividad.id} />,
      };
    });
  }, [data]);


  const ActivityList = new CustomList(actividadesConBoton)
  let objetoTabla = ActivityList.parseToTable(
    ["Nombre de actividad", "Tipo","Lugar","Coordinador","Fecha","Ver detalles"],
    ["name", "type", "place","date","coordinator", "button"],
    ["Observaciones"],
    ["observations"]   
    )

  
  return (
    <CustomFlex direction={"column"}>
        <CustomFlex direction={"row"}>
            <CustomCardMini
                   title='Nº de actividades'
                  iconD={<BasicModal title={"Añadir actividad"} text={"Añadir"} body={<ActivityForm/>}/>}
                  totalNumber="100"/>
          </CustomFlex>
        <BasicTable objetoTabla = {objetoTabla}  maxHeight={"60vh"}></BasicTable>
      </CustomFlex>
    );
}

export default Activities;


const ToolList = ({actividad, handleDelete, id}) => {
  return (
    <CustomFlex justifyContent={"flex-start"} direction={"row"}>
      <CustomLink  to={`/actividad/${id}`}>
        <SearchIcon />
      </CustomLink>
      <BasicModal title={"¿Estás seguro?"} heightButton={"1.5rem"} body={<Box>
        <Typography>El actividad se eliminará permanentemente</Typography>
        <CustomButton onClick={()=>handleDelete(id)} text={"Eliminar"} variantButton={VARIANTES_BUTTON.RED} />
        </Box>} variant={VARIANTES_BUTTON.RED} text={<DeleteForeverIcon />}
        />
        
    </CustomFlex>
  )

}